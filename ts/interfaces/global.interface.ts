type ChildrenJSXasProps = React.ReactNode;

interface ChildrenJSXProps {
  children: ChildrenJSXasProps;
}

interface Media {
  data: MediaData;
}

interface MediaData {
  id: number;
  attributes: MediaAttributes;
  length: number;
  [index: number]: MediaData;
}

interface MediaAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number | null;
  height: number | null;
  formats: Formatos | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string | null;
  previewUrl: null;
  provider: null | string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

interface Formatos {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export type {
  ChildrenJSXasProps,
  ChildrenJSXProps,
  Media,
  MediaData,
  MediaAttributes,
  Formatos,
  Thumbnail,
};
