"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
}

export default function ProductCard({
  title,
  price,
  oldPrice,
  rating,
  reviews,
  discount,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer border border-slate-200 dark:border-slate-700 overflow-hidden"
    >
      <div className="relative aspect-square bg-slate-100 dark:bg-slate-700">
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discount}%
          </div>
        )}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-slate-400 text-sm">Imagem produto</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm text-slate-700 dark:text-slate-300 mb-2 line-clamp-2 h-10">
          {title}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-300 dark:text-slate-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            ({reviews})
          </span>
        </div>
        <div className="space-y-1">
          {oldPrice && (
            <div className="text-xs text-slate-500 dark:text-slate-400 line-through">
              R$ {oldPrice.toFixed(2)}
            </div>
          )}
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            R$ {price.toFixed(2)}
          </div>
        </div>
        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
          Frete grátis
        </p>
      </div>
    </motion.div>
  );
}
