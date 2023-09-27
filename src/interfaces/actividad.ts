export interface IActividad {
  numero: number;
  titulo: string;
  objetivos: string[];
  contenido: string;
  slug: string;
  headerImg?: string;
  anexos: {
    tipo: "img" | "imgs" | "youtube" | "link";
    content: string | string[];
    desc?: string;
  };
}
