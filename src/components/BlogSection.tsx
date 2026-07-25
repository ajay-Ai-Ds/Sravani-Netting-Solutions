import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { blogData } from "@/data/blogData";

export default function BlogSection() {
  // Display the 3 most recent blog posts
  const recentBlogs = blogData.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e63946]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e63946]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e63946] block mb-2 font-display">
              Safety Advice & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
              Latest Blog & Case Studies
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-2xl">
              Explore our comprehensive guides on balcony safety nets, invisible grills, child protection, and completed project locations in Chennai.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 bg-[#e63946] hover:bg-[#dc2626] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-[#e63946]"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((post) => (
            <article
              key={post.slug}
              className="bg-[#1a1a1a] border border-[#333333] rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:border-[#e63946] hover:shadow-2xl transition-all duration-300"
            >
              {/* Featured Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-4 left-4 inline-flex items-center text-xs font-semibold text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Calendar className="w-3 h-3 mr-1.5 text-[#e63946]" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-white font-display mb-3 group-hover:text-[#e63946] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-bold text-[#e63946] hover:text-[#dc2626] transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
