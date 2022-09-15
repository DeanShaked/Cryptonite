import Link from "next/link";
import React from "react";

const MarketNavbar = () => {
  const navItems = [
    {
      id: "1",
      title: "Home",
      href: "/",
    },
    {
      id: "1",
      title: "NFT Marketplace",
      href: "/market",
    },
    {
      id: "1",
      title: "Exchange",
      href: "/exchange",
    },
    {
      id: "1",
      title: "Cynite DAO",
      href: "/dao",
    },
  ];
  return (
    <nav className="border-b-2 p-4">
      <div className="flex mt-4">
        {navItems.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              <a className="mr-4 text-pink">{item.title}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MarketNavbar;
