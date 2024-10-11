import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image2 from "../6.webp"; // Add your new image path

const BlogPost = () => {
  return (
    <div className="bg-white text-gray-600 body-font">
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-col items-center">
          <div className="max-w-xl w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-800 hover:border-4">
            <Image 
              src={image2} 
              alt="AI Minds Image" 
              height={400} 
              width={800} 
              className="object-cover w-full h-64 sm:h-80 md:h-96" 
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY: AI Minds
              </h2>
              <h1 className="title-font text-2xl sm:text-3xl font-medium text-gray-900 mb-3">
                Understanding AI Minds: The Future of Intelligence
              </h1>
              <p className="leading-relaxed mb-3">
                Artificial Intelligence (AI) is reshaping our world by mimicking human cognitive functions. From decision-making to problem-solving, AI minds are revolutionizing industries and enhancing everyday experiences.
              </p>
              <p className="leading-relaxed mb-3">
                AI technologies, such as machine learning and neural networks, enable systems to learn from data, improving their performance over time. This capability is transforming sectors like healthcare, finance, and education, where AI can analyze vast amounts of information to provide insights and predictions.
              </p>
              <p className="leading-relaxed mb-3">
                Moreover, AI is enhancing creativity. Generative AI can produce art, music, and even write stories, blurring the lines between human and machine creativity. This collaboration between humans and AI opens new avenues for innovation and expression.
              </p>
              <p className="leading-relaxed mb-3">
                However, the rise of AI also raises important ethical considerations. Questions about privacy, job displacement, and decision-making transparency are crucial as we navigate this technological landscape. Ensuring responsible AI development is essential for maximizing its benefits while minimizing risks.
              </p>
              <p className="leading-relaxed mb-3">
                As we move forward, understanding and engaging with AI minds will be key to harnessing their potential for good. Embracing this technology thoughtfully can lead to a future where humans and AI work together to solve complex challenges and enhance our quality of life.
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
