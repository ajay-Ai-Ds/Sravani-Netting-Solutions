import { notFound } from 'next/navigation';
import Link from 'next/link';

const areasData = {
  velachery: {
    name: "Velachery",
    title: "Premium Safety Nets Installation in Velachery, Chennai | Sravani Netting Solutions",
    desc: "Looking for reliable safety nets in Velachery? Sravani Netting Solutions offers heavy-duty pigeon nets, balcony safety nets, and invisible grills tailored for Velachery's residential apartments.",
    content: `
      Velachery has seen rapid residential growth over the past few years, with high-rise apartments and independent luxury villas becoming the norm. With this vertical growth, the need for robust balcony safety nets and pigeon protection is higher than ever. At Sravani Netting Solutions, we provide specialized safety netting solutions designed specifically for the unique architectural requirements of homes in Velachery.
      
      Our premium high-density polyethylene (HDPE) safety nets are UV-stabilized, ensuring they do not degrade under the harsh Chennai sun. Whether you are dealing with aggressive pigeon infestations in your duct areas, monkey intrusions, or simply want to ensure a safe balcony environment for your children and pets, our team is equipped to handle installations of all sizes. Pigeons in particular can cause severe hygiene issues, and our customized bird netting completely blocks their entry without restricting fresh air and natural light.
      
      We also offer modern invisible grills for residents in Velachery who want a premium aesthetic. These marine-grade stainless steel cables provide uncompromised safety without blocking your beautiful view of the city skyline. They are highly durable, rust-proof, and can bear significant loads up to 400kg, making them the perfect functional choice for modern balconies and staircases.
      
      Book a free site inspection in Velachery today. Our expert technicians will arrive promptly, provide accurate measurements, and can even complete the installation on the same day. We pride ourselves on zero hidden costs, transparent pricing, and a comprehensive up to 5-year warranty on all our premium installations. Ensure the safety of your loved ones with Sravani Netting Solutions, your trusted local partner in Velachery.
    `
  },
  "anna-nagar": {
    name: "Anna Nagar",
    title: "Expert Safety Nets & Invisible Grills in Anna Nagar | Sravani Netting Solutions",
    desc: "Secure your home in Anna Nagar with Sravani Netting Solutions. We provide top-grade balcony nets, bird netting, and custom invisible grills with quick same-day installation.",
    content: `
      Anna Nagar is a bustling residential hub in Chennai, characterized by closely built apartment complexes and commercial centers. The proximity of buildings often leads to significant bird and pigeon issues, especially in vertical duct areas and open balconies. Sravani Netting Solutions is dedicated to solving these problems for Anna Nagar residents with our top-of-the-line safety nets and bird protection meshes.
      
      We understand the specific challenges faced by residents in this area. Our heavy-duty pigeon nets are designed to completely seal off balconies, windows, and ventilation shafts, ensuring your home remains clean, hygienic, and free from bird droppings. Made from virgin nylon and HDPE materials, these nets are incredibly strong, weather-resistant, and virtually invisible from a distance, preserving the aesthetic appeal of your building.
      
      Beyond bird protection, child safety is a paramount concern for families living in multi-story buildings in Anna Nagar. Our balcony safety nets are woven with extra-thick twines to easily withstand heavy impact, keeping wandering toddlers and curious pets entirely safe. For those looking for an upgrade over traditional iron grills, our custom-fitted invisible grills offer an elegant, rust-free, and highly secure alternative.
      
      Sravani Netting Solutions offers seamless, hassle-free services in Anna Nagar. From the moment you call us, our team ensures a smooth process—starting with a free, no-obligation site measurement to same-day, professional installation using high-quality stainless steel anchor hooks. Contact us today to secure your Anna Nagar home with the best safety nets in Chennai.
    `
  },
  guindy: {
    name: "Guindy",
    title: "Balcony Safety Nets & Pigeon Nets in Guindy | Sravani Netting Solutions",
    desc: "Sravani Netting Solutions delivers premium safety net solutions in Guindy, Chennai. Protect your high-rise apartments with our durable, UV-resistant nets and invisible grills.",
    content: `
      Guindy is one of Chennai's most prominent IT and residential corridors, known for its towering skyscrapers and premium gated communities. Living in high-rises comes with spectacular views but also significant safety concerns. Sravani Netting Solutions is the leading provider of high-altitude safety netting and invisible grills for the discerning residents of Guindy.
      
      Balcony safety for children and pets is our top priority. We install tightly woven, heavy-duty safety nets that act as an impenetrable barrier, preventing accidental falls while maintaining 100% ventilation. Our installation team is highly trained in rope access and high-rise safety protocols, ensuring secure fittings even on the highest floors of Guindy's luxury apartments.
      
      Additionally, pigeons can be a massive nuisance in high-rise duct areas and AC outdoor units. We provide permanent bird-proofing solutions using UV-stabilized anti-bird nets and humane stainless steel bird spikes. For residents who refuse to compromise on their panoramic views, our invisible grills are the ultimate solution. Made of marine-grade 316 stainless steel coated with nylon, they offer immense tensile strength while remaining sleek and modern.
      
      At Sravani Netting Solutions, we value your time. We offer quick turnaround times in Guindy, with most inspections and installations completed within 24 hours. Trust our decade of experience, high-quality materials, and dedicated customer support to protect your home. Schedule your free consultation in Guindy today.
    `
  },
  porur: {
    name: "Porur",
    title: "Best Safety Nets & Bird Protection in Porur | Sravani Netting Solutions",
    desc: "Ensure complete safety for your family and pets in Porur. Sravani Netting Solutions installs high-quality balcony nets, monkey nets, and invisible grills.",
    content: `
      Located at the heart of Cyberabad, Porur is a highly sought-after residential destination. With a mix of premium apartments and standalone homes, residents frequently seek reliable safety measures for their open spaces. Sravani Netting Solutions offers an extensive range of safety netting solutions tailored to the specific needs of Porur homeowners.
      
      One of the primary concerns in Porur is the safety of children and pets on open balconies and terraces. Our specially designed child safety nets are crafted from high-impact nylon and HDPE materials, anchored securely to the walls using rust-proof steel hooks. These nets provide peace of mind without creating a claustrophobic environment, allowing you to enjoy fresh air safely.
      
      Porur also faces issues with monkeys and pigeons. Our thick, bite-resistant monkey safety nets are built to withstand aggressive pulling and climbing, keeping your property secure. For bird problems, our transparent pigeon nets keep your balconies spotless and hygienic. We also install space-saving ceiling cloth drying hangers, perfect for maximizing utility space in modern Porur apartments.
      
      Customer satisfaction is our core focus. We provide free site visits across Porur to assess your exact requirements. Our transparent pricing structure means no hidden fees, and our prompt installation team ensures the job is done perfectly the first time. Secure your home with Sravani Netting Solutions' premium products and unmatched service in Porur.
    `
  },
  adyar: {
    name: "Adyar",
    title: "Premium Invisible Grills & Safety Nets in Adyar | Sravani Netting Solutions",
    desc: "Protect your luxury villa or apartment in Adyar with Sravani Netting Solutions. We specialize in aesthetic invisible grills, balcony safety nets, and sports netting.",
    content: `
      Adyar has rapidly emerged as a premium luxury residential hub in Chennai, featuring sprawling villas and ultra-luxury high-rises. Preserving the aesthetic elegance of these homes while ensuring absolute safety requires specialized solutions. Sravani Netting Solutions is proud to be the trusted safety net and invisible grill provider for the residents of Adyar.
      
      For luxury homes, traditional bulky iron grills often ruin the architectural beauty and block scenic views. Our premium invisible grills are the perfect modern alternative for Adyar homes. Installed with precision tensioning, these ultra-strong stainless steel cables provide a secure barrier that can withstand up to 400kg of impact, while remaining virtually invisible from a distance. 
      
      We also provide comprehensive netting solutions, including heavy-duty pigeon nets to keep your expansive balconies pristine, and specialized sports netting for residential society sports courts and terrace cricket pitches. Our sports nets are built with thick, multi-ply twines to absorb high-velocity impacts safely.
      
      Sravani Netting Solutions brings professional, clean, and timely execution to every project in Adyar. We understand the high standards expected in premium communities, and our certified technicians ensure flawless installation using the best materials available in the market. Contact us for a premium safety upgrade for your Adyar residence, complete with long-term warranties and dedicated support.
    `
  },
  omr: {
    name: "OMR",
    title: "Reliable Safety Nets Installation in OMR | Sravani Netting Solutions",
    desc: "Looking for top-quality safety nets in OMR? Sravani Netting Solutions provides child safety nets, pigeon protection, and invisible grills for modern homes.",
    content: `
      OMR is one of the fastest-growing residential areas in Chennai, with a surge in gated communities and multi-story apartments. As families move into these new homes, securing open balconies and windows becomes an immediate priority. Sravani Netting Solutions offers tailored, high-quality safety netting services for the growing community in OMR.
      
      Child and pet safety is our primary focus. We install premium, high-tensile balcony safety nets that are rigorously tested to prevent accidental falls. Unlike cheap plastic alternatives, our nets are UV-stabilized, meaning they won't become brittle or snap after months in the sun. They maintain their strength and elasticity for years, providing reliable, round-the-clock protection for your loved ones.
      
      In addition to fall prevention, we tackle the common issue of bird infestations. Our anti-bird nets are seamlessly integrated into your balcony or duct area to block pigeons without ruining your building's facade. For OMR residents seeking a more structural solution, our custom-fitted invisible grills offer safety with a minimalist touch.
      
      At Sravani Netting Solutions, we make the process effortless for OMR residents. Give us a call or drop a message on WhatsApp, and our experts will visit your site for free measurements. We provide instant, transparent quotes and execute installations swiftly with our experienced team. Choose safety and quality with Sravani Netting Solutions in OMR.
    `
  },
  "t-nagar": {
    name: "T. Nagar",
    title: "Balcony Nets & Bird Protection in T. Nagar | Sravani Netting Solutions",
    desc: "Sravani Netting Solutions offers expert safety net installations in T. Nagar. Protect your home from pigeons, monkeys, and fall hazards with our premium nets.",
    content: `
      Nestled close to the IT corridor, T. Nagar has grown into a vibrant residential neighborhood. With many families occupying high-rise apartments, the necessity for robust balcony safety measures is critical. Sravani Netting Solutions is the go-to expert for top-tier safety nets and invisible grills in T. Nagar.
      
      Our comprehensive safety solutions cover everything from child fall protection to keeping out pests. Our balcony safety nets are intricately woven to provide a strong physical barrier while remaining visually unobtrusive. For homes facing issues with monkeys from nearby green patches, our extra-thick, heavy-duty monkey nets offer unmatched bite and tear resistance, keeping your home secure.
      
      Pigeons nesting in AC units and duct shafts are another major issue in T. Nagar. We provide permanent relief through our UV-resistant pigeon nets and humane bird spikes. Additionally, we install high-quality ceiling cloth drying hangers, an essential space-saving utility for modern apartment living.
      
      We believe in delivering excellence through high-quality materials and professional workmanship. Sravani Netting Solutions offers free, same-day site inspections in T. Nagar, ensuring you get accurate measurements and immediate solutions. Our installations are backed by solid warranties, giving you total peace of mind. Trust us to safeguard your T. Nagar home today.
    `
  },
  tambaram: {
    name: "Tambaram",
    title: "Safety Nets & Invisible Grills in Tambaram, Chennai | Sravani",
    desc: "Get durable, UV-resistant balcony safety nets, pigeon nets, and invisible grills in Tambaram. Sravani Netting Solutions offers free inspections and quick installations.",
    content: `
      Tambaram is a densely populated and rapidly expanding residential area in Chennai, featuring a wide mix of standalone buildings and large apartment complexes. Ensuring the safety of open spaces in such a bustling neighborhood is essential. Sravani Netting Solutions brings years of expertise in safety netting and invisible grill installations to the residents of Tambaram.
      
      Whether you need to child-proof your 5th-floor balcony or secure your open terrace, our heavy-duty safety nets are the perfect solution. Manufactured from virgin polymers, our nets offer superior tensile strength and longevity. They withstand harsh weather, rain, and intense sunlight without fading or weakening, ensuring your family remains protected year after year.
      
      Bird and pigeon control is another critical service we provide in Tambaram. Our meticulously installed bird nets cover duct areas and windows, preventing the hygiene hazards associated with bird droppings. For an advanced architectural upgrade, our stainless steel invisible grills provide maximum safety for windows and balconies without obstructing light or airflow.
      
      Sravani Netting Solutions is committed to serving the Tambaram community with honesty and professionalism. We do not charge for site visits or measurements, and our pricing is always transparent. Our skilled technicians ensure a clean, perfect fit every time. Contact us today to secure your Tambaram property with the finest safety solutions in the city.
    `
  },
  mylapore: {
    name: "Mylapore",
    title: "Balcony Safety Nets & Pigeon Nets in Mylapore, Chennai | Sravani",
    desc: "Looking for top-quality balcony safety nets or invisible grills in Mylapore, Chennai? Sravani Netting Solutions provides expert installation with free site inspections.",
    content: `
      Mylapore is one of Chennai's most historic and densely inhabited cultural hubs, featuring a mix of traditional residential houses and contemporary multi-story apartments. Ensuring safety and bird protection in open balconies and windows is essential for Mylapore residents. Sravani Netting Solutions offers high-quality, durable safety nets designed for long-lasting protection.
      
      We specialize in HDPE balcony safety nets that prevent accidental falls while allowing maximum sunlight and ventilation. Our UV-stabilized anti-pigeon nets provide a clean, humane barrier to keep bird droppings away from your living space. For modern homes, our sleek stainless steel invisible grills provide security without compromising architectural charm.
      
      Contact Sravani Netting Solutions today for prompt, professional service and free site measurements in Mylapore.
    `
  },
  "besant-nagar": {
    name: "Besant Nagar",
    title: "Balcony Safety Nets & Invisible Grills in Besant Nagar, Chennai | Sravani",
    desc: "Protect your home in Besant Nagar with premium balcony safety nets, pigeon nets, and rust-proof invisible grills from Sravani Netting Solutions.",
    content: `
      Besant Nagar is a coastal residential neighborhood in Chennai known for its breezy atmosphere and high-rise apartments. Living near coastal environments requires weather-resistant netting and corrosion-proof hardware. Sravani Netting Solutions provides marine-grade stainless steel invisible grills and UV-stabilized HDPE safety nets specifically suited for coastal Chennai homes.
      
      Our safety nets keep children, pets, and balconies secure without blocking scenic sea breezes. Our bird protection systems protect duct areas and windows from pigeon roosting. 
      
      Schedule a free inspection in Besant Nagar today with Sravani Netting Solutions.
    `
  },
  kilpauk: {
    name: "Kilpauk",
    title: "Safety Nets Installation in Kilpauk, Chennai | Sravani Netting Solutions",
    desc: "Get heavy-duty balcony safety nets, bird netting, and invisible grills in Kilpauk. Sravani Netting Solutions offers quick, professional same-day installations.",
    content: `
      Kilpauk is a prime residential locality in Chennai with numerous high-rise residential complexes and independent houses. Sravani Netting Solutions brings complete safety netting and bird-proofing services to home owners across Kilpauk.
      
      Our heavy-duty balcony safety nets ensure child and pet safety, while our customized pigeon nets keep utility areas clean and hygienic. We also install space-saving ceiling cloth drying hangers and aesthetic invisible grills.
      
      Reach out to Sravani Netting Solutions for free site measurements in Kilpauk.
    `
  },
  nungambakkam: {
    name: "Nungambakkam",
    title: "Premium Safety Nets & Invisible Grills in Nungambakkam | Sravani",
    desc: "Secure your high-rise residence in Nungambakkam with Sravani Netting Solutions. We offer balcony safety nets, anti-bird netting, and modern invisible grills.",
    content: `
      Nungambakkam is a central commercial and high-end residential neighborhood in Chennai. Sravani Netting Solutions offers custom-engineered safety netting solutions and invisible grills for apartment balconies, windows, and duct spaces in Nungambakkam.
      
      Our 316 marine-grade stainless steel invisible grills provide uncompromised physical security while preserving wide open city views. Our high-tensile safety nets prevent accidental falls and keep pigeons out of your living area.
      
      Call Sravani Netting Solutions today to book your free consultation in Nungambakkam.
    `
  }
};

export function generateStaticParams() {
  return Object.keys(areasData).map((locality) => ({
    locality,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ locality: string }> }) {
  const { locality } = await params;
  const data = areasData[locality as keyof typeof areasData];
  if (!data) return { title: 'Not Found' };
  
  const url = `https://www.sravaninettingsolutions.com/areas/${locality}`;
  return {
    title: data.title,
    description: data.desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      url: url,
      siteName: 'Sravani Netting Solutions',
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.desc,
    }
  };
}

export default async function LocalityPage({ params }: { params: Promise<{ locality: string }> }) {
  const { locality } = await params;
  const data = areasData[locality as keyof typeof areasData];
  
  if (!data) {
    notFound();
  }

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": `https://www.sravaninettingsolutions.com/areas/${locality}`
      }
    ]
  };

  return (
    <main className="py-32 bg-[#f9f9f9] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/areas" className="text-[#e63946] hover:text-[#dc2626] font-semibold mb-8 inline-block">
          &larr; Back to All Areas
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#e5e5e5]">
          <span className="text-[#e63946] font-bold tracking-widest uppercase text-sm">
            Service Area
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#000000] font-display mt-4 mb-8">
            Safety Nets in {data.name}
          </h1>
          
          <div className="prose prose-lg prose-slate max-w-none mb-12 space-y-6">
            {data.content.trim().split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div className="bg-[#000000] rounded-2xl p-8 text-center text-white border border-[#333333]">
            <h3 className="text-2xl font-bold font-display mb-4 text-white">
              Need an installation in {data.name}?
            </h3>
            <p className="text-slate-300 mb-6">
              Call us now for a free measurement and quote. We offer same-day service across {data.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+918637607910" className="bg-[#e63946] hover:bg-[#dc2626] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto">
                Call +91 86376 07910
              </a>
              <a href="https://wa.me/918637607910" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto border border-white/20">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
