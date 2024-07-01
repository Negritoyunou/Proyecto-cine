document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieForm');
    const clearBtn = document.getElementById('clearBtn');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');

    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', handleClear);

    async function handleSubmit(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        const movieData = {};

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
                if (input.id === 'poster') {
                    if (!isValidURL(input.value)) {
                        isValid = false;
                        input.style.borderColor = 'red';
                    }
                }
                movieData[input.id] = input.value.trim();
            }
        });

        if (isValid) {
            try {

                // Realiza la solicitud POST al backend
                const response = await axios.post('http://localhost:3000/movies/createMovie', movieData);

                console.log('Película creada:', response.data);
                showNotification('Película registrada correctamente');

            } catch (error) {
                console.error('Error al crear la película:', error);
                showNotification('Error al crear la película. Por favor, intenta de nuevo.', false);
            }
        } else {
            showNotification('Por favor, complete todos los campos correctamente', false);
        }
    }

    function handleClear() {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '';
        });
    }

    function showNotification(message, success = true) {
        notificationMessage.textContent = message;
        notification.style.backgroundColor = success ? '#4CAF50' : '#f44336';
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
});