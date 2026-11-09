export type Media = {
  kind: string;
  alt: string;
  thumbnail: string;
  srcset: string;
  src: string;
  poster: string;
  width: number;
  height: number;
};
export type Album = { id: string; title: string; items: Media[] };
