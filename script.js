document.addEventListener('DOMContentLoaded', function() {
    const verProductosBtn = document.getElementById('ver-productos');
    const verDuenosBtn = document.getElementById('ver-duenos');
    const verVendedoresBtn = document.getElementById('ver-vendedores');
    const productosSection = document.getElementById('productos');
    const duenosSection = document.getElementById('duenos');
    const vendedoresSection = document.getElementById('vendedores');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');


    verProductosBtn.addEventListener('click', function() {
        mostrarProductos();
    });

    verDuenosBtn.addEventListener('click', function() {
        mostrarDuenos();
    });

    verVendedoresBtn.addEventListener('click', function() {
        mostrarVendedores();
    });

    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.addEventListener('click', function() {
            const productoId = this.getAttribute('data-id');
            mostrarProducto(productoId);
        });

        // Cambiar color del título al pasar el ratón
        const titulo = producto.querySelector('h3');
        titulo.addEventListener('mouseover', function() {
            titulo.style.color = '#007bff'; // Color azul
            titulo.style.cursor = 'pointer';
        });

        titulo.addEventListener('mouseout', function() {
            titulo.style.color = ''; // Volver al color original
            titulo.style.cursor = 'default';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function mostrarProductos() {
        productosSection.style.display = 'block';
        vendedoresSection.style.display = 'none';
        duenosSection.style.display = 'none';
        productosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function mostrarDuenos() {
        duenosSection.style.display = 'block';
        vendedoresSection.style.display = 'none';
        productosSection.style.display = 'none';
        duenosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function mostrarVendedores() {
        vendedoresSection.style.display = 'block';
        duenosSection.style.display = 'none';
        productosSection.style.display = 'none';
        vendedoresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function mostrarProducto(id) {
        const productoInfo = {
            producto1: {
                nombre: 'RedEngine',
                descripcion: `
                    Instant Delivery<br>
                    24/7 Support Available in English and Spanish<br>
                    Exclusive Customer Channel
                `,
                precios: [
                    { nombre: 'Executor Lifetime', precio: '€50' },
                    { nombre: 'Executor Monthly', precio: '€20' },
                    { nombre: 'Executor Weekly', precio: '€10' },
                    { nombre: 'Woofer Monthly', precio: '€15' },
                    { nombre: 'Woofer Weekly', precio: '€8.50' }
                ],
                metodosPago: [
                    { nombre: 'PayPal', link: 'https://paypal.me/ParedDev?country.x=US&locale.x=en_US' },
                    { nombre: 'CashApp', link: 'https://cash.app/$SrPared2203' }
                ],
                imagen: 'ima/redengine.gif' // Inserta la ruta correcta de la imagen
            },
            producto2: {
                nombre: 'Nexus',
                descripcion: `
                    Instant Delivery<br>
                    24/7 Support Available in English and Spanish<br>
                    Exclusive Customer Channel
                `,
                precios: [
                    { nombre: 'Lifetime', precio: '€50' },
                    { nombre: 'Monthly', precio: '€30' },
                    { nombre: 'Weekly', precio: '€10 (OUT OF STOCK)' }
                ],
                metodosPago: [
                    { nombre: 'PayPal', link: 'https://paypal.me/ParedDev?country.x=US&locale.x=en_US' },
                    { nombre: 'CashApp', link: 'https://cash.app/$SrPared2203' }
                ],
                imagen: 'ima/nexus.png' // Inserta la ruta correcta de la imagen
            },
            producto3: {
                nombre: 'SKRIPT.gg',
                descripcion: `
                    Instant Delivery<br>
                    24/7 Support Available in English and Spanish<br>
                    Exclusive Customer Channel
                `,
                precios: [
                    { nombre: 'Monthly', precio: '€20' },
                    { nombre: 'Weekly', precio: '€10' }
                ],
                metodosPago: [
                    { nombre: 'PayPal', link: 'https://paypal.me/ParedDev?country.x=US&locale.x=en_US' },
                    { nombre: 'CashApp', link: 'https://cash.app/$SrPared2203' }
                ],
                imagen: 'ima/images.jfif' // Inserta la ruta correcta de la imagen
            },
            producto4: {
                nombre: 'Eulen cheats',
                descripcion: `
                    Instant Delivery<br>
                    24/7 Support Available in English and Spanish<br>
                    Exclusive Customer Channel
                `,
                precios: [
                    { nombre: 'Lifetime', precio: '€100' },
                    { nombre: 'Monthly', precio: '€20' }
                ],
                metodosPago: [
                    { nombre: 'PayPal', link: 'https://paypal.me/ParedDev?country.x=US&locale.x=en_US' },
                    { nombre: 'CashApp', link: 'https://cash.app/$SrPared2203' }
                ],
                imagen: 'ima/eulen.jpg' // Inserta la ruta correcta de la imagen
            }
        };


        const producto = productoInfo[id];
        if (producto) {
            let preciosHTML = '';
            producto.precios.forEach(precio => {
                preciosHTML += `<p>${precio.nombre}: ${precio.precio}</p>`;
            });

            let metodosPagoHTML = '';
            producto.metodosPago.forEach(metodo => {
                metodosPagoHTML += `<p class="link-pago">${metodo.nombre}</p>`;
            });

            modalContent.innerHTML = `
                <h2>${producto.nombre}</h2>
                <div>
                    <p>${producto.descripcion}</p>
                    <div class="precios">
                        <h4>Prices</h4>
                        ${preciosHTML}
                    </div>
                    <div class="metodos-pago">
                        <h4>Payment Methods</h4>
                        ${metodosPagoHTML}
                    </div>
                </div>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            `;

            modal.style.display = 'block';

            // Manejar el clic en un método de pago
            const metodosPago = document.querySelectorAll('.link-pago');
            metodosPago.forEach(metodo => {
                metodo.addEventListener('click', function() {
                    const metodoNombre = metodo.textContent.trim();
                    const metodoSeleccionado = producto.metodosPago.find(m => m.nombre === metodoNombre);
                    if (metodoSeleccionado) {
                        window.open(metodoSeleccionado.link, '_blank');
                    }
                });
            });
        }
    }

    // Código para añadir un nuevo dueño
    const duenosDiv = document.querySelector('#duenos .dueno');

    // Datos del nuevo dueño
    const nuevoDueno = {
        nombre: 'ParedDev',
        permisos: 'Todos los permisos de venta',
        logoDiscord: 'ruta/a/logo/discord.png' // Inserta la ruta correcta del logo de Discord
    };

    // Mostrar el nuevo dueño
    const nuevoDuenoHTML = `
        <div class="dueno">
            <h3>${nuevoDueno.nombre}</h3>
            <p>Permisos: ${nuevoDueno.permisos}</p>
            <img src="${nuevoDueno.logoDiscord}" alt="Logo Discord ${nuevoDueno.nombre}">
        </div>
    `;
    duenosDiv.innerHTML = nuevoDuenoHTML;

    // Formulario de soporte
    const soporteForm = document.getElementById('soporte-form');
    soporteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Aquí puedes añadir la lógica para enviar el formulario
        console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
        alert('Mensaje enviado correctamente');
        soporteForm.reset();
    });

    // Restaurar la sección de productos al recargar la página
    window.addEventListener('beforeunload', function() {
        productosSection.style.display = 'block';
        vendedoresSection.style.display = 'none';
        duenosSection.style.display = 'none';
    });
});
