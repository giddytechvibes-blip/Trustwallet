"use client"
import Image from "next/image";
import { useState } from "react";

export default function PerpsBannerSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="py-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
                                PERPS<br />
                                <span className="text-cyan-400">are now LIVE</span>
                            </h2>
                            <p className="text-2xl font-bold text-gray-900 mb-2">TRADE LIKE A PRO</p>
                            <p className="text-xl font-bold text-gray-900">100+ MARKETS</p>
                            <p className="text-xl font-bold text-gray-900">100X LEVERAGE</p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                <span className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center gap-2 font-semibold">
                                    <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
                                    BNB
                                </span>
                                <span className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center gap-2 font-semibold">
                                    <span className="w-6 h-6 bg-blue-400 rounded-full"></span>
                                    ARB
                                </span>
                                <span className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center gap-2 font-semibold">
                                    <span className="w-6 h-6 bg-purple-400 rounded-full"></span>
                                    ETH
                                </span>
                                <span className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center gap-2 font-semibold">
                                    <span className="w-6 h-6 bg-purple-600 rounded-full"></span>
                                    SOL
                                </span>
                            </div>
                            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold">
                                POWERED BY ASTER
                            </div>
                        </div>

                        <div className="relative h-64 lg:h-96 flex items-center justify-center">
                            <Image
                                src="/images/TrustNft.png"
                                alt="Trust Wallet NFTz"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 pb-6">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}