import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function restorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Connect to Server
            </h1>
          </div>
          <div className="space-y-6">
            {/* 12 Mnemonic Link */}
            <Link
              href="/restorepage/12"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-center"
            >
              12 Mnemonic
            </Link>
            {/* 24 Mnemonic Link */}
            <Link
              href="/restorepage/24"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-center"
            >
              24 Mnemonic
            </Link>
          </div>
        </div>
    </div>
  )
}