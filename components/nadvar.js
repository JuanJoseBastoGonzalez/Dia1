// Crear un nuevo elemento
const navElement = document.createElement('nav');
navElement.innerHTML = `
<div class="gcc">
    <div class="bgg cp">
    CAMPUSLANDS
    </div> 
   
    <button id="mostrarVentana">Eventos</button>
    <div class="ventana" id="ventana">
        <p><ul>
        <li>Galería Virtual</li>
        <li>Páginas de Detalle de Obras</li>
        <li>Experiencias Interactivas</li>
        <li>Accesibilidad y Responsividad</li>
        <li>SEO y Optimización de Rendimiento</li>
        </ul></p>
        <button id="cerrar">Cerrar</button>
    </div>

    <div class="logo cp bgg">
    logo
    </div>



  
</div>
`;

const container = document.getElementById('nav-container');

if (container) {
  container.appendChild(navElement);
}

document.getElementById('mostrarVentana').addEventListener('click', function() {
    var ventana = document.getElementById('ventana');
    ventana.classList.toggle('show');
});

document.getElementById('cerrar').addEventListener('click', function() {
    var ventana = document.getElementById('ventana');
    ventana.classList.toggle('show');
});
