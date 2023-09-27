export interface IPost {
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
