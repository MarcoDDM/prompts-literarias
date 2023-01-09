const cardsArray = [
  {
    id: 1,
    nombre: 'Card 1',
    personaje: '',
    imagen: 'https://picsum.photos/200',
    accion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod vestibulum metus, ac pellentesque nisi ullamcorper at. Curabitur a volutpat nisi. Vestibulum a placerat ligula, ac fringilla diam. Sed at porttitor leo. Sed volutpat condimentum massa id blandit. Morbi a tincidunt tellus. In hac habitasse platea dictumst. Morbi viverra, tortor id placerat tincidunt, metus lacus consectetur purus, eu porta felis tortor sit amet magna. Suspendisse pharetra purus lacus, non ullamcorper tortor semper eu. Suspendisse potenti.'
  },
  {
    id: 2,
    nombre: 'Card 2',
    personaje: '',
    imagen: 'https://picsum.photos/200',
    accion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in massa a metus dictum dictum. In dictum tempus mollis. In hac habitasse platea dictumst. Duis eu ullamcorper quam, sit amet tincidunt justo. Aenean a eros a massa viverra ornare. Curabitur at elit turpis. Aenean facilisis, lacus non pellentesque elementum, lacus justo eleifend ipsum, et auctor lacus ante sed turpis. Cras elementum ultricies ipsum. Nam mauris lacus, tempus in volutpat in, interdum non quam. Nullam accumsan, tellus quis suscipit vestibulum, elit ipsum convallis diam, a vestibulum ipsum erat in ante. Aliquam eu ullamcorper velit. Sed vel justo velit.'
  },
  {
    id: 3,
    nombre: 'Card 3',
    personaje: '',
    imagen: 'https://picsum.photos/200',
    accion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, nisi a porttitor laoreet, nisi eros maximus mi, at malesuada sapien massa et ligula. Aenean id leo non lacus finibus egestas. Curabitur volutpat suscipit sollicitudin. Morbi aliquet diam magna, a elementum turpis ultricies sed. Sed luctus elementum urna, sit amet congue quam pellentesque ut. Vestibulum euismod velit sed velit pretium,'
  },
  {
    id: 4,
    nombre: 'Card 4',
    personaje: '',
    imagen: 'https://picsum.photos/200',
    accion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, nisi a porttitor laoreet, nisi eros maximus mi, at malesuada sapien massa et ligula. Aenean id leo non lacus finibus egestas. Curabitur volutpat suscipit sollicitudin. Morbi aliquet diam magna, a elementum turpis ultricies sed. Sed luctus elementum urna, sit amet congue quam pellentesque ut. Vestibulum euismod velit sed velit pretium,'
  },
  {
    id: 5,
    nombre: 'Card 5',
    personaje: '',
    imagen: 'https://picsum.photos/200',
    accion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, nisi a porttitor laoreet, nisi eros maximus mi, at malesuada sapien massa et ligula. Aenean id leo non lacus finibus egestas. Curabitur volutpat suscipit sollicitudin. Morbi aliquet diam magna, a elementum turpis ultricies sed. Sed luctus elementum urna, sit amet congue quam pellentesque ut. Vestibulum euismod velit sed velit pretium,'
  }
]


// Asignamos un evento click al botón
document.querySelector('button').addEventListener('click', function() {
  // Generamos un índice aleatorio y obtenemos un card aleatorio del array
  const index = Math.floor(Math.random() * cardsArray.length);
  const randomCard = cardsArray[index];
  const element = document.querySelector('.cards');
  element.style.display = 'flex';
  // Generamos el HTML para el card aleatorio
  const cardGenerated = `
    <div class="card">
      <h2>${randomCard.nombre}</h2>
      <img src="${randomCard.imagen}" alt="${randomCard.nombre}">
      <p>${randomCard.accion}</p>
    </div>
  `;
  // Asignamos el HTML generado a un elemento HTML
  document.querySelector('.cards').innerHTML = cardGenerated;
});
