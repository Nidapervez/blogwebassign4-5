import Image from 'next/image';
import React from 'react';
import image from "../1.jpg"; // Add your image path
import Link from 'next/link';

const BlogPost = () => {
  return (
    <div className="bg-white text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-col items-center">
          <div className="max-w-xl w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-800 hover:border-4">
            <Image 
              src={image} 
              alt="Blog Image" 
              height={400} 
              width={800} 
              className="object-cover w-full h-64 sm:h-80 md:h-96" 
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: Different Professions
              </h2>
              <h1 className="title-font text-2xl sm:text-3xl font-medium text-gray-900 mb-3">
                Exploring Different Professions
              </h1>
              <p className="leading-relaxed mb-3">
                In todays dynamic world, various professions contribute to the fabric of society, each playing a pivotal role in its functioning. From the creative realms of arts and media to the meticulous fields of science and technology, each profession has unique attributes that make it essential.
              </p>
              <p className="leading-relaxed mb-3">
                The creative professions, such as artists, writers, and designers, push boundaries and inspire innovation. They use their imagination and skills to create works that evoke emotions, tell stories, and connect people. In contrast, professions in science and technology, like engineers and researchers, focus on problem-solving, enhancing our understanding of the world, and developing tools that improve our daily lives.
              </p>
              <p className="leading-relaxed mb-3">
                The healthcare sector, with its doctors, nurses, and caregivers, exemplifies the noblest profession dedicated to saving lives and promoting well-being. Educators also play a critical role, shaping future generations and equipping them with the knowledge and skills necessary to thrive in an ever-evolving landscape.
              </p>
              <p className="leading-relaxed mb-3">
                Moreover, skilled tradespeople like electricians, plumbers, and carpenters are vital for maintaining our infrastructure and ensuring our homes are safe and functional. These professions require specialized training and craftsmanship, reflecting a unique set of skills and dedication.
              </p>
              <p className="leading-relaxed mb-3">
                As we navigate through various careers, it is essential to appreciate the contributions of each profession. Each role, whether in the arts, sciences, healthcare, education, or trades, creates a diverse tapestry that enriches our communities. Understanding and valuing these differences can foster greater respect and collaboration in our workplaces and society.
              </p>
              <div className="flex items-center flex-wrap mt-4">
                <Link href="/">
                  <button className="bg-slate-600 rounded-md w-full sm:w-20 text-black">Back</button>
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
