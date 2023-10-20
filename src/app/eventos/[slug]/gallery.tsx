"use client";

import { GalleryImage } from "@/interfaces/Events";
import { resolveImagePath } from "@/utils/image";
import { useMemo, useState } from "react";
import PhotoGallery from "react-photo-gallery";

const IMAGES_SLICE_SIZE = 8;

type GallerySectionProps = {
  images: GalleryImage[];
};

const GallerySection = ({ images }: GallerySectionProps) => {
  const [imageSlice, setImageSlice] = useState(1);

  const renderedImages = useMemo(
    () =>
      images
        .slice(0, imageSlice * IMAGES_SLICE_SIZE)
        .map((image) => ({ ...image, src: resolveImagePath(image.src) })),
    [imageSlice, images]
  );

  const handleShowMore = () => {
    setImageSlice((prev) => prev + 1);
  };

  const haveImagesToLoad = imageSlice * IMAGES_SLICE_SIZE < images.length;

  return (
    <div className="section-box">
      <h2 className="section-title">GALERIA</h2>
      <div className="gallery-list">
        {renderedImages.length > 0 ? (
          <PhotoGallery margin={8} photos={renderedImages} direction="column" />
        ) : (
          <p style={{ margin: "auto" }}>
            Ainda não foram adicionadas images desse evento.
          </p>
        )}

        {haveImagesToLoad && (
          <button onClick={handleShowMore}>exibir mais</button>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
