import {
  ArrowDown,
  ArrowRight,
  Box,
  Facebook,
  Instagram,
  PlayCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ThirdPage() {
  return (
    <div className="bg-black  pt-15 min-h-screen">
      <div className="bg-white ps-10 rounded-3xl pb-5">
        <header className="bg-white flex justify-between items-center rounded-3xl ps-10 pb-10">
          <div className="flex items-center pt-5 gap-5">
            <div className="flex items-center gap-2">
              <Box />
              <h1 className="text-3xl font-bold">avo</h1>
            </div>
            <div className="flex justify-around gap-10 px-5 py-2 border rounded-3xl">
              <p>Home</p>
              <p>Products</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-3 items-center bg-black text-white -rounded-tl-xl rounded-bl-3xl">
            <button className="flex items-center px-3 py-2 gap-3 border border-white rounded-full">
              <span className="text-sm">Stores</span>
              <ArrowDown size={20} />
            </button>
            <button className="flex items-center bg-white text-black rounded-full px-3 py-2 gap-3">
              <ArrowRight className="rounded-full" size={20} />
              <span className="text-sm">Contact Us</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex justify-around">
          <div className="flex flex-col gap-10 w-1/2">
            <p className="font-bold">AirPods MAX.</p>
            <h1 className="text-7xl font-semibold">
              Headphone for <br /> Your Daily Life
            </h1>
            <p className="text-xl text-gray-500">
              The perfect combination of high-fidelity audio and the
              <br /> effortless convenience of AirPods. Your most personalized{" "}
              <br />
              listening experience ever.
            </p>
            <div className="flex gap-3 items-center">
              <button className="bg-black text-white px-7 py-4 rounded-full">
                By Now - $139.00
              </button>
              <button className="flex gap-3 bg-black text-white px-7 py-4 rounded-full">
                <PlayCircle />
                <span className="font-bold">Watch </span>
                <span>Jorney into Sound</span>
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <p>Follow us</p>
              <div className="flex items-center gap-3">
                <Instagram fill="black" color="white" size={35} />
                <Youtube fill="black" color="white" size={45} />
                <Twitter fill="black" size={25} />
                <Facebook fill="black" size={25} />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <Image
              src="/images/headphone.avif"
              alt="Headphone"
              width={100}
              height={100}
              className="object-contain w-full h-[500px]"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
