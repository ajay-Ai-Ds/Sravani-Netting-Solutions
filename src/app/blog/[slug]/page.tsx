import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Sravani Netting Solutions`,
    description: post.description,
    alternates: {
      canonical: `https://www.sravaninettingsolutions.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.sravaninettingsolutions.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `https://www.sravaninettingsolutions.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData.filter((p) => post.relatedSlugs.includes(p.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [`https://www.sravaninettingsolutions.com${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Sravani Netting Solutions",
      url: "https://www.sravaninettingsolutions.com"
    },
    publisher: {
      "@type": "Organization",
      name: "Sravani Netting Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sravaninettingsolutions.com/images/reallogo.webp"
      }
    },
    description: post.description
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f9f9] pt-28 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <time className="text-sm font-bold text-[#e63946] tracking-wider uppercase mb-4 block">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] font-display mb-6">
              {post.title}
            </h1>
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#e63946] hover:prose-a:text-[#dc2626] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call To Action Box */}
          <div className="mt-12 p-8 bg-[#000000] text-white rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#333333]">
            <div>
              <h3 className="text-2xl font-bold font-display text-[#e63946]">Need Installation in Chennai?</h3>
              <p className="text-slate-300 mt-1 text-sm">Get free site measurement & same-day installation from Sravani Netting Solutions.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href="tel:+918637607910" className="bg-[#e63946] hover:bg-[#dc2626] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md">
                Call Now
              </a>
              <a href="https://wa.me/918637607910" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md border border-[#25D366]">
                WhatsApp
              </a>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-[#e5e5e5]">
            <h3 className="text-2xl font-bold text-[#000000] font-display mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-[#000000] group-hover:text-[#e63946] transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
