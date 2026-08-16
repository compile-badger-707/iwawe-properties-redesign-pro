"use client";

import Image from "next/image";
import { useState } from "react";

interface PropertyGalleryProps {
  title: string;
  mainImage: string;
}

const galleryImages = [
  "/images/properties/property-1.jpg",
  "/images/properties/property-2.jpg",
  "/images/properties/property-3.jpg",
  "/images/properties/property-4.jpg",
];

export default function PropertyGallery({
  title,
  mainImage,
}: PropertyGalleryProps) {
  const images = [
    mainImage,
    ...galleryImages.filter((image) => image !== mainImage),
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl">
        <Image
          src={activeImage}
          alt={title}
          fill
          priority
          className="object-cover transition duration-500"
        />

        <div className="absolute bottom-4 left-4 rounded-lg bg-slate-950/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
          {images.indexOf(activeImage) + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition ${
              activeImage === image
                ? "border-blue-600"
                : "border-transparent hover:border-slate-300"
            }`}
            aria-label={`View property image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
