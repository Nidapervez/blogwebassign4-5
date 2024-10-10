import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image2 from "../5.webp"; // Add your new image path

const BlogPost = () => {
  return (
    <div className="bg-white text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-col items-center">
          <div className="pl-40 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-800 hover:border-4">
            <Image src={image2} alt="Technology Image" height={400} width={800} className="object-cover" />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: Technology
              </h2>
              <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
                The Impact of Technology on Our Lives
              </h1>
              <p className="leading-relaxed mb-3">
                Technology has become an integral part of our daily lives, revolutionizing the way we communicate, work, and interact with the world. From smartphones to smart homes, advancements have made life more convenient and connected.
              </p>
              <p className="leading-relaxed mb-3">
                The digital age has transformed communication, allowing us to connect with people across the globe in an instant. Social media platforms enable sharing of ideas and experiences, fostering a sense of community regardless of distance.
              </p>
              <p className="leading-relaxed mb-3">
                In the workplace, technology enhances productivity and efficiency. Tools such as cloud computing, project management software, and automation are streamlining processes, enabling teams to collaborate seamlessly from different locations.
              </p>
              <p className="leading-relaxed mb-3">
                Beyond convenience, technology plays a crucial role in innovation. Fields like healthcare benefit from advancements in telemedicine and AI, leading to improved patient outcomes and access to care.
              </p>
              <p className="leading-relaxed mb-3">
                However, as we embrace technology, its essential to consider its implications. Issues like data privacy, digital addiction, and the digital divide remind us to approach technological advancements thoughtfully and responsibly.
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
