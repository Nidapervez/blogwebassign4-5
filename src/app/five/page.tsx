import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image2 from "../2.jpg"; // Add your new image path
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
              alt="Child Activities Image" 
              height={400} 
              width={800} 
              className="object-cover w-full h-64 sm:h-80 md:h-96" 
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: Child Activities
              </h2>
              <h1 className="title-font text-2xl sm:text-3xl font-medium text-gray-900 mb-3">
                Fun and Engaging Activities for Children
              </h1>
              <p className="leading-relaxed mb-3">
                Engaging children in activities is essential for their development, creativity, and social skills. Whether indoors or outdoors, there are countless ways to keep kids entertained while promoting learning and exploration.
              </p>
              <p className="leading-relaxed mb-3">
                Outdoor activities like hiking, biking, or playing sports not only encourage physical fitness but also foster a love for nature. These experiences can help children develop teamwork skills and build confidence as they navigate challenges.
              </p>
              <p className="leading-relaxed mb-3">
                Indoor activities such as arts and crafts, cooking, or science experiments provide opportunities for creativity and hands-on learning. These activities stimulate curiosity and allow children to express themselves while honing their fine motor skills.
              </p>
              <p className="leading-relaxed mb-3">
                Storytime and reading sessions can spark imagination and improve literacy skills. Engaging children with books that reflect their interests can foster a lifelong love for reading and learning.
              </p>
              <p className="leading-relaxed mb-3">
                Additionally, community events like workshops, festivals, or sports leagues offer social interaction and the chance to make new friends. Participating in these activities helps children feel connected and valued in their communities.
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
