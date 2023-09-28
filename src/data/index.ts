import type { IActividad } from "../interfaces";

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
      content: "https://www.youtube.com/embed/e5eq2GvQGq8?si=V_1g5nwrsoT68WcP",
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
      content: "https://www.youtube.com/embed/ZSh632bjSmQ?si=LiT2RPvXNAYEO8lF",
    },
  },
];
