 AOS.init({ duration: 1000, once: true });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function mostrarSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }

    function moverSlide(direccion) {
      currentIndex += direccion;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      if (currentIndex >= slides.length) currentIndex = 0;
      mostrarSlide(currentIndex);
    }

    setInterval(() => moverSlide(1), 5000);
    mostrarSlide(currentIndex);

    let carrito = [];
    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      actualizarCarrito();
      document.getElementById("carrito").style.display = "block";
    }

    function actualizarCarrito() {
      listaCarrito.innerHTML = "";
      let total = 0;

      carrito.forEach((item, index) => {
        total += item.precio;
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.nombre} - $${item.precio.toLocaleString()}
          <br>
          <button onclick="eliminarItem(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
      });

      totalSpan.textContent = total.toLocaleString();
    }

    function eliminarItem(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    function vaciarCarrito() {
      carrito = [];
      actualizarCarrito();
      cerrarCarrito();
    }

    function toggleCarrito() {
      const carritoDiv = document.getElementById("carrito");
      carritoDiv.style.display = carritoDiv.style.display === "none" ? "block" : "none";
    }

    function cerrarCarrito() {
      document.getElementById("carrito").style.display = "none";
    }