"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

export default function CategoryCard({ icon: Icon, title, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-200 dark:border-slate-700"
      onClick={onClick}
    >
      <Icon className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
        {title}
      </span>
    </motion.div>
  );
}
