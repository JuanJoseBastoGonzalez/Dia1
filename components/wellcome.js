document.addEventListener('DOMContentLoaded', () => {
    const wellcome = document.createElement('div');
    wellcome.innerHTML = `
    <div class="container " id="image-center">

<img class="foto1"src="assets/arte1.jpg" alt="Escultura"> 

<img class="foto1"src="assets/arte2.jpg" alt="Escultura"> 
</div>

  
    `;
  
    // Seleccionar el contenedor en el index.html
    const container = document.getElementById('wellcome-container');
  
    // Insertar el nuevo elemento en el contenedor
    if (container) {
      container.appendChild(wellcome);
    }
  });
  



