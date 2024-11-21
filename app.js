// Datos de los menús de cada cooperativa con precios
const menuData = {
    "Tacos Nico": {
        items: [
            { name: "Tacos", price: "$15" },
            { name: "Quesadillas", price: "$45" },
            { name: "Tortas", price: "$30" },
            { name: "Chilaquiles", price: "$55" },
            { name: "Volcanes", price: "$20" },
            { name: "Agua de sabor", price: "$20" },
            { name: "CARNES: PASTOR, CHORIZO, ARRACHERA, TRIPA, DE LA OYA", price: "", class: "highlight"}
            
        ],
    },
   "Cafeteria 2": {
    items: [
        { name: "Tortas", price: "$35" },
        { name: "Tortas Carne", price: "$40" },
        { name: "Tortas Esp.", price: "$55" },
        { name: "Molletes", price: "$40" },
        { name: "Tacos", price: "$13" },
        { name: "Volcanes", price: "$18" },
        { name: "Burritos", price: "$35" },
        { name: "Gringas", price: "$35" },
        { name: "Hamburguesas", price: "$35" },
        { name: "Sincronizadas", price: "$40" },
        { name: "Quesadillas", price: "$35" },
        { name: "Enchiladas", price: "$35" },
        { name: "Pambazos", price: "$35" },
        { name: "Chilaquiles", price: "$35" },
        { name: "Tacos dorados", price: "$35" },
        { name: "Licuados", price: "$20" },
        { name: "Tamales",price: "$17" },
      
    ],
},


    "Guacamovil": {
        items: [
            { name: "Tacos", price: "$10" },
            { name: "Burritos", price: "$20" },
            { name: "Quesadillas", price: "$15" },
            { name: "Enchiladas", price: "$30" },
            { name: "Tortas", price: "$20" },
            { name: "Coca de vidrio", price: "$10" },
            { name: "Huaraches", price: "$25" },
            { name: "Sincronizadas", price: "$15" }
        ],
    },
    "El Forastero": {
    items: [
        { name: "Gorditas", price: "$15" },
        { name: "Quesadillas", price: "$15" },
        { name: "Pambazos", price: "$20" },
        { name: "Quesabirrias", price: "$15" },
        { name: "Orden de Tacos", price: "$20" },
        { name: "Refrescos", price: "$20" },
        { name: "Agua", price: "$15" },
        { name: "Pollo en salsa verde", price: "", class: "highlight"},
        { name: "Tinga", price: "", class: "highlight"},
        { name: "Pastor", price: "", class: "highlight"},
        { name: "Bistek en chipotle", price: "", class: "highlight"},
        { name: "Chorizo", price: "", class: "highlight"},
        { name: "Picadillo", price: "", class: "highlight"},
        { name: "Chicharrón prensado", price: "", class: "highlight"},
        { name: "Comida China (Lunes, miércoles y viernes)", price: ""},
        { name: "Birria (Lunes y viernes)", price: ""},
    ],
},


    "Tapanco": {
        items: [
            { name: "Ensaladas c/Carne", price: "$50" },
            { name: "Tortas", price: "$40" },
            { name: "Tacos", price: "$20" },
            { name: "Burros", price: "$55" },
            { name: "Quesadillas", price: "$55" },
            { name: "Hamburguesas", price: "$30" },
            { name: "Molletes", price: "$25" },
            { name: "Baguets", price: "$25" },
            { name: "Sandwich", price: "$26" },
            { name: "Agua gde", price: "$20" },
            { name: "Refresco chico", price: "$15" },
            { name: "COMBO! 3 Tacos y Agua", price: "$60" },
            { name: "Carnes: Pastor, Chorizo, Arrachera, Salchicha, Tocino", price: "", class: "highlight"}
        ],
    },
    "Cafeteria 1": {
    items: [
        { name: "Huevos al gusto (Rancheros, A la mexicana, Con salchicha, Con jamón, Divorciados)", price: "$40" },
        { name: "Pizza rebanada", price: "$20" },
        { name: "Tacos dorados (Papa $35, Pollo $50) (Ahogados +$10)", price: "$35-$50" },
        { name: "Burritos (Res, pastor, chorizo)", price: "$55" },
        { name: "Quesadilla c/ carne", price: "$30" },
        { name: "Quesadilla normal", price: "$20" },
        { name: "Torta de jamón", price: "$35" },
        { name: "Torta cubana", price: "$60" },
        { name: "Chilaquiles rojos o verdes (c/ huevo $45, c/ carne $60)", "price": "$45-$60" }

    ],
},

};

// Función para mostrar los menús con precios mejorados
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const cooperativa = this.getAttribute('data-cooperativa');
        const menu = menuData[cooperativa].items;
        const menuDetails = document.querySelector('.menu-details');

        menuDetails.innerHTML = `
            <h3>*Menú de ${cooperativa}</h3>
            <ul class="menu-list">
                ${menu.map(item => `<li><span class="dish-name${item.class ? ' ' + item.class : ''}">${item.name}</span> <span class="price">${item.price}</span></li>`).join('')}
            </ul>
        `;
    });
});


// Función para mostrar la hora actual
function updateTime() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var timeString = hours + ':' + minutes;

    document.getElementById('currentTime').innerText = timeString;
    localStorage.setItem('currentTime', timeString);
}

// Actualiza la hora cada segundo
setInterval(updateTime, 1000);

// Llama a la función una vez al cargar la página para mostrar la hora inicial
updateTime();

// Recupera la hora almacenada al cargar la página
window.onload = function() {
    if (localStorage.getItem('currentTime')) {
        document.getElementById('currentTime').innerText = localStorage.getItem('currentTime');
    }
};

// Mostrar sección de Ayuda
const helpButton = document.getElementById('helpButton');
const helpSection = document.querySelector('.help-section');
const contentSection = document.querySelector('.content');
const backButton = document.getElementById('backButton');

helpButton.addEventListener('click', () => {
    contentSection.classList.add('hidden');
    helpSection.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
    helpSection.classList.add('hidden');
    contentSection.classList.remove('hidden');
});

// Mostrar sección de Mensaje con contactos de cooperativas
const messageButton = document.getElementById('messageButton');
const messageSection = document.querySelector('.message-section');
const backMessageButton = document.getElementById('backMessageButton');

messageButton.addEventListener('click', () => {
    contentSection.classList.add('hidden');
    messageSection.classList.remove('hidden');
});

backMessageButton.addEventListener('click', () => {
    messageSection.classList.add('hidden');
    contentSection.classList.remove('hidden');
});

// Función para el botón de Inicio con registro e inicio de sesión
const inicioButton = document.getElementById('inicioButton');
inicioButton.addEventListener('click', () => {
    const name = prompt("Introduce tu nombre:");
    if (name) {
        alert(`¡Bienvenido, ${name}! Te has registrado exitosamente.`);
    }
});
