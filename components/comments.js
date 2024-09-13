document.addEventListener('DOMContentLoaded', () => {
    const wellcome = document.createElement('div');
    wellcome.innerHTML = `
    <div class="comments ">
    <div>
    <img class="user"src="assets/user.png" alt="Escultura">   Nombre de la persona ****
    <div class="comentarios"></div>
    </div>
    <div>
    <img class="user"src="assets/user.png" alt="Escultura">   Nombre de la persona ****
    <div class="comentarios"></div>
    </div>
    <div>
    <img class="user"src="assets/user.png" alt="Escultura">   Nombre de la persona ****
    <div class="comentarios"></div>
    </div>
    
   
</div>

  
    `;
  
    // Seleccionar el contenedor en el index.html
    const container = document.getElementById('commnets');
  
    // Insertar el nuevo elemento en el contenedor
    if (container) {
      container.appendChild(wellcome);
    }
  });