
"use client"
import Link from 'next/link';
import Image from 'next/image';
import image from "../1.jpg"; 
import image2 from "../3.jpg"; 
import image3 from "../11.webp"; 
import image4 from "../5.webp"; 
import image5 from "../6.webp"; 
import image8 from "../2.jpg";

const BlogPosts = () => {
  const posts = [
    {
      id: "one",
      title: "Different Profession",
      content: "Explore the wide range of professions that shape our world. From creative artists to skilled tradespeople, each profession plays a vital role in society.",
      image: image,
    },
    {
      id: "two",
      title: "Island Life",
      content: "Island life offers a serene escape into nature, with stunning landscapes and peaceful surroundings.",
      image: image2,
    },
    {
      id: "three",
      title: "An Unrealistic World",
      content: "An unrealistic world is one where imagination and fantasy break the bounds of reality.",
      image: image3,
    },
    {
      id: "four",
      title: "Research and Development",
      content: "Research and development is crucial for innovation and advancement in various fields.",
      image: image4,
    },
    {
      id: "five",
      title: "Future Technologies",
      content: "The future of technology holds endless possibilities for innovation and improvement in our daily lives.",
      image: image5,
    },
    {
      id: "six",
      title: "Digital Transformation",
      content: "Digital transformation is changing the way businesses operate and engage with customers, enhancing efficiency and innovation.",
      image: image8,
    },
  ];

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map(({ id, title, content, image }) => (
              <div key={id} className="p-4">
                <div className="bg-neutral-100 text-blue-950 p-4 border border-[#f8f5f4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="mb-4 flex-shrink-0">
                    <Image
                      alt={title}
                      src={image}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg" // Fixed height for uniformity
                    />
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-black mb-4 line-clamp-2">{content}</p> {/* Line clamp for two lines */}
                  </div>
                  <div className="mt-auto text-left">
                    <Link
                      href={`/${id}`} // Link to the dynamic blog post
                      className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-950 transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </>
  );
};

export default BlogPosts;
