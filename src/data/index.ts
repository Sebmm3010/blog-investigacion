interface Post {
  title: string;
  fecha: string;
  autor: string;
  imagen: {
    alt: string;
    src: string;
  };
  descripcion: string;
  draft: boolean;
  category: string;
  slug: string;
  content: string;
}
export const posts: Post[] = [
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
    content: "Nisi duis ex aliqua eu officia eiusmod duis magna pariatur. Irure laborum qui aliqua nulla esse cillum laborum aliquip nulla elit. Id id Lorem duis irure cillum culpa. Nulla sint et aliqua velit do. Nulla sit sit proident consectetur enim ullamco aliqua in reprehenderit ullamco officia. Ad ipsum velit sint enim exercitation mollit consequat elit mollit qui commodo aute. Laboris culpa voluptate aliquip incididunt duis. Cupidatat aliquip et sunt aute fugiat cupidatat irure voluptate. Occaecat officia et sunt. Officia tempor voluptate enim consequat cillum aute fugiat cupidatat incididunt magna labore in commodo. Eiusmod nostrud non deserunt. Incididunt excepteur pariatur magna. Proident aute ad in velit labore enim sit cillum ad mollit proident et qui. Esse sunt ullamco ullamco ipsum enim eu esse id eu exercitation laboris magna Lorem. Anim nostrud officia anim velit do exercitation labore mollit excepteur excepteur ex. Ipsum adipisicing exercitation dolor pariatur labore qui. Culpa cupidatat ea elit eiusmod tempor ea qui dolor Lorem laborum adipisicing. Ad ea laboris qui cupidatat deserunt culpa. Nulla ex velit adipisicing proident fugiat deserunt sunt eu adipisicing sint incididunt quis qui. Nulla fugiat labore duis ullamco reprehenderit excepteur laboris tempor ullamco aliquip laborum aliqua. Est tempor nisi magna ut elit pariatur commodo. Labore commodo do incididunt amet ad et exercitation magna veniam veniam aute laboris excepteur occaecat Lorem. Fugiat in magna commodo magna nulla eu. Fugiat nulla aliqua sunt duis enim irure aliquip fugiat aliqua Lorem ad tempor incididunt proident incididunt. Labore fugiat tempor esse cillum voluptate culpa anim sunt consequat. Ipsum minim nostrud laborum sit aliquip duis officia consequat est. Fugiat mollit elit nulla. Sit minim est elit labore. Sunt eu pariatur pariatur ut deserunt nulla labore in non sit tempor voluptate ex."
  },
];
