import { Check, Search, X } from "lucide-react";

export default function MultiChainSection() {
    const chains = [
        { name: 'BNB Smart Chain (BNB)', icon: '🟡', buy: true, sell: true, swap: true, earn: true, dapps: true },
        { name: 'Solana (SOL)', icon: '🟣', buy: true, sell: true, swap: true, earn: true, dapps: false },
        { name: 'Sui (SUI)', icon: '🔵', buy: true, sell: true, swap: false, earn: true, dapps: false },
        { name: 'Ethereum (ETH)', icon: '⬥', buy: true, sell: true, swap: true, earn: true, dapps: true },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-400">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        One Platform, Millions of Assets
                    </h2>
                    <p className="text-lg lg:text-xl text-white max-w-4xl mx-auto">
                        As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains.
                        From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 lg:p-8">
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search a chain..."
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Chain</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Buy</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Sell</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Swap</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Earn</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">dApps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chains.map((chain, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{chain.icon}</span>
                                                <span className="font-medium text-gray-900">{chain.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {chain.buy ? (
                                                <Check className="w-6 h-6 text-blue-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {chain.sell ? (
                                                <Check className="w-6 h-6 text-blue-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {chain.swap ? (
                                                <Check className="w-6 h-6 text-blue-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {chain.earn ? (
                                                <Check className="w-6 h-6 text-blue-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {chain.dapps ? (
                                                <Check className="w-6 h-6 text-blue-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}