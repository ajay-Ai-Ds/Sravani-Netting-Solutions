import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Sravani Netting Solutions Chennai | Premium Balcony Safety Nets & Invisible Grills",
  description: "Sravani Netting Solutions is Chennai's leading provider of premium, UV-resistant safety nets, invisible grills, and ceiling cloth hangers. Same-day installation. 100% safe & affordable. Call +91 86376 07910 for a free inspection!",
  keywords: [
    "Chennai Safety Nets",
    "Safety Nets Chennai",
    "Pigeon Safety Nets Chennai",
    "Bird Nets Chennai",
    "Monkey Safety Nets Chennai",
    "Invisible Grills Chennai",
    "Balcony Safety Nets",
    "Children Safety Nets",
    "Sports Nets Chennai",
    "Cricket Nets Chennai",
    "Cloth Hangers Chennai",
    "Best Safety Nets Chennai",
    "Affordable Safety Nets Chennai"
  ],
  authors: [{ name: "Sravani Netting Solutions Chennai" }],
  category: "Home Services",
  alternates: {
    canonical: "https://www.sravaninettingsolutions.com",
  },
  verification: {
    google: "w2oVql4xTdEeC6242FsYA6Zw5atog9-E6FtaBcREk2Q",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sravani Netting Solutions Chennai | Balcony Safety Nets & Invisible Grills",
    description: "Chennai's trusted safety net installation experts. Premium quality, UV-resistant materials, same-day service, & free inspection. Protect your family today!",
    url: "https://www.sravaninettingsolutions.com",
    siteName: "Sravani Netting Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sravaninettingsolutions.com/images/balcony.webp",
        width: 1200,
        height: 630,
        alt: "Sravani Netting Solutions Installation in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sravani Netting Solutions Chennai | Balcony Safety Nets",
    description: "Chennai's premium safety net experts. Same-day installation & free site inspection. Call +91 86376 07910.",
    images: ["https://www.sravaninettingsolutions.com/images/balcony.webp"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject Local Business Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sravani Netting Solutions",
    "image": "https://www.sravaninettingsolutions.com/images/balcony.webp",
    "@id": "https://www.sravaninettingsolutions.com/#localbusiness",
    "url": "https://www.sravaninettingsolutions.com",
    "telephone": "+918637607910",
    "email": "sravaninettingsolutions@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets and Grills",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balcony Safety Nets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pigeon & Bird Protection Nets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Invisible Grills"
          }
        }
      ]
    }
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Balcony Safety Nets",
      "provider": {
        "@id": "https://www.sravaninettingsolutions.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Chennai"
      },
      "description": "High-density polyethylene (HDPE) balcony safety nets installed to prevent accidental falls and block pigeons."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Invisible Grills",
      "provider": {
        "@id": "https://www.sravaninettingsolutions.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Chennai"
      },
      "description": "Marine Grade 316 Stainless Steel invisible grills offering maximum security without blocking your balcony view."
    }
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HPZMZJCT87" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HPZMZJCT87');
              gtag('config', 'AW-18291286869');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans pb-[60px] md:pb-0 overflow-x-hidden">
        
        {/* Event snippet for Contact conversion page */}
        <Script id="google-conversion" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18291286869/gdBgCIWs38wcENXG-5FE',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K6KCTMS8');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6KCTMS8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
