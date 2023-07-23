const EVENTOS = [
    {
      id: 1,
      title: "Espacio Corporate",
      category: "Salones",
      price: 150000 ,
      description:
        "Espacio para eventos corporativos de hasta 150 personas con posibilidad de catering, al contar con mesas largas podrás poner tus grupos de trabajo por mesa. Nos encontramos en la zona de Nordelta",
      img: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 12,
    },
    {
      id: 2,
      title: "La Disco Pirata",
      category: "Salones",
      description:
        "Disco para eventos juveniles con posibilidad de ingreso de 500 personas, contamos con 3 pistas donde podrás poner diferentes estilos de musica, al reservar nuestro salón podrás traer tu barra de tragos libre o contratar el servicio de barra pirata", 
      price: 250000,
      img: "https://images.pexels.com/photos/14652573/pexels-photo-14652573.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 7,
    },
    {
      id: 3,
      title: "Rooftop Lights On",
      description:
        "Nuestro rooftop ubicado en la zona de puerto madero cuenta con un espacio para 50 personas, reservalo para tus eventos privados de altisima calidad, contamos con degustaciones de vinos y un menu con platos de los mejores chef de buenos aires",
      category: "Salones",
      price: 180000,
      img: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 6,
    },
    {
      id: 4,
      title: "La Estancia",
      category: "Salones",
      description:
        "Espacio al aire libre en una estancia ubicada a 50km de capital federal, contamos con espacio para 300 personas y un servicio de mesa dulce para que tu merienda sea inolvidable",
  
      price: 135000,
      img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 4,
    },
    {
      id: 5,
      title: "DJ Paul Rodriguez",
      category: "Shows",
      description:
        "Soy un dj para fiestas electronicas, cuento con sets de techno, house y trance",
  
      price: 45000,
      img: "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 8,
    },
    {
      id: 6,
      title: "Mike Solomus",
      category: "Shows",
      description:
        "Cantante de musica melodica para eventos tranquilos, pedime la lista de canciones que más te gusta y no te voy a defraudar",
  
      price: 32000,
      img: "https://images.pexels.com/photos/6670752/pexels-photo-6670752.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 18,
    },
    {
        id: 7,
        title: "Tu Mozo",
        category: "Servicios",
        description:
          "Contamos con una tropa de 3000 mozos a disposición para tus eventos, todos de altisima calidad y cordialidad, el precio publicado es por mozo",
    
        price: 15000,
        img: "https://images.pexels.com/photos/6231587/pexels-photo-6231587.jpeg?auto=compress&cs=tinysrgb&w=1600",
        stock: 8,
      },
  ];

  export const getEventos = (id) => {
    const _eventos = id
      ? EVENTOS.filter((evento) => evento.category.toLowerCase() === id)
      : EVENTOS;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_eventos); 
      }, 500);
    });
  };
  
  export const getEvento = (id) => {
    const evento = EVENTOS.filter((evento) => evento.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(evento);
      }, 1500);
    });
  };