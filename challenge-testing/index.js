class Producto {
    constructor({ nombre, precio }) {
        this.nombre = nombre;
        this.precio = precio;
        if (typeof precio !== 'number') {
            throw new Error('Producto no válido');
        }
    }
}

class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        if (!(producto instanceof Producto)) {
            producto = new Producto(producto);
        }
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        return total - (total * (porcentaje / 100));
    }
}

// Exportar las clases para usarlas en otros archivos (como en las pruebas)
module.exports = { CarritoCompra, Producto };