export default function BuildingSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Building on Trust</h2>
                        <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                            We know that working together as a community is better for everyone. Our platform enables blockchain
                            developers to build their dApps and wallets natively and connect with millions of users, without having
                            to worry about the low-level implementation details.
                        </p>
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Check out our Developer Docs
                        </button>
                    </div>

                    <div className="relative h-96 flex items-center justify-center">
                        <div className="text-white text-center">
                            <div className="text-6xl mb-4">🤖</div>
                            <p className="text-sm">Developer Illustration</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}