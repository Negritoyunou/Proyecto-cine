const { CarritoCompra, Producto } = require('../index.js');

describe('CarritoCompra y Producto', () => {
    describe('Producto', () => {
        it('crea un producto con nombre y precio', () => {
            const producto = new Producto({ nombre: 'Libro 1', precio: 20 });
            expect(producto.nombre).toBe('Libro 1');
            expect(producto.precio).toBe(20);
        });
    });

    describe('CarritoCompra', () => {
        let carrito;

        beforeEach(() => {
            carrito = new CarritoCompra();
        });

        it('inicializa el carrito como un array vacío', () => {
            expect(carrito.productos).toEqual([]);
        });

        it('agrega productos al carrito', () => {
            const producto1 = new Producto({ nombre: 'Libro 1', precio: 20 });
            const producto2 = new Producto({ nombre: 'Libro 2', precio: 30 });
            
            carrito.agregarProducto(producto1);
            carrito.agregarProducto(producto2);
            
            expect(carrito.productos[0]).toBeInstanceOf(Producto);
            expect(carrito.productos[1]).toBeInstanceOf(Producto);
            expect(carrito.productos[0]).toEqual(producto1);
            expect(carrito.productos[1]).toEqual(producto2);
            expect(carrito.productos.length).toBe(2);
        });

        it('calcula el total de la compra correctamente', () => {
            carrito.agregarProducto({ nombre: 'Libro 1', precio: 20 });
            carrito.agregarProducto({ nombre: 'Libro 2', precio: 30 });
            carrito.agregarProducto({ nombre: 'Libro 3', precio: 25 });
            
            expect(carrito.calcularTotal()).toBe(75);
        });

        it('calcula el total correctamente con carrito vacío', () => {
            expect(carrito.calcularTotal()).toBe(0);
        });

        it('aplica descuento al total de la compra', () => {
            carrito.agregarProducto({ nombre: 'Libro 1', precio: 50 });
            carrito.agregarProducto({ nombre: 'Libro 2', precio: 50 });
            
            expect(carrito.calcularTotal()).toBe(100);
            expect(carrito.aplicarDescuento(10)).toBe(90); 
            expect(carrito.aplicarDescuento(25)).toBe(75); 
            expect(carrito.calcularTotal()).toBe(100); 
        });

        it('maneja descuentos de 0% y 100% correctamente', () => {
            carrito.agregarProducto({ nombre: 'Libro 1', precio: 50 });
            
            expect(carrito.aplicarDescuento(0)).toBe(50); 
            expect(carrito.aplicarDescuento(100)).toBe(0); 
        });

        it('maneja productos con precio 0', () => {
            carrito.agregarProducto({ nombre: 'Libro Gratis', precio: 0 });
            expect(carrito.calcularTotal()).toBe(0);
        });

        it('maneja productos con precio negativo', () => {
            carrito.agregarProducto({ nombre: 'Error', precio: -10 });
            expect(carrito.calcularTotal()).toBe(-10);
        });

        it('permite agregar tanto objetos simples como instancias de Producto', () => {
            const productoInstancia = new Producto({ nombre: 'Libro Instancia', precio: 40 });
            const productoObjeto = { nombre: 'Libro Objeto', precio: 60 };

            carrito.agregarProducto(productoInstancia);
            carrito.agregarProducto(productoObjeto);

            expect(carrito.productos[0]).toBe(productoInstancia);
            expect(carrito.productos[1]).toBeInstanceOf(Producto);
            expect(carrito.productos[1].nombre).toBe('Libro Objeto');
            expect(carrito.productos[1].precio).toBe(60);
        });

        // Test con mock y error controlado
        it('lanza un error al agregar un producto no válido', () => {
            const mockAgregarProducto = jest.spyOn(carrito, 'agregarProducto');
            const productoInvalido = { nombre: 'Producto inválido', precio: 'no un número' };
            
            expect(() => carrito.agregarProducto(productoInvalido)).toThrow('Producto no válido');
            expect(mockAgregarProducto).toHaveBeenCalledTimes(1);

            mockAgregarProducto.mockRestore(); // Restaurar el método original
        });
    });
});
