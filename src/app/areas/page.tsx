import Link from 'next/link';

export const metadata = {
  title: 'Areas We Serve in Chennai | Sravani Netting Solutions',
  description: 'Sravani Netting Solutions provides premium safety nets and invisible grills across major localities in Chennai including Guindy, Porur, and Velachery.',
  alternates: {
    canonical: 'https://www.sravaninettingsolutions.com/areas',
  },
  openGraph: {
    title: 'Areas We Serve in Chennai | Sravani Netting Solutions',
    description: 'Sravani Netting Solutions provides premium safety nets and invisible grills across major localities in Chennai including Guindy, Porur, and Velachery.',
    url: 'https://www.sravaninettingsolutions.com/areas',
    siteName: 'Sravani Netting Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Serve in Chennai | Sravani Netting Solutions',
    description: 'Premium safety nets and invisible grills across major localities in Chennai.',
  }
};

const areas = [
  { name: 'Anna Nagar', slug: 'anna-nagar' },
  { name: 'Velachery', slug: 'velachery' },
  { name: 'T. Nagar', slug: 't-nagar' },
  { name: 'Adyar', slug: 'adyar' },
  { name: 'OMR', slug: 'omr' },
  { name: 'Porur', slug: 'porur' },
  { name: 'Guindy', slug: 'guindy' },
  { name: 'Tambaram', slug: 'tambaram' },
  { name: 'Mylapore', slug: 'mylapore' },
  { name: 'Besant Nagar', slug: 'besant-nagar' },
  { name: 'Kilpauk', slug: 'kilpauk' },
  { name: 'Nungambakkam', slug: 'nungambakkam' }
];

export default function AreasOverview() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sravaninettingsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Serve",
        "item": "https://www.sravaninettingsolutions.com/areas"
      }
    ]
  };

  return (
    <main className="py-32 bg-[#f9f9f9] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] font-display">
            Areas We Serve in Chennai
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
            Sravani Netting Solutions is proud to offer our premium safety net and invisible grill installation services across all major residential and commercial hubs in Chennai.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(area => (
            <Link 
              key={area.slug} 
              href={`/areas/${area.slug}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#e5e5e5] hover:border-[#e63946] flex flex-col items-center justify-center text-center group"
            >
              <h2 className="text-xl font-bold text-[#000000] group-hover:text-[#e63946] font-display">
                {area.name}
              </h2>
              <span className="text-[#e63946] text-sm mt-2 font-semibold">View Details &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
