import { CheckSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-5">
      <div className="flex justify-between h-[90vh] gap-10 p-10 bg-gray-200">
        {/* LEFT */}
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ullam, cumque quos veniam ipsa non quia doloribus ex illo id unde
          corrupti, quas, magni repellendus ut quasi recusandae sit dolorum
          quisquam voluptate. Atque non earum commodi explicabo voluptatem ex?
          Quidem accusamus cum, veniam officia enim repudiandae fuga optio
          laborum delectus sunt esse a dolore perspiciatis labore, nobis aut rem
          earum minus vitae autem aliquid qui velit fugiat. Nemo, sequi!
          Architecto harum consequuntur dignissimos unde perspiciatis. Delectus
          reprehenderit iure repellendus corporis quisquam mollitia ipsum
          deleniti provident architecto. Fuga in aspernatur dolores doloremque
          id culpa quos ullam eligendi cumque. Vitae ad expedita, sed, a sunt
          rerum dolor quibusdam illum enim perspiciatis labore harum quae
          molestias laboriosam? Dicta distinctio sint suscipit ab eius
          laudantium accusamus illum delectus porro quisquam cupiditate
          architecto, dolor sit iure? Dolorem animi esse consectetur excepturi.
          Vero, saepe veniam! Beatae pariatur commodi vero ipsa impedit sed
          aliquam fugiat. Autem quibusdam molestiae perferendis quas, eos
          dolorem quisquam maxime repudiandae? Nobis qui rem fugiat, laudantium
          aspernatur non ad doloremque vero enim debitis excepturi alias numquam
          similique, sunt molestiae quaerat quisquam voluptas quod minus
          temporibus ducimus at impedit iusto est? Veniam dolorum cupiditate,
          tenetur perferendis quam accusamus fuga quis illum, velit enim
          laudantium?
        </div>

        {/* RIGHT */}
        <div className="space-y-1">
          <div className="relative border border-black">
            <div className="flex justify-center w-1/2 border border-red-500">
              <Image
                src="/images/woman.jpg"
                alt="Description of image"
                width={200}
                height={200}
                className="w-[500px] h-[400px] object-cover rounded-3xl"
              />
            </div>
            {/* Little white BOX */}
            <div className="absolute top-20 -left-30 flex gap-3 items-center w-[200px] px-5 py-2 bg-white rounded-full">
              <div className="bg-orange-500 p-1 rounded-md">
                <CheckSquareIcon />
              </div>
              <p>How is the fit?</p>
            </div>

            <div className="absolute -left-30 top-40 flex gap-3 items-center w-[260px] px-5 py-2 bg-white rounded-full">
              <div className="bg-blue-500 p-1 rounded-md">
                <CheckSquareIcon />
              </div>
              <p>Do you like the design?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
