
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  category: string;
  readTime: string;
  slug: string;
}

const Blog = () => {
  const blogCategories = [
    "All Posts",
    "Canada Immigration",
    "Australia Immigration",
    "UK Immigration",
    "New Zealand Immigration",
    "Study Abroad",
    "Work Permits",
    "Family Sponsorship",
    "Immigration News"
  ];

  const blogPosts: BlogPost[] = [
    {
      title: "Canada Express Entry: 2025 Updates You Need to Know",
      excerpt: "Important changes to Canada's Express Entry system and how they might affect your application process and CRS score requirements.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&h=400",
      date: "April 28, 2025",
      author: "Emma Thompson",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
      category: "Canada Immigration",
      readTime: "8 min read",
      slug: "canada-express-entry-2025-updates"
    },
    {
      title: "Australian Skilled Migration: New Points System Explained",
      excerpt: "A comprehensive guide to the latest changes in Australia's points-based skilled migration system and how to improve your score.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400",
      date: "April 21, 2025",
      author: "James Wilson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
      category: "Australia Immigration",
      readTime: "10 min read",
      slug: "australian-skilled-migration-points-system"
    },
    {
      title: "UK Post-Study Work Visa: Complete Guide for International Students",
      excerpt: "Everything students need to know about staying and working in the UK after graduating from a British university.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
      date: "April 15, 2025",
      author: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&h=100",
      category: "UK Immigration",
      readTime: "7 min read",
      slug: "uk-post-study-work-visa-guide"
    },
    {
      title: "How to Prepare for Your Immigration Interview",
      excerpt: "Expert tips and advice to help you confidently navigate your immigration interview and increase your chances of approval.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      date: "April 10, 2025",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      category: "Immigration News",
      readTime: "6 min read",
      slug: "immigration-interview-preparation-tips"
    },
    {
      title: "Family Sponsorship in Canada: Who Can You Sponsor?",
      excerpt: "A detailed look at Canada's family sponsorship programs, eligibility requirements, and application process.",
      image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=600&h=400",
      date: "April 5, 2025",
      author: "David Park",
      authorImage: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=100&h=100",
      category: "Family Sponsorship",
      readTime: "9 min read",
      slug: "canada-family-sponsorship-guide"
    },
    {
      title: "New Zealand Skilled Migrant Category: 2025 Policy Changes",
      excerpt: "Recent updates to New Zealand's Skilled Migrant Category visa and how these changes may impact your application.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=400",
      date: "March 30, 2025",
      author: "Lisa Wang",
      authorImage: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&fit=crop&w=100&h=100",
      category: "New Zealand Immigration",
      readTime: "8 min read",
      slug: "new-zealand-skilled-migrant-category-changes"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="Migration Insights & Updates"
        subtitle="Stay informed with the latest immigration news, tips, and policy updates."
        buttonText="Latest Updates"
        buttonLink="#latest"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop"
      />
      
      <main id="latest">
        {/* Blog Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-start overflow-x-auto scrollbar-hide pb-2">
              {blogCategories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-5 py-2 whitespace-nowrap rounded-full mr-3 text-sm ${
                    index === 0 
                      ? 'bg-globalmigrate-blue text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop"
                  alt="Canadian immigration policy update"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-globalmigrate-blue/10 text-globalmigrate-blue text-sm font-medium px-3 py-1 rounded-full">Featured</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-globalmigrate-blue">Canada Immigration</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Canadian Immigration Targets to Increase by 30% in 2026</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Canada has announced ambitious new immigration targets that will see the country welcome up to 500,000 new permanent residents annually by 2026. This significant increase aims to address labor shortages and support economic growth across the country.
                </p>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
                    alt="Robert Wilson"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">Robert Wilson</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>May 2, 2025</span>
                      <span className="mx-2">•</span>
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
                <Button asChild className="btn-primary">
                  <a href="/blog/canadian-immigration-targets-increase-2026">Read Full Article</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Insights and updates on immigration policies, processes, and trends</p>
                <div className="flex">
                  <button className="p-2 rounded-full bg-white border border-gray-200 mr-2">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-white border border-gray-200">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-globalmigrate-blue text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-globalmigrate-blue">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="btn-secondary">Load More Articles</Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Subscription */}
        <section className="py-16 bg-globalmigrate-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/80 mb-8">
                Stay updated with the latest immigration news, policy changes, and exclusive insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                />
                <Button className="bg-globalmigrate-gold hover:bg-yellow-500 text-white px-6 py-3 rounded-md transition-colors">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-white/60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Blog;
