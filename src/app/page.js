"use client";
import Image from "next/image";

export default function Home() {
  const dashboardCards = [
    {
      title: "Sales",
      icon: "💳",
      description: "Manage your sales, billing and invoices",
      href: "/pos",
      gradient: "from-indigo-500 to-purple-500",
    },

    
    {
      title: "Products",
      icon: "📦",
      description: "Manage inventory, stock and categories",
      href: "/products",
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "Customers",
      icon: "👥",
      description: "View and manage customer database",
      href: "/customers",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Reports",
      icon: "📊",
      description: "View sales & performance analytics",
      href: "/reports",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
          POS Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome Rokib! Manage your business efficiently.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dashboardCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className={`group p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${card.gradient} text-white`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <span className="text-3xl">{card.icon}</span>
            </div>
            <p className="text-sm opacity-90">{card.description}</p>
            <div className="mt-4 flex justify-end opacity-70 group-hover:opacity-100 transition-opacity">
              <span className="font-bold text-sm">→</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Rokib POS. All rights reserved.
      </footer>
    </main>
  );
}
