import { Monitor, Smartphone } from "lucide-react";
import Header from "./components/Header";
import TrustStatsSection from "./components/TrustStatsSection";
import PerpsBannerSection from "./components/PerpsBannerSection";
import PremiumSection from "./components/PremiumSection"
import MultiChainSection from "./components/MultiChainSection";
import BuildingSection from "./components/BuildingSection";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                True crypto ownership. Powerful Web3 experiences
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
              </p>

              {/* CTA Buttons - Mobile (single button) */}
              <div className="lg:hidden">
                <Link href="/restorepage" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-colors duration-200">
                  Restore Wallet
                </Link>
              </div>

              {/* CTA Buttons - Desktop (two buttons) */}
              <div className="hidden lg:flex gap-4">
                <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-lg group">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <Link href="/restorepage" className="text-left">
                    <div>Restore Wallet</div>
                  </Link>

                </button>
                <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-lg group">
                  <Monitor className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500 group-hover:text-blue-600">Download</div>
                    <div>Extension</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Phone mockups with decorative elements */}
                <div className="relative w-full max-w-2xl mx-auto">
                  {/* Main illustration placeholder */}
                  <div className="aspect-square relative">
                    {/* We should replace with hero image  */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <Image
                          src="/images/image.avif"
                          alt="Trust Wallet Hero"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                    {/* Decorative gradient blobs */}
                    <div className="absolute top-1/4 -right-12 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-1/4 -left-12 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-15 blur-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TrustStatsSection />
        <PerpsBannerSection />
        <PremiumSection />
        <MultiChainSection />
        <BuildingSection />
      </main>
      <Footer />
    </div>
  );
}
