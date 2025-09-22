import { Register } from '@/components/auth/register';
import { getAllUsers } from '@/lib/user/services/user.service';
import Image from 'next/image';

export default function RegisterPage() {
  getAllUsers();

  return(
    <div className="flex gap-50 overflow-hidden rounded-2xl m-10">
      <div className="relative space-y-8 w-1/3">
        <Image
          src="/images/image2register.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='w-full h-full object-cover '
        />
        <div className='absolute left-10 bottom-4  text-white space-y-2'>
          <p className="text-lg font-bold">
            Simply all the tools that <br/>my team and i need
          </p>
          <div>
            <p className="font-bold">Karen Yue</p>
            <p>Director of Digital Marketing Technology</p>
          </div>

        </div>
      </div>
      <div className="grow mt-10 "><Register /></div>
    </div>
  )
}
