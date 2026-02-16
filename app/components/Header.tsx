"use client"

import { ChevronRight, Globe, Menu, Moon, Shield, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center">
                                <Shield className="w-7 h-7 text-white" fill="currentColor" />
                            </div>
                            <span className="text-2xl font-bold text-blue-600 hidden md:block">TRUST</span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            <a href="#market" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                Market
                            </a>
                            <a href="#wallet" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                Wallet
                            </a>
                            <a href="#features" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                Features
                            </a>
                            <a href="#build" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                Build
                            </a>
                            <a href="#support" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                Support
                            </a>
                            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                                About
                            </a>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Toggle dark mode">
                                <Moon className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                                <Globe className="w-5 h-5" />
                                Language
                            </button>
                            <Link href="/restorepage" className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold inline-block">
                                Restore Wallet
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-blue-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" strokeWidth={2.5} /> : <Menu className="w-8 h-8" strokeWidth={2.5} />}
                        </button>

                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-20 lg:hidden">
                    <nav className="flex flex-col px-6 py-4">
                        <a href="#market"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100"
                        >
                            Market
                        </a>
                        <a href="#wallet"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100 flex items-center justify-between group"
                        >
                            Wallet
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                        </a>
                        <a href="#features"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100 flex items-center justify-between group"
                        >
                            Features
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                        </a>
                        <a href="#build"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100 flex items-center justify-between group"
                        >
                            Build
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                        </a>
                        <a href="#support"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100 flex items-center justify-between group"
                        >
                            Support
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                        </a>
                        <a href="#about"
                            className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100 flex items-center justify-between group">
                            About
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                        </a>
                    </nav>

                    <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 flex gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-full hover:border-blue-600 transition-colors font-medium flex-1">
                            <Moon className="w-5 h-5" />
                            Dark
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-full hover:border-blue-600 transition-colors font-medium flex-1">
                            <Globe className="w-5 h-5" />
                            Language
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

