import { Card } from "@/components/ui/card";
import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function SubFooter() {
  const socialCards = [
    { name: "Twitter", icon: <Twitter className="fill-white" /> },
    { name: "Facebook", icon: <Facebook className="fill-white" /> },
    {
      name: "Instagram",
      icon: <Instagram className="fill-white text-black" />,
    },
    { name: "LinkedIn", icon: <Linkedin className="fill-white" /> },
  ];

  return (
    <div className="bg-black">
      <div className="flex flex-col  md:flex-row md:justify-between items-center px-5 py-10 text-white border-t border-stone-800 mx-16">
        <p className="text-lg text-stone-500 ">
          © 2025 Copyright by FurniSphere
        </p>

        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 gap-3 p-10 ">
          {socialCards.map((item, index) => (
            <Card
              key={index}
              className="flex flex-row items-center gap-2 border border-stone-900 rounded-full text-md bg-stone-900 text-white px-4 py-3"
            >
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
