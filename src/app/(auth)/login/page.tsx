import Login from "@/components/auth/login";
import { UserLock } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex rounded-3xl min-h-[100vh] overflow-hidden">
      <div className="relative w-1/3 h-screen">
        <Image
          src="/images/imageLogin.png"
          alt="Description de l'image"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 flex flex-col items-center justify-center text-white p-8">
            <h1 className="text-2xl font-bold mb-3">
              Simplement tous les outils que <br />
              mon équipe et moi avons besoin.
            </h1>
            <p className="">
              <span className="font-bold">Karen Yue</span>
              <br />
              Directeur des technologies de marketing numérique
            </p>
          </div>
          <div className="absolute top-5 left-10 m-4 flex items-center gap-2">
            <p>
              <UserLock className="text-white text-2xl" />
            </p>
            <p className="text-white text-2xl">Nucleus</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-5 items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-start ">
          <h2 className="text-3xl font-bold mb-6">Bienvenue à Nucleus</h2>
          <p className="text-slate-600 text-center">
            Créez votre système de design sans effort avec notre <br />{" "}
            puissante bibliothèque de composants.
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}
