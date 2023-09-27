import type { IPost, IActividad } from "../interfaces";

export const posts: IPost[] = [
  {
    title: "A Post about Important Items Of Life",
    fecha: "2022-11-20",
    autor: "Darnell McClure",
    imagen: {
      alt: "A picture of a coder",
      src: "/post-1.jpg",
    },
    descripcion:
      "Have you ever wondered what the most important items of life are? Well, wonder no more!",
    draft: false,
    category: "Reference Docs",
    slug: "post-1",
    content:
      "Nisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia. Ad ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt. Officia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex. Ipsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa. Nulla ex velit adipisicing proident fugiat deserunt sunt eu adipisicing sint incididunt quis qui. Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo. Labore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex.",
  },
];

export const actividades: IActividad[] = [
  {
    numero: 1,
    titulo: "Construyamos algoritmos.",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    contenido:
      "Iniciar con el concepto de algoritmo desde situaciones diarias. Establecer secuencias y  conectores lógicos para un ejemplo específico .Se resuelve un ejercicio donde se verifique los pasos correctos para sembrar una semilla o construir un avión de papel. Socializar los pasos realizados con otros participantes plantear posibles cambios o mejoras.",
    slug: "act-1",
    anexos: {
      tipo: "imgs",
      content: ["/act1-img1.png", "/act1-img2.png"],
    },
  },
  {
    numero: 2,
    titulo: "Construyendo diagramas de flujo.",
    objetivos: ["Usar los bloques y pasos para construir objetivo"],
    contenido:
      "Dar a conocer que es un diagrama de flujo, explicar que significan cada figura geométrica con las que se compone un diagrama  usando un orden lógico y específico teniendo en cuenta el objetivo determinado, comenzando por un inicio, la declaración de una variable, un condicional, procedimiento, salida de datos y termina en fin.",
    slug: "act-2",
    anexos: {
      tipo: "imgs",
      content: ["/act2-img1.png", "/act2-img2.png"],
    },
  },
  {
    numero: 3,
    titulo: "Funcionamiento de las tarjetas de control.",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    contenido:
      "Reforzar  conocimientos de diagrama de flujo y algoritmo usando el orden y secuencia del funcionamiento de las tarjetas de control y automatización.",
    slug: "act-3",
    anexos: {
      tipo: "img",
      content: "/act3-img1.png",
    },
  },
  {
    numero: 4,
    titulo: "Conectándonos con la microbit.",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    contenido:
      "Identificar las partes de la microbit (apoyo fichas pensamiento computacional).",
    slug: "act-4",
    anexos: {
      tipo: "link",
      desc: "Link de fichas de pensamiento computacional.",
      content:
        "https://drive.google.com/file/d/1qjUmPN4-aPgzLOQ2-Vj9pQGNOjqnC8vM/view?usp=sharing",
    },
  },
  {
    numero: 5,
    titulo: "Programando con la makecode.",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    contenido:
      " Aplicar conocimientos de orden lógico, algoritmo y diagrama de flujo   mediante la práctica de programación en makecode llevando a cabo prototipos cumpliendo determinados retos.",
    slug: "act-5",
    headerImg: "/act5-header.png",
    anexos: {
      tipo: "link",
      desc: "Link de inicio.",
      content: "https://makecode.microbit.org/",
    },
  },
  {
    numero: 6,
    titulo: "Calibrar los sensores y actuadores.",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    contenido:
      "Detectar y medir su funcionamiento, ajustando los sensores y actuadores teniendo en cuenta las características necesarias para el cumplimiento del objetivo.",
    slug: "act-6",
    anexos: {
      tipo: "img",
      content: "/act6-img1.png",
    },
  },
  {
    numero: 7,
    titulo: "Hacer un sistema de nivel de agua",
    objetivos: ["Aprender a secuenciar y ordenar una serie de pasos."],
    headerImg: "/act7-header.png",
    contenido:
      "Medir el nivel del agua mediante un sensor de nivel con microbit programado en makecode para que por medio de  el sensor la microbit  nos muestre las variables de humedad indicándonos si el cuerpo de agua está lleno o vacío.",
    slug: "act-7",
    anexos: {
      tipo: "youtube",
      desc: "Video inclusivo para estudiantes con discapacidad auditiva sistema de nivel de agua.",
      content: "https://www.youtube.com/watch?v=e5eq2GvQGq8",
    },
  },
  {
    numero: 8,
    titulo: "¿Cómo funcionan las ondas electromagnéticas (OEM)?",
    objetivos: [
      "Conocer el espectro de las OEM",
      "Experimentar con las ondas mecánicas en una cuerda",
      "Interconectar microbit por ondas de radio ",
    ],
    headerImg: "/act8-header.png",
    contenido:
      "Inicialmente se presenta el contenido de las OEM y su espectro en la naturaleza, los fenómenos  y relacionarlos con su entorno, se identifican los agentes emisor - receptor, se usa la makercode microbit para programar y simular la frecuencia de sincronización y los posibles eventos de respuesta que se desee ejecutar. Calibrar el funcionamiento",
    slug: "act-8",
    anexos: {
      tipo: "youtube",
      desc: "Video inclusivo para estudiantes con discapacidad auditiva sistema de nivel de agua.",
      content: "https://www.youtube.com/watch?v=ZSh632bjSmQ",
    },
  },
];
