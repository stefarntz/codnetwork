import Image, { StaticImageData } from "next/image";
import React from "react";

interface ItemCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="max-w-md w-full rounded-2xl overflow-hidden drop-shadow-lg bg-neutral-700">
      <div className="px-3 py-2">
        <div className="font-bold text-l mb-2">{title}</div>
      </div>

      <div className="relative w-full aspect-[10/3]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-center object-contain p-5 rounded-t"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ItemCard;
