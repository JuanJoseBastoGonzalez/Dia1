document.addEventListener("DOMContentLoaded", () => {
  const galery = document.createElement("div");
  galery.innerHTML = `
<div class="tergetas">
<div class="contenedor">
  <div class="tarjeta">
    <div class="lado frontal">
      <img class="foto1" src="assets/arte1.jpg" alt="Escultura">
    </div>
    <div class="lado trasero">
      <div class="texto">informacion 
      <br>datos
      </div>
    </div>
  </div>
</div>


<div class="contenedor">
  <div class="tarjeta">
    <div class="lado frontal">
      <img class="foto1" src="assets/arte1.jpg" alt="Escultura">
    </div>
    <div class="lado trasero">
      <div class="texto">Hola</div>
    </div>
  </div>
</div>

    
<div class="contenedor">
  <div class="tarjeta">
    <div class="lado frontal">
      <img class="foto1" src="assets/arte1.jpg" alt="Escultura">
    </div>
    <div class="lado trasero">
      <div class="texto">Hola</div>
    </div>
  </div>
</div>

    
<div class="contenedor">
<div class="tarjeta">
  <div class="lado frontal">
    <img class="foto1" src="assets/arte1.jpg" alt="Escultura">
  </div>
  <div class="lado trasero">
    <div class="texto">Hola</div>
  </div>
</div>
</div>


</div>
  
    `;

  // Seleccionar el contenedor en el index.html
  const container = document.getElementById("gallery");

  // Insertar el nuevo elemento en el contenedor
  if (container) {
    container.appendChild(galery);
  }
});
