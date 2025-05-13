import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronRight, Mail, Phone } from "lucide-react"
import { RegisterButton } from "./components/RegisterButton"
import { CountdownTimer } from "./components/CountdownTimer"
import { FAQItem } from "./components/FAQItem"

// Add this constant at the top of the file, after imports
const galleryImages = [
  '/gallery/about-bg.jpg',
  '/gallery/eth2.jpg',
  '/gallery/imageB.jpeg',
  '/gallery/ethN.jpg'
];

const speakers = [
  {
    name: 'John Doe',
    image: '/gallery/speakers.jpg',
    position: 'CEO, Tech Company',
  },
  {
    name: 'Jane Smith',
    image: '/gallery/speakers.jpg',
    position: 'CTO, Tech Company',
  },
  {
    name: 'John Doe',
    image: '/gallery/speakers.jpg',
    position: 'CEO, Tech Company',
  },
  {
    name: 'Jane Smith',
    image: '/gallery/speakers.jpg',
    position: 'CTO, Tech Company',
  }]
  
// Update the sponsors constant to use the speakers.png placeholder
const sponsors = [
  {
    name: 'Ethereum Foundation',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Polygon',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Chainlink',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Filecoin',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Arbitrum',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Optimism',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Avalanche',
    logo: '/gallery/speakers.jpg',
  },
  {
    name: 'Solana',
    logo: '/gallery/speakers.jpg',
  }
];

// Add this constant at the top with other constants
const faqs = [
  {
    question: "What is ETHNILE?",
    answer: "ETHNILE is an in-person Web3 conference and hackathon hosted at the source of the River Nile in Jinja, Uganda. It brings together developers, educators, and innovators to explore decentralized solutions for real-world challenges."
  },
  {
    question: "When and where is ETHNILE 2025?",
    answer: "ETHNILE 2025 will take place from July 24-27, 2025, in Jinja, Uganda, at the source of the River Nile."
  },
  {
    question: "Who should attend ETHNILE?",
    answer: "ETHNILE is designed for blockchain developers, entrepreneurs, investors, students, and anyone interested in Web3 technology and its potential impact on Africa's future."
  },
  {
    question: "What can I expect at ETHNILE?",
    answer: "Attendees can expect intensive bootcamps, pop-up pitch days, guided campus and city tours, networking opportunities, and the chance to collaborate on innovative blockchain solutions."
  },
  {
    question: "How can I participate in the hackathon?",
    answer: "Registration for the hackathon will open closer to the event. Participants can form teams and work on projects that address real-world challenges using blockchain technology."
  },
  {
    question: "Are there any travel arrangements or accommodations?",
    answer: "While we don't provide direct travel arrangements, we'll share recommended accommodations and travel tips for international and local attendees closer to the event."
  }
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative bg-black text-white h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src="https://v3.cdnpk.net/videvo_files/video/free/2012-11/large_preview/MVI_1482.mp4?token=exp=1746023397~acl=/*~hmac=39f318479c196b10dc10ffd1450ab16a3ec4a49d8346d64c06b8a43f2ad784fa" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 w-32 sm:w-40">
              <Image src="/gallery/changed.png" alt="ETHNILE Logo" width={160} height={160} className="w-full" />
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-[#4ECDC4]">ETHNILE</span>
              <span className="block">Crypto Conference 2025</span>
            </h1>
            <p className="mb-8 text-xl">Join the largest blockchain and cryptocurrency event in East Africa</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                <span>July 24-27, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-[#FFD700]" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
            <CountdownTimer />

            <div className="">
              <RegisterButton />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 lg:py-24" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About ETHNILE</h2>
            <div className="mt-2 h-1 w-20 bg-[#4ECDC4] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              EthNile is an in-person Web3 conference and hackathon hosted at the source of the River Nile, featuring pop-up pitch days, intensive bootcamps, and guided campus and city tours.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Decentralising Sub-Saharan Africa</h3>
              <p className="text-gray-600">
                EthNile 2025 unites developers, educators, and innovators to explore decentralised solutions for real-world challenges. Through workshops, mentorship, and hybrid hackathon experiences, we empower the next generation of African blockchain builders.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Code of the Continent</h3>
              <p className="text-gray-600">
                Can Africa fully embrace decentralization? How will regulation shape or support this future? What role will tokenization play in real-world use cases? Join the builders, thinkers, and pioneers leading this conversation.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Global Collaboration</h3>
              <p className="text-gray-600">
                Hosted in Jinja, Uganda, at the source of the Nile, we foster global collaboration through intensive bootcamps, pitch days, and guided tours, creating a unique environment for innovation and networking.
              </p>
            </div>
          </div>
          
        </div>
      </section>

 {/* Gallery Section */}
 <section className="bg-white py-16 lg:py-24" id="gallery">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Gallery</h2>
            <div className="mt-2 h-1 w-20 bg-[#4ECDC4] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">Highlights from previous ETHNILE events</p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`ETHNILE event gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Speakers Section */}
      <section className="bg-gray-50 py-16 lg:py-24" id="speakers">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Speakers</h2>
            <div className="mt-2 h-1 w-20 bg-[#4ECDC4] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              Learn from the brightest minds and industry leaders in blockchain and cryptocurrency
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={speaker.image}
                    alt={`Speaker ${speaker.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.position}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Expert in blockchain technology with over 10 years of experience in the industry.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-50 py-16 lg:py-24" id="sponsors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Sponsors</h2>
            <div className="mt-2 h-1 w-20 bg-[#4ECDC4] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              Proudly supported by leading blockchain organizations
            </p>
          </div>

          <div className="mt-16 relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24" id="faq">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-2 h-1 w-20 bg-[#4ECDC4] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              Find answers to common questions about ETHNILE 2025
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{' '}
              <a href="mailto:info@ethnile.com" className="text-[#4ECDC4] hover:text-[#3DBDB4]">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="w-24">
                <Image src="/ethnile-logo.png" alt="ETHNILE Logo" width={96} height={96} className="w-full" />
              </div>
              <p className="mt-4 max-w-xs text-gray-400">
                East Africa's premier cryptocurrency and blockchain technology event.
              </p>
              <div className="mt-6 flex space-x-4">
                {/* Social media icons would go here */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="text-gray-400 hover:text-white">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-400 hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Kampala, Uganda</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@ethnile.com" className="text-gray-400 hover:text-white">
                    info@ethnile.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                  <a href="tel:+256123456789" className="text-gray-400 hover:text-white">
                    +256 123 456 789
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ETHNILE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
