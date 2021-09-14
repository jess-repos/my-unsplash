import React from "react";
import { useGallery } from "../../context/GalleryContext";

import "./Gallery.css";
import Image from "./Image";

export default function Gallery() {
  const { isLoading, images } = useGallery();

  const mapImages = images.map((image) => (
    <Image key={image._id} image={image} />
  ));

  return <div className="gallery">{!isLoading && mapImages}</div>;
}
