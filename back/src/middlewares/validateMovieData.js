const validateMovieData = (req, res, next) => {
    const { title, director, year, genre, duration, url, rate } = req.body;

    // Verificar que todos los campos estén presentes
    if (!title || !director || !year || !genre || !duration || !url || !rate) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Validar el título
    if (typeof title !== 'string' || title.trim().length < 1 || title.length > 100) {
        return res.status(400).json({ error: "El título debe ser una cadena no vacía de máximo 100 caracteres" });
    }

    // Validar el director
    if (typeof director !== 'string' || director.trim().length < 1 || director.length > 50) {
        return res.status(400).json({ error: "El nombre del director debe ser una cadena no vacía de máximo 50 caracteres" });
    }

    // Validar el año
    const currentYear = new Date().getFullYear();
    if (!/^\d{4}$/.test(year) || parseInt(year) < 1888 || parseInt(year) > currentYear) {
        return res.status(400).json({ error: `El año debe ser un número entre 1888 y ${currentYear}` });
    }
    
    // Validar la duración
    const parsedDuration = Number(duration);
    if (isNaN(parsedDuration) || parsedDuration <= 0 || parsedDuration > 600) {
        return res.status(400).json({ error: "La duración debe ser un número positivo no mayor a 600 minutos" });
    }

    // Validar el rate
    const parsedRate = Number(rate);
    if (isNaN(parsedRate) || parsedRate < 0 || parsedRate > 10) {
        return res.status(400).json({ error: "El rate debe ser un número entre 0 y 10" });
    }

    // Si todas las validaciones pasan, continuar al siguiente middleware o controlador
    next();
};

module.exports = validateMovieData;

