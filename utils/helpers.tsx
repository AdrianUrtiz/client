import { MEDIA } from "./media";

const showIcon = (ext: string): JSX.Element => {
  let image, alt;

  switch (ext) {
    case ".pdf":
      image = MEDIA.PDF;
      alt = "pdf-file";
      break;

    case ".zip":
      image = MEDIA.ZIP_RAR;
      alt = "zip-file";
      break;

    case ".docx":
      image = MEDIA.WORD;
      alt = "docx-file";
      break;

    case ".xlsx":
      image = MEDIA.EXCEL;
      alt = "xlsx-file";
      break;

    case ".jpg" || ".png":
      image = MEDIA.PICTURE;
      alt = "docx-file";
      break;

    default:
      image = MEDIA.FILE;
      alt = "file";
      break;
  }

  return <img className="h-4 mr-3" src={image} alt={`${alt}`} />;
};

export { showIcon };
