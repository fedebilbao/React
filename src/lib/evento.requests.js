const EVENTOS = [
    {
      title: "Espacio Corporate",
      category: "salones",
      price: 150000 ,
      description:
        "Espacio para eventos corporativos de hasta 150 personas con posibilidad de catering, al contar con mesas largas podrás poner tus grupos de trabajo por mesa. Nos encontramos en la zona de Nordelta",
      img: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 12,
    },
    {
      title: "La Disco Pirata",
      category: "salones",
      description:
        "Disco para eventos juveniles con posibilidad de ingreso de 500 personas, contamos con 3 pistas donde podrás poner diferentes estilos de musica, al reservar nuestro salón podrás traer tu barra de tragos libre o contratar el servicio de barra pirata", 
      price: 250000,
      img: "https://images.pexels.com/photos/14652573/pexels-photo-14652573.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 7,
    },
    {
      title: "Rooftop Lights On",
      description:
        "Nuestro rooftop ubicado en la zona de puerto madero cuenta con un espacio para 50 personas, reservalo para tus eventos privados de altisima calidad, contamos con degustaciones de vinos y un menu con platos de los mejores chef de buenos aires",
      category: "salones",
      price: 180000,
      img: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 6,
    },
    {
      title: "La Estancia",
      category: "salones",
      description:
        "Espacio al aire libre en una estancia ubicada a 50km de capital federal, contamos con espacio para 300 personas y un servicio de mesa dulce para que tu merienda sea inolvidable",
  
      price: 135000,
      img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stock: 4,
    },
    {
      title: "DJ Paul Rodriguez",
      category: "shows",
      description:
        "Soy un dj para fiestas electronicas, cuento con sets de techno, house y trance",
  
      price: 45000,
      img: "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 8,
    },
    {
      title: "Mike Solomus",
      category: "shows",
      description:
        "Cantante de musica melodica para eventos tranquilos, pedime la lista de canciones que más te gusta y no te voy a defraudar",
  
      price: 32000,
      img: "https://images.pexels.com/photos/6670752/pexels-photo-6670752.jpeg?auto=compress&cs=tinysrgb&w=1600",
      stock: 18,
    },
    {
        title: "Tu Mozo",
        category: "servicios",
        description:
          "Contamos con una tropa de 3000 mozos a disposición para tus eventos, todos de altisima calidad y cordialidad, el precio publicado es por mozo",
    
        price: 15000,
        img: "https://images.pexels.com/photos/6231587/pexels-photo-6231587.jpeg?auto=compress&cs=tinysrgb&w=1600",
        stock: 8,
      },
  ];

  import {db} from "./config";
  import { collection, getDocs, getDoc, addDoc, doc, where, query } from "firebase/firestore";
  const eventosRef = collection(db, "items");



  export const getEventos = async (category) => {
    const q = category
      ? query(eventosRef, where("category", "==", category))
      : eventosRef;
  
    let eventos = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {eventos = [...eventos,{...doc.data(), id: doc.id}];});

    return eventos;
  };
  
  export const getEvento = async (id) => {
    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return { id: docSnap.id, ...docSnap.data()};
    return null;
  };

  export const cargarData = async () => {
    EVENTOS.forEach(async (evento) => {await addDoc(eventosRef, evento)})
  }