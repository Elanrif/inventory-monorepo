import { ArrowRight, Bomb, Check, GlobeLock, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SecondPage() {
  return (
    <div className="space-y-10 px-10 py-5">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GlobeLock />
          <h1 className="text-3xl font-semibold">/Sales@gmail.com</h1>
        </div>
        <div className="flex items-center gap-4">
          <p>Product</p>
          <p>Solutions</p>
          <p>Pricing</p>
          <p>Developer</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full px-4 py-2 border-x">login</button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2">
            <span className="font-semibold">Get it Now</span> -{" "}
            <span>it&apos;s free</span>
          </button>
        </div>
      </header>
      {/* Main */}
      <main className="flex justify-between p-10 min-h[300px] rounded-2xl bg-gradient-to-b from-stone-400 via-stone-300 to-stone-100">
        {/* Left */}
        <div className="flex flex-col justify-between space-y-5 w-1/2">
          <div className="flex gap-4">
            <Bomb size={30} />
            <div>
              <h1 className="font-bold">20M+ User</h1>
              <div className="flex items-center gap-1">
                <span>Read Our</span>
                <span className="font-semibold">Sucess Stories</span>
              </div>
            </div>
          </div>
          <h1 className="text-8xl font-semibold">Grow+</h1>
          <p className="capitalize leading-7">
            drive sales growth, and harness ai-powered user <br /> content ---
            up to 50x faster.
          </p>
          <div className="flex gap-3">
            <Image
              src="/images/asiangirl.avif"
              alt="Asian girl"
              width={200}
              height={200}
              className="object-cover w-10 h-10 rounded-full"
            />
            <p>
              Loved the performance
              <br />
              100% Satisfied
            </p>
            {/* Person */}
            <div className="flex gap-1 font-bold">
              <span className="font-normal">/</span>
              <Star fill="black" size={18} />
              <p>4.9</p>
            </div>
          </div>
          {/* Download */}
          <div className="flex items-center gap-3">
            <button className="bg-black text-white rounded-full px-4 py-2 border">
              Download - <span>It&apos;s free</span>
            </button>
            <button className="flex gap-3 rounded-full px-4 py-1 border">
              <span>Our Pricing</span>{" "}
              <ArrowRight className="rotate-[-50deg]" />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 flex flex-col items-center mx-auto">
          <div className="relative w-[3/5]">
            <Image
              src="/images/femme-sport.jpg"
              alt="Asian girl"
              width={200}
              height={200}
              className="object-cover w-full h-[500px] rounded-3xl"
            />
            {/* Group absolute */}
            <div className="absolute top-20 -left-20 flex items-center gap-2 py-2 px-3 rounded-full bg-white">
              <div className="p-1 bg-orange-400 rounded-xl">
                <Check />
              </div>
              <p>How is the fit?</p>
            </div>
            <div className="absolute top-40 -left-20 flex items-center gap-2 py-2 px-3 rounded-full bg-white">
              <div className="p-1 bg-blue-400 rounded-xl">
                <Check />
              </div>
              <p>Do you like the design?</p>
            </div>

            {/* UP TO */}
            <div className="absolute top-5 -right-35 space-y-1 rounded-3xl px-4 py-2 bg-white/30 backdrop-blur-sm">
              <p className="uppercase"> - up to</p>
              <p className="text-3xl font-bold">60%</p>
              <p className="font-light">More sales this week</p>
            </div>

            {/* NIKE */}
            <div className="absolute bottom-10 -right-35 flex gap-3 rounded-3xl px-4 py-3 bg-white/30 backdrop-blur-sm space-y-2">
              <Image
                src="/images/jordan.avif"
                alt="Jordan shoe"
                width={200}
                height={200}
                className="w-[80px] h-[80px] object-cover rounded-xl opacity-100"
              />
              <div className="space-y-1.5">
                <p className="font-light"> Nike Shoes Jordan</p>
                <p className="text-xl font-bold">$849.99</p>
                <div className="flex items-center gap-1 bg-white max-w-[80px] rounded-full px-1">
                  <Star fill="black" size={10} />
                  <p className="font-semibold">4.6</p>
                </div>
              </div>
            </div>
            {/* End absolute */}
          </div>
        </div>
      </main>
      {/* Sponsors */}
      <div className="flex justify-evenly items-center">
        <Image
          src="/images/sponsors/rakuten.png"
          alt="Rakuten"
          width={200}
          height={80}
          className="w-1/10 h-[50px] object-contain"
        />
        <Image
          src="/images/sponsors/ncr.png"
          alt="NCR"
          width={200}
          height={80}
          className="w-1/10 h-[50px] object-contain"
        />
        <Image
          src="/images/sponsors/monday.png"
          alt="Mondary"
          width={200}
          height={80}
          className="w-1/10 h-[50px] object-contain"
        />
        <Image
          src="/images/sponsors/NCR.png"
          alt="NCR"
          width={200}
          height={80}
          className="w-1/10 h-[50px] object-contain"
        />
        <Image
          src="/images/sponsors/dropbox.png"
          alt="Dropbox"
          width={200}
          height={80}
          className="w-1/10 h-[50px] object-contain"
        />
      </div>
    </div>
  );
}
