import { useEffect, useState } from "react";
import { getImageUrl, isFile } from "../../utils/helpers";

function ProjectImage({ image, alt }) {
  const [imgFileUrl, setImgFileUrl] = useState(null);

  useEffect(() => {
    if (isFile(image) && image.type.startsWith("image/")) {
      const url = URL.createObjectURL(image);
      setImgFileUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setImgFileUrl(null);
      };
    } else {
      setImgFileUrl(null);
    }
  }, [image]);

  // uploaded image
  if (imgFileUrl)
    return (
      <img
        className="h-full max-h-[70vh] w-full rounded-lg object-cover"
        src={imgFileUrl}
        alt={alt}
      />
    );

  // image path in storage bucket
  if (image) {
    return (
      <img
        className="h-full max-h-[70vh] w-full rounded-lg object-cover"
        src={getImageUrl(image)}
        alt={alt}
      />
    );
  }

  //  no image set
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-3xl font-bold tracking-wider uppercase">
      <img
        src="/sucrose_doubt.webp"
        alt="confused image"
        className="h-28 w-28"
      />
      No image set
    </div>
  );
}

export default ProjectImage;
