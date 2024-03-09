import { useEffect, useState } from "react";
import { Media, MediaAttributes } from "../ts/interfaces";
import { UPLOADS } from "../utils/api";

function useStrapiMedia(media: Media) {
  const [mediaName, setMediaName] = useState<string>("");
  const [mediaPath, setMediaPath] = useState<string>("");

  useEffect(() => {
    let attributes: MediaAttributes;
    if (media.data.length !== undefined) {
      attributes = media.data[0].attributes;
    } else {
      attributes = media.data.attributes;
    }
    const { name, url } = attributes;
    // const mediaUrl = `${url}`;
    const mediaUrl = `${UPLOADS}${url}`;
    setMediaName(name);
    setMediaPath(mediaUrl);
  }, [media]);
  return [mediaName, mediaPath];
}

export default useStrapiMedia;
