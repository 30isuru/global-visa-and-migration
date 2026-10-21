
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Canada Express Entry: 2025 Updates You Need to Know",
      excerpt: "Important changes to Canada's Express Entry system and how they might affect your application.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&h=400",
      date: "April 28, 2025",
      author: "Emma Thompson",
      category: "Canada Immigration",
      slug: "canada-express-entry-2025-updates"
    },
    {
      title: "Australian Skilled Migration: New Points System Explained",
      excerpt: "A comprehensive guide to the latest changes in Australia's points-based skilled migration system.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400",
      date: "April 21, 2025",
      author: "James Wilson",
      category: "Australia Immigration",
      slug: "australian-skilled-migration-points-system"
    },
    {
      title: "UK Post-Study Work Visa: Complete Guide for International Students",
      excerpt: "Everything students need to know about staying and working in the UK after graduating.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
      date: "April 15, 2025",
      author: "Sarah Johnson",
      category: "UK Immigration",
      slug: "uk-post-study-work-visa-guide"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our <span className="gold-highlight">Blog</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest immigration news, tips, and insights from our expert consultants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-globalmigrate-blue">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-globalmigrate-blue hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-secondary">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
