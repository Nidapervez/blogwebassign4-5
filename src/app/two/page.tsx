import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image2 from "../3.jpg"; // Add your new image path

const BlogPost = () => {
  return (
    <div className="bg-white text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-col items-center">
          <div className="pl-40  h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  hover:border-blue-800 hover:border-4">
            <Image src={image2} alt="Island Life Image" height={400} width={800} className="object-cover" />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: Island Life
              </h2>
              <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
                Discovering Island Life
              </h1>
              <p className="leading-relaxed mb-3">
                Island life offers a serene escape into natures beauty, with stunning landscapes and peaceful surroundings. Whether youre seeking relaxation or adventure, islands provide unique experiences away from the hustle and bustle.
              </p>
              <p className="leading-relaxed mb-3">
                From sun-kissed beaches to lush jungles, each island presents an opportunity for exploration. Activities like snorkeling, hiking, and sampling local cuisine allow visitors to immerse themselves in the vibrant culture and environment.
              </p>
              <p className="leading-relaxed mb-3">
                The community spirit on islands is strong, fostering connections among locals and visitors alike. Events, markets, and shared experiences create a sense of belonging and camaraderie.
              </p>
              <p className="leading-relaxed mb-3">
                Many islands prioritize sustainability, promoting eco-tourism and conservation efforts. This approach helps preserve their natural beauty while inviting travelers to appreciate the environment.
              </p>
              <p className="leading-relaxed mb-3">
                Ultimately, embracing island life means cherishing the tranquility it offers and the chance to connect with nature and others in a meaningful way.
              </p>
              <div className="flex items-center flex-wrap mt-4">
              <Link href="/">
  <button className=" bg-slate-600 rounded-md w-20 text-black">Back</button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
