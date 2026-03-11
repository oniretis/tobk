// components/PhotoCard.tsx
"use client";
import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: string;
  author: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, author }) => {
  return (
    <motion.div
      className="bg-neutral-100 mt-28 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={photo}
        alt={`Photo by ${author}`}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600 text-sm">Photo by {author}</p>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
