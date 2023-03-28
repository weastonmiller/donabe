// Thumbnail is optional, if not passed it will just render the other metadata
// I would recommend changing grid-root in index.css to the single column layout if not using thumbnails

export interface Article {
  _id: number;
  title: string;
  thumbnail?: string;
  created: string;
  path: string;
}
