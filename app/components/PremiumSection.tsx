import { Shield } from "lucide-react";

export default function PremiumSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center">
                                <Shield className="w-10 h-10 text-white" fill="currentColor" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-bold text-blue-600">JOIN</h2>
                                <p className="text-2xl font-bold"><span className="text-blue-600">trust</span> PREMIUM</p>
                            </div>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            UNLOCK EXCLUSIVE REWARDS, DISCOUNTS & ACCESS
                        </h3>

                        <p className="text-sm text-gray-600">
                            Trust Premium program and benefits are subject to change and our Terms:{' '}
                            <a href="#" className="text-blue-600 hover:underline">
                                https://trustwallet.com/terms-of-service
                            </a>
                        </p>

                        <div className="flex gap-2 mt-4">
                            <button className="w-2 h-2 rounded-full bg-blue-600"></button>
                            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
                            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
                        </div>

                        <div className="relative h-96 flex items-center justify-center">
                            <div className="text-gray-400">Premium Card Illustration</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}