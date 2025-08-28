import { getImageUrl } from "../../utils/helpers";

function ProjectImage({ imagePath, alt }) {
  if (imagePath)
    return (
      <img
        className="h-full w-full rounded-lg object-cover"
        src={getImageUrl(imagePath)}
        alt={alt}
      />
    );

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
