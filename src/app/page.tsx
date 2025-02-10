'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [result, setResult] = useState<string>('')
  const [isFlipping, setIsFlipping] = useState(false)

  const flipCoin = () => {
    if (isFlipping) return
    
    setIsFlipping(true)
    setResult('')
      
    setTimeout(() => {
      // Using crypto for true randomization
      const randomNumber = crypto.getRandomValues(new Uint8Array(1))[0]
      const flip = randomNumber % 2 === 0 ? 'HEADS' : 'TAILS'
      setResult(flip)
      setIsFlipping(false)
    }, 1000)
  }

  const getCoinImage = () => {
    if (!result) return '/images/heads.svg'
    return result === 'HEADS' ? '/images/heads.svg' : '/images/tail.svg'
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#31363F]">
      <h1 className="text-4xl text-white font-bold">Coin Flip</h1>
      <p className="text-lg text-gray-300 ">Click the coin to flip!</p>
      
      <div 
        onClick={flipCoin}
        className={`mb-8 transition-all duration-1000 transform perspective-1000 ${
          isFlipping ? 'animate-[flip_1s_ease-in-out]' : ''
        } cursor-pointer hover:scale-105`}
      >
        <Image 
          src={getCoinImage()}
          alt={result || 'coin'}
          width={200}
          height={200}
          priority
          className="rounded-full shadow-lg"
        />
      </div>
      
      <div className="text-2xl text-white font-semibold mb-4">
        {result && ` ${result} maga!`}
      </div>
    </div>
  )
}
