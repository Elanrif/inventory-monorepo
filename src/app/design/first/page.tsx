import { ArrowRight, Box, Flower, Shield } from "lucide-react";
import Image from "next/image";

export default function FirstPage() {
  return (
    <div className="px-5 pt-5 pb-20 space-y-10">
      {/* header */}
      <header className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Flower strokeWidth={3} />
          <h1 className="text-3xl font-semibold">heexo</h1>
        </div>
        <div className="flex gap-4 items-center capitalize text-gray-400">
          <p>why heexo?</p>
          <p>platform</p>
          <p>solutions</p>
          <p>changelog</p>
        </div>
        <button className="py-2 px-3 rounded-xl border font-medium">
          Book a demo
        </button>
      </header>

      {/* SubHeader */}
      <div className="flex justify-around px-10">
        <h1 className="w-1/2 text-gray-600 text-7xl font-semibold">
          The database for modern applications
        </h1>
        <div className="w-[40%] space-y-4">
          <div className="flex items-center gap-3">
            <button className="px-20 py-4 rounded-xl border-2 border-gray-300 text-ld font-semibold bg-orange-50">
              Start 14-day trial
            </button>
            <div className="bg-orange-50 border-2 border-gray-300 h-16 w-16 rounded-full flex items-center justify-center">
              <ArrowRight />
            </div>
          </div>
          <p className="text-gray-400 w-md">
            Huree centralized data from your entire tech stack and database
            creating one clear view of performance.
          </p>
        </div>
      </div>
      {/* Image */}
      <Image
        src="/images/food-gettyimages.jpg"
        alt="Description of image"
        width={1200}
        height={300}
        className="w-full h-[300px] object-cover rounded-3xl"
      />

      {/* section */}
      <section className="flex justify-evenly">
        <div className="w-1/3 flex gap-3 items-start">
          <div className="p-5 bg-orange-50">
            <Box size={50} className="text-orange-300" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">Use Database with your stack</h1>
            <p className="text-gray-500">
              We offer client and server libraries in everything from React and
              Ruby to iOS.
            </p>
          </div>
        </div>

        <div className="w-1/3 flex gap-3 items-start">
          <div className="p-5 bg-orange-50">
            <Shield size={50} className="text-orange-300" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">Security & privacy</h1>
            <p className="text-gray-500">
              Database supports PII data encrypted with AES-256 at rest of
              explicit user consent flows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
