import { Star } from "lucide-react";

export default function TrustStatsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="text-center">
                        <div className="text-gray-800 text-lg mb-2">Trusted by</div>
                        <div className="text-4xl lg:text-5xl font-bold text-blue-600">200M</div>
                        <div className="text-gray-800 text-lg mt-2">people</div>
                    </div>

                    <div className="text-center">
                        <div className="text-gray-800 text-lg mb-2">Founded in</div>
                        <div className="text-4xl lg:text-5xl font-bold text-blue-600">2017</div>
                    </div>

                    <div className="text-center col-span-2 lg:col-span-1">
                        <div className="text-gray-800 text-lg mb-2">Independently</div>
                        <div className="text-4xl lg:text-5xl font-bold text-blue-600">Audited</div>
                    </div>

                    <div className="text-center">
                        <div className="text-gray-800 text-lg mb-2">ISO</div>
                        <div className="text-4xl lg:text-5xl font-bold text-blue-600">Certified</div>
                    </div>

                    <div className="text-center col-span-2 lg:col-span-1">
                        <div className="text-gray-800 text-lg mb-2">Top reviews</div>
                        <div className="flex justify-center gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-8 h-8 fill-blue-600 text-blue-600" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}