import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Web development is constantly evolving. Discover what technologies are shaping the future of the web.',
      date: 'October 10, 2024',
      link: '/blogs/future-of-web-development'
    },
    {
      id: 2,
      title: 'How to Improve Your SEO Ranking',
      excerpt: 'SEO is key to getting traffic. Here are some actionable tips that can improve your websites SEO.',
      date: 'October 9, 2024',
      link: '/blogs/improve-your-seo-ranking'
    },
    {
      id: 3,
      title: 'Creating Engaging Blog Content',
      excerpt: 'Writing content that engages readers is an art. Heres how you can make sure your blog posts stand out.',
      date: 'October 5, 2024',
      link: '/blogs/creating-engaging-content'
    },
  ];

  return (
    <div><Navbar/>
      {/* Blog Header */}
      <section className="bg-gray-100 py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Our Latest Blog Posts</h1>
        <p className="text-lg text-gray-600 text-center mt-4">
          Dive into the latest insights on web development, SEO, content creation, and more.
        </p>
      </section>

      {/* Blog Post List */}
      <div className="bg-white py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-gray-500 mt-4 text-sm">Published on {post.date}</p>
              <Link href={post.link}
                 className="text-blue-600 hover:text-blue-700 mt-4 block text-sm font-medium">Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
