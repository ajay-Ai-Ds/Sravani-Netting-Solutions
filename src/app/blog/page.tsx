import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & Expert Advice | Sravani Netting Solutions Chennai",
  description: "Read expert guides and advice on balcony safety nets, invisible grills, pigeon control, and monkey protection for apartments in Chennai.",
  alternates: {
    canonical: "https://www.sravaninettingsolutions.com/blog",
  },
};

export default function BlogListingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 font-display">
              Expert Safety Net Advice
            </h1>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Read our latest guides on protecting your Chennai apartment from pigeons, monkeys, and accidental falls.
            </p>
            <div className="h-1 bg-accent w-16 mx-auto mt-6 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <time className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <h2 className="font-bold text-xl text-slate-900 font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-light transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
