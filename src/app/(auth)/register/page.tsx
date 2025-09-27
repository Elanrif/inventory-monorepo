import { Register } from '@/components/auth/register';
import { getAllUsers } from '@/lib/user/services/user.service';
import { Atom } from 'lucide-react';
import Image from 'next/image';

export default function RegisterPage() {
  getAllUsers();

  return (
    <div className="flex gap-50 overflow-hidden rounded-2xl m-10">
      <div className="relative space-y-8 w-1/3">
        <Image
          src="/images/image2register.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='w-full h-full object-cover bg-gray-200 '
        />
        <div className="absolute top-6 left-8  flex items-center gap-2">
           <Atom size={30} className='text-white'/>
          <p className='text-white text-2xl font-bold'>Nucleus</p>
        </div>
        <div className='absolute left-10 bottom-4  text-white space-y-2'>
          <p className="text-lg font-bold">
           Simplement tous les outils dont mon équipe et moi avons besoin
          </p>
          <div>
            <p className="font-bold">Karen Yue</p>
            <p>Directrice de la technologie de marketing numérique</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center grow mt-10"><Register />
      </div>
    </div>
  )
}
