import IntroImage from '@/Components/IntroImage'
import React from 'react'
import Image from 'next/image'

const intro = () => {
  return (
    <>
      <IntroImage imageUrl={"/lotusFeet.jpg"} overlayHeading={"JAI SHRI MATAJI 🙏🏻🪷"} overlayContent={"We welcome our brothers and sisters from all corners of the world to celebrate 101st Birth Anniversary of our most beloved mother 💖"}/>
      <div className='flex flex-col items-center justify-center bg-white'>
        <div className='flex flex-col items-center justify-center bg-white w-2/3'>
          <span className='text-slate-400 text-md font-bold pb-3'>H. H. SHRI MATAJI NIRMALA DEVI SAHAJA YOGA TRUST, INDIA</span>
          <span className='text-4xl font-bold pb-3 text-center'>INTERNATIONAL BIRTHDAY PUJA & SEMINAR - 2024</span>
          <span className='text-xl pb-10'>19th - 21st March, 2024 | Chhindwara, M.P, India</span>
        </div>
        <Image src={'/ma.jpg'} width={500} height={500} alt='Shri mataji Photograph'/>
        <div className='pt-5 flex flex-col items-center'>
          <span className='text-3xl font-bold pb-5 text-center'>Message for World Collectivity</span>
          <span className='text-lg pb-10 text-center w-2/3 whitespace-normal'>“It is nice that you are celebrating my birthday with such enthusiasm, and so much happiness. So nice to see all this, and I want you all to be my decorations! In the whole world they should see that you are my children and that you are of such great values and such great understanding. You are my children. I have really worked for you, in the sense that every moment of my life, I have thought of you: I wanted to work it out in such a beautiful manner that you become really good people, ideal people, special people, with understanding. So, that is the day you should feel that your birthday is being celebrated. When you have completely cleared out, you have become nirmal, absolutely pure personality of love – that’s the day is your birthday, and mine too.”</span>
          <span className='text-2xl font-bold pb-5 text-center'>H. H. Shri Mataji Nirmala Devi</span>
          
        </div>
      </div>
    </>
  )
}

export default intro
