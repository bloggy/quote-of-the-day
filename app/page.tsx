'use client'
import { useState } from 'react'

const quotes = [
  "Der Weg ist das Ziel. - Konfuzius",
  "Denke nicht so oft an das, was dir fehlt, sondern an das, was du hast. - Marc Aurel",
  "Das Leben ist wie Fahrradfahren. Um die Balance zu halten, musst du in Bewegung bleiben. - Albert Einstein",
  "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren. - Bertolt Brecht",
  "Der beste Weg, die Zukunft vorauszusagen, ist, sie zu gestalten. - Willy Brandt"
]

export default function Home() {
  const [quote, setQuote] = useState<string>("")

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Zitat des Tages</h1>
      
      <button 
        onClick={getRandomQuote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Neues Zitat
      </button>

      {quote && (
        <div className="max-w-md text-center p-4 bg-gray-100 rounded-lg">
          <p className="text-xl italic">{quote}</p>
        </div>
      )}
    </main>
  )
}