const cardsArray = [
  {
    id: 1,
    tono: 'Una oscuridad aterradora se apodera del pueblo, y solo un valiente héroe puede salvar a la gente de la maldad que acecha.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Un grupo de niños obsesionados con las películas de los años 80 decide recrear los clásicos.'
  },
  {
    id: 2,
    tono: 'Un corazón roto late con fuerza en medio de la soledad y la desesperación.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Un hombre y su esposa son dueños de la tienda de pociones más grande de la ciudad. Lo que la gente de la ciudad no sabe es que están siendo envenenados lentamente por las pociones.'
  },
  {
    id: 3,
    tono: 'Una ironía amarga cubre todo, como una capa de hielo sobre un lago congelado.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Los ratones toman el control de la ciudad de Nueva York.'
  },
  {
    id: 4,
    tono: 'Un amor apasionado florece en medio de las circunstancias más adversas.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Mi novio tiene una colección de la que está muy orgulloso. Nunca me dijo que había estado recogiendo souvenirs de las novias que asesinó.'
  },
  {
    id: 5,
    tono: 'Los locos acontecimientos se desatan en una comedia disparatada.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Tienes que crear tu propia religión. ¿En qué la conviertes?'
  },
  {
    id: 6,
    tono: 'Una melancolía profunda envuelve todo, como un manto de niebla.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Las investigaciones federales en una investigación de asesinato en curso descubren que una peligrosa coalición de oficiales de policía estaba detrás del delito.'
  },
  {
    id: 7,
    tono: 'Las críticas mordaces e incisivas cortan a través de la hipocresía y la falsedad.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Imagina tu propia raza mitológica única.'
  },
  {
    id: 8,
    tono: 'Un mundo mágico y maravilloso se despliega ante los ojos de los personajes.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Vives en un mundo donde no existen dioses.'
  },
  {
    id: 9,
    tono: 'La alegría rebosa de cada página, como la luz del sol en un día claro.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Una yegua aparentemente ordinaria es visitada por una presencia mística que le promete hacerla una unicornio, pero debe enfrentar los peligros de escapar de su establo si quiere acceder a este nuevo y misterioso mundo.'
  },
  {
    id: 10,
    tono: 'Las emociones se elevan a cotas épicas en un drama digno de una película.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Un hombre se despierta para descubrir que ya no puede oír, pero puede ver cosas que nunca ha visto antes.'
  },
  {
    id: 11,
    tono: 'Las palabras se entrelazan en versos poéticos que hablan al alma.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Un adulto marca accidentalmente el número de teléfono de su infancia. ¿A quién cree que contesta?'
  },
  {
    id: 12,
    tono: 'La tensión se acumula hasta el punto de ruptura mientras los personajes intentan evitar el peligro inminente.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Siempre pensé que si olvidabas todas las cosas malas que te habían pasado, era inevitable que también olvidaras todas las cosas buenas. Nunca pensé que enfocarse tanto en las cosas malas atraería...'
  },
  {
    id: 13,
    tono: 'Una nostálgia dulce y agridulce envuelve todo, recordando tiempos pasados ​​con añoranza.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Un mundo donde los humanos evolucionaron de los perezosos.'
  },
  {
    id: 14,
    tono: 'La irreverencia y el desafío a las normas se desatan en una historia sin filtros.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: '"No me mientas. Ya conozco la verdad."'
  },
  {
    id: 15,
    tono: 'Los miedos y los conflictos internos de los personajes se despliegan en un análisis psicológico profundo.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Juan es solo un chico solitario de la universidad que desliza a través de Tinder cuando encuentra que su actriz favorita, Scarlet Johannsen, le ha gustado. Pero cuando se encuentran, se da cuenta de que no tienen conexión. Más bien, es su asistente quien llama su atención.'
  },
  {
    id: 16,
    tono: 'Los personajes se sumergen en sus propias mentes en un viaje introspectivo.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Mi madre ha estado gritando en la puerta principal durante horas ahora. No está contenta de que la haya matado con mis propias manos.'
  },
  {
    id: 17,
    tono: 'El mundo real se distorsiona y se vuelve extraño en una historia de fantasía surrealista.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Recibes una llamada de un amigo al que no has visto en años. El amigo dice que vas a ser la próxima víctima de un asesino en serie rampante, y eres la única persona que puede ayudar.'
  },
  {
    id: 18,
    tono: 'Las enseñanzas y lecciones de la vida se presentan de manera inspiradora en un cuento edificante.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: '¿Cuál es la imagen más hermosa que has visto mientras viajabas?'
  },
  {
    id: 19,
    tono: 'La sátira punzante se utiliza para desenmascarar la corrupción y la hipocresía.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'Te despiertas el día después de una fiesta épica. No estás donde esperabas estar.'
  },
  {
    id: 20,
    tono: 'Un tono irónico cubre todo, haciendo que el lector cuestione lo que está sucediendo.',
    personaje: '',
    imagen: 'https://picsum.photos/300?random=',
    idea: 'La sátira punzante se utiliza para desenmascarar la corrupción y la hipocresía.'
  }
]


// Asignamos un evento click al botón
document.querySelector('button').addEventListener('click', function() {
  // Generamos un índice aleatorio y obtenemos un card aleatorio del array
  const index = Math.floor(Math.random() * cardsArray.length);
  const index2 = Math.floor(Math.random() * cardsArray.length);
  const randomCard = cardsArray[index];
  const randomCard2 = cardsArray[index2];
  //Le asigno un tono de variable a cards
  const element = document.querySelector('.cards');
  //Hago que cuando clickee en la funcion cambie el display de cards de none a flex
  element.style.display = 'flex';
  // Generamos el HTML para el card aleatorio
  const cardGenerated = `
    <div class="card">
      <h2><em>Tono: <br></em>${randomCard2.tono}</h2><br>
      <img src="${randomCard.imagen}${randomCard.id}" alt="${randomCard.tono}">
      <p class="card-description">${randomCard.idea}</p>
    </div>
  `;
  // Asignamos el HTML generado a un elemento HTML
  document.querySelector('.cards').innerHTML = cardGenerated;
  // Cambia el contenido del boton para cuando se haya generado el primer card
  document.querySelector('button').innerHTML = 'Generar otra'
});
