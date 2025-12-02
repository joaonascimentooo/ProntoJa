"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Home,
  ShoppingBag,
  Watch,
  Headphones,
  Shirt,
  Gift,
  ChevronRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const categories = [
  { icon: Smartphone, title: "Celulares" },
  { icon: Laptop, title: "Informática" },
  { icon: Home, title: "Casa" },
  { icon: ShoppingBag, title: "Moda" },
  { icon: Watch, title: "Relógios" },
  { icon: Headphones, title: "Áudio" },
  { icon: Shirt, title: "Roupas" },
  { icon: Gift, title: "Presentes" },
];

const flashDeals = [
  {
    id: 1,
    title: "Smartphone Samsung Galaxy A54 5G 128GB",
    price: 1299.99,
    oldPrice: 1999.99,
    rating: 4.5,
    reviews: 1234,
    image: "/product1.jpg",
    discount: 35,
  },
  {
    id: 2,
    title: "Notebook Dell Inspiron 15 Intel Core i5 8GB 256GB SSD",
    price: 2499.99,
    oldPrice: 3299.99,
    rating: 4.7,
    reviews: 856,
    image: "/product2.jpg",
    discount: 24,
  },
  {
    id: 3,
    title: "Smart TV LG 50' 4K UHD ThinQ AI",
    price: 1899.99,
    oldPrice: 2599.99,
    rating: 4.8,
    reviews: 2341,
    image: "/product3.jpg",
    discount: 27,
  },
  {
    id: 4,
    title: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    price: 189.99,
    oldPrice: 299.99,
    rating: 4.6,
    reviews: 567,
    image: "/product4.jpg",
    discount: 37,
  },
];

const recommendedProducts = [
  {
    id: 5,
    title: "Apple Watch Series 9 GPS 45mm",
    price: 3999.99,
    rating: 4.9,
    reviews: 432,
    image: "/product5.jpg",
  },
  {
    id: 6,
    title: "Tênis Nike Air Max Plus",
    price: 799.99,
    oldPrice: 999.99,
    rating: 4.7,
    reviews: 1023,
    image: "/product6.jpg",
    discount: 20,
  },
  {
    id: 7,
    title: "Cafeteira Nespresso Essenza Mini",
    price: 449.99,
    rating: 4.5,
    reviews: 789,
    image: "/product7.jpg",
  },
  {
    id: 8,
    title: "Kindle Paperwhite 16GB",
    price: 549.99,
    oldPrice: 699.99,
    rating: 4.8,
    reviews: 3456,
    image: "/product8.jpg",
    discount: 21,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      {/* Hero Banner */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bem-vindo ao ProntoJá!
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              As melhores ofertas em produtos de qualidade, entregues na sua
              casa
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Ver ofertas
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Categorias em destaque
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CategoryCard icon={category.icon} title={category.title} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flash Deals */}
      <section className="bg-white dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Ofertas Relâmpago
              </h2>
            </div>
            <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
              Ver todas <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-linear-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Super Desconto de Black Friday!
            </h2>
            <p className="text-lg mb-6 text-orange-100">
              Até 70% OFF em eletrônicos e muito mais. Aproveite enquanto
              durar!
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
              Aproveitar agora
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Produtos Recomendados
            </h2>
          </div>
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
            Ver mais <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                ProntoJá
              </h3>
              <p className="text-slate-400 text-sm">
                Seu marketplace de confiança para compras online com as
                melhores ofertas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Central de ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Termos de uso
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>contato@prontoeja.com</li>
                <li>(11) 1234-5678</li>
                <li>Seg-Sex: 8h-18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 ProntoJá. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
