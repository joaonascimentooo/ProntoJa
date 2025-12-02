"use client";

import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <span>Frete grátis para todo Brasil em compras acima de R$ 199</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
            onClick={() => router.push("/home")}
          >
            ProntoJá
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleAuthClick}
              className="flex flex-col items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="text-xs" suppressHydrationWarning>
                {mounted ? (user ? "Sair" : "Entrar") : "Entrar"}
              </span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">Carrinho</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 py-3 overflow-x-auto">
            <button className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              <Menu className="w-4 h-4" />
              Todas categorias
            </button>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Ofertas do Dia
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Mais Vendidos
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Eletrônicos
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Moda
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Casa
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap">
              Esportes
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
