const items = document.querySelectorAll('.menu__link');
let image = document.createElement('img');
image.src = '/assets/images/coffee-beans.png';

items.forEach( item => {
    item.addEventListener('click', function handleClick(event){

        let prevActive = document.querySelector('.menu__link.active');
        if(prevActive) {
            prevActive.classList.remove('active');
        }

        item.classList.add('active');
        item.appendChild(image);
        
    });
});

// Obtener el elemento raíz
let root = document.documentElement;

// Obtener los botones para cambiar el tema
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

// Añadir un evento al botón de tema oscuro para cambiar el valor del atributo de datos a "dark"
dark.addEventListener('click', function handleClick(event){
  root.setAttribute("data-theme", "dark");
  dark.classList.add('hide');
  light.classList.remove('hide');
  console.log('Tema oscuro activado');
});

// Añadir un evento al botón de tema claro para cambiar el valor del atributo de datos a "light"
light.addEventListener('click', function handleClick(event){
  root.setAttribute("data-theme", "light");
  dark.classList.remove('hide');
  light.classList.add('hide');
  console.log('Tema claro activado');
});
