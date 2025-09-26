import { Register } from "@/components/auth/register";
import { getAllUsers } from "@/lib/user/services/user.service";
import { Atom } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  getAllUsers();

  return (
    <div className="flex overflow-hidden rounded-2xl h-[100vh]">
      <div className="relative space-y-8 w-1/3">
        <Image
          src="/images/image2register.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute top-6 left-8  flex items-center gap-2">
          <Atom size={30} className="text-white" />
          <p className="text-white text-2xl font-bold">Nucleus</p>
        </div>
        <div className="absolute left-10 bottom-4  text-white space-y-2">
          <p className="text-lg font-bold">
            Simplement tous les outils dont mon équipe et moi avons besoin
          </p>
          <div>
            <p className="font-bold">Karen Yue</p>
            <p>Directrice de la technologie de marketing numérique</p>
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
        <Register />
      </div>
    </div>
  );
}
