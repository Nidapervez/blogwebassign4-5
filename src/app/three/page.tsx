import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image2 from "../11.webp"; // Add your new image path
import Navbar from '../components/navbar';

const BlogPost = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-col items-center">
          <div className="max-w-xl w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-800 hover:border-4">
            <Image 
              src={image2} 
              alt="Unrealistic World Image" 
              height={400} 
              width={800} 
              className="object-cover w-full h-64 sm:h-80 md:h-96" 
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: Unrealistic Worlds
              </h2>
              <h1 className="title-font text-2xl sm:text-3xl font-medium text-gray-900 mb-3">
                Exploring Unrealistic Worlds
              </h1>
              <p className="leading-relaxed mb-3">
                In a world where the laws of physics bend and reality blurs, imagination reigns supreme. These unrealistic realms are painted with vibrant colors and surreal landscapes that challenge our perception of the possible.
              </p>
              <p className="leading-relaxed mb-3">
                Picture floating islands drifting among the clouds, where gravity is just a suggestion. Here, inhabitants ride on the backs of giant birds or swim in seas of shimmering stars, exploring landscapes that change with their emotions.
              </p>
              <p className="leading-relaxed mb-3">
                These worlds invite adventure, where quests are embarked upon with whimsical companions and obstacles are met with creativity. Each journey through these realms reveals mysteries and magic, pushing the boundaries of imagination.
              </p>
              <p className="leading-relaxed mb-3">
                The communities in these places thrive on collaboration and ingenuity, with shared stories that evolve with each retelling. Festivals of light and sound bring everyone together, celebrating the beauty of the unreal.
              </p>
              <p className="leading-relaxed mb-3">
                Ultimately, exploring unrealistic worlds invites us to dream without limits, reminding us that creativity knows no bounds and that every adventure begins with a single thought.
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
    </>
  );
};

export default BlogPost;
