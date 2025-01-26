'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="md:container md:mx-auto flex justify-between py-5 px-10">
        <div className="py-2 flex gap-16">
          <Link href="#" className="text-xl text-primary font-impala">ROAP</Link>
          <nav className="hidden md:flex gap-7">
            <Link href="#forathlets">For Everyone</Link>
            <Link href="#forbuissness">For Business</Link>
          </nav>
        </div>
        <Link href="https://academy.roap.co/sign-up" className="text-secondary py-2 px-7 bg-primary rounded-full hidden md:block">
          Join as a Sport Academy/Club
        </Link>
        <button onClick={() => setIsMenuOpen(true)} className="text-primary py-2 px-7 bg-[#E0E4D9] rounded-full md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed md:hidden inset-0 z-10 bg-[#E0E4D9]">
            <div className="flex justify-between py-5 px-10 items-center">
              <Link href="#" className="py-2 text-xl text-primary font-impala">ROAP</Link>
              <span className="text-black font-monument text-xl">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-primary py-2 pr-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-center px-10">
              <Link href="#forathlets" onClick={() => setIsMenuOpen(false)}>For Everyone</Link>
              <Link href="#forbuissness" onClick={() => setIsMenuOpen(false)}>For Business</Link>
              <Link href="#" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="https://academy.roap.co/sign-up" onClick={() => setIsMenuOpen(false)} className="text-secondary py-2 px-7 bg-primary rounded-full">
                Join as a Sport Academy/Club
              </Link>
            </nav>
            <div className="flex flex-col my-10 gap-5 text-center">
              <span className="font-monument font-extrabold">Contact Us</span>
              <a href="mailto:info@roap.co">info@roap.co</a>
              <div className="sm flex gap-3 justify-center">
                <SocialLinks />
              </div>
              <div className="flex flex-col gap-5">
                <span className="font-monument font-extrabold">Download the App</span>
                <div className="flex gap-3 justify-center px-10">
                  <Link href='https://apps.apple.com/us/app/roap-sports/id6569262163' target='_blank'>
                    <Image src="/images/appstore.png" alt="App Store" width={170} height={60} />
                  </Link>
                  <Link href='https://play.google.com/store/apps/details?id=com.roap.appNew' target='_blank'>
                    <Image src="/images/playstore.png" alt="Play Store" width={170} height={60} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero px-7 md:container md:mx-auto mt-10">
          <div className="rounded-3xl relative py-16 px-8 space-y-5 bg-hero bg-cover bg-opacity-50 z-0 bg-bottom md:px-12">
            <div className="rounded-3xl absolute inset-0 bg-gradient-to-tr from-secondary from-50% to-secondary/50 z-0 md:from-10%" />
            <h1 className="relative font-monument text-2xl text-primary font-extrabold z-10 md:w-1/2 md:text-5xl">
              Your Athletic Search Engine
            </h1>
            <p className="relative font-inter font-medium text-xl text-primary z-10 md:w-1/2">
              Elevate your athletic journey with our wide-ranging Academy options and Sports
            </p>
            <div className="relative flex w-full gap-3 z-10 md:w-1/4">
              <Link href='https://apps.apple.com/us/app/roap-sports/id6569262163' target='_blank'>
                <Image src="/images/appstore.png" alt="App Store" width={170} height={60} />
              </Link>
              <Link href='https://play.google.com/store/apps/details?id=com.roap.appNew' target='_blank'>
                <Image src="/images/playstore.png" alt="Play Store" width={170} height={60} />
              </Link>
            </div>
          </div>
        </section>

        <section id="forathlets" className="px-7 md:container md:mx-auto mt-10">
          <h1 className="text-center text-xl font-monument font-extrabold px-5 text-primary mb-10 md:text-4xl">
            Discover and Enroll in the Sports Academies with just Few Taps
          </h1>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="card bg-secondary rounded-3xl px-7 pt-7 text-center space-y-3 md:flex-1">
              <h2 className="text-primary font-monument font-extrabold text-xl">
                1 <br />
                Explore
              </h2>
              <p className="font-inter font-medium px-4 min-h-20">
                Tap into a world of sports - the details to book the best.
              </p>
              <Image src="/images/step1.png" alt="Step 1" width={400} height={400} className='!w-full h-auto' />
            </div>
            <div className="card bg-secondary rounded-3xl px-7 pt-7 text-center space-y-3 md:flex-1">
              <h2 className="text-primary font-monument font-extrabold text-xl">
                2 <br />
                Book
              </h2>
              <p className="font-inter font-medium px-4 min-h-20">
                Athletes can view and book the perfect training from list of top clubs around your location.
              </p>
              <Image src="/images/step2.png" alt="Step 2" width={400} height={400} className='!w-full h-auto' />
            </div>
            <div className="card bg-secondary rounded-3xl px-7 pt-7 text-center space-y-3 md:flex-1">
              <h2 className="text-primary font-monument font-extrabold text-xl">
                3 <br />
                Pay
              </h2>
              <p className="font-inter font-medium px-4 min-h-20">
                ROAP provides a secure payment gateway for a hassle-free booking process with financial solutions.
              </p>
              <Image src="/images/step3.png" alt="Step 3" width={400} height={400} className='!w-full h-auto' />
            </div>
          </div>
        </section>

        <section className="px-7 md:container md:mx-auto mt-10">
          <div className="download bg-secondary rounded-3xl px-7 pt-7 gap-5 flex flex-col md:flex-row md:bg md:pt-0">
            <div className="flex flex-col gap-5 flex-1 md:gap-0 md:justify-between md:py-10">
              <h2 className="text-primary font-monument font-extrabold text-center text-2xl md:text-left">
                Download <span className="font-impala font-normal">ROAP</span>
              </h2>
              <p className="font-inter font-medium text-left">
                Elevate your game, transform your journey.
              </p>
              <div className="flex w-3/4 gap-3 md:w-1/2">
                <Link href='https://apps.apple.com/us/app/roap-sports/id6569262163' target='_blank'>
                  <Image src="/images/appstore.png" alt="App Store" width={170} height={60} />
                </Link>
                <Link href='https://play.google.com/store/apps/details?id=com.roap.appNew' target='_blank'>
                  <Image src="/images/playstore.png" alt="Play Store" width={170} height={60} />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden pt-10 md:pt-0 flex-1 z-0">
              <div className="hidden md:block absolute -top-1/2 inset-x-0 bg-primary w-full aspect-square rounded-[50%] -translate-y-1/2 -z-10"></div>
              <div className="relative">
                <Image src="/images/iPhone21.png" alt="iPhone Screenshot 1" width={300} height={600} className="md:w-1/2 md:relative md:left-1/4" />
                <Image src="/images/iPhone20.png" alt="iPhone Screenshot 2" width={300} height={600} className="absolute top-0 md:w-1/2 md:left-1/3" />
              </div>
            </div>
          </div>
        </section>

        <section id="forbuissness" className="px-7 md:container md:mx-auto mt-10">
          <h1 className="text-xl font-monument font-extrabold text-primary mb-10 md:text-center md:px-5 md:text-4xl">
            <span className="font-impala font-normal">ROAP</span>
            <span className="text-secondary font-impala font-normal">MGT</span> Grow and Manage your Sports Academy Smoothly and Easily
          </h1>
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-20">
              <div className="md:w-1/2 md:px-20 flex justify-center">
                <Image src="/images/dashboard.png" alt="Dashboard" width={545} height={330} className="self-center" />
              </div>
              <div className="flex flex-col gap-5 md:w-1/2 md:justify-between md:py-32">
                <h2 className="font-monument font-extrabold text-primary text-xl md:text-4xl">Dashboard</h2>
                <p className="font-inter font-medium md:pr-20">
                  ROAPMGT automates sports academy management - instantly book space with advanced tech, no human intervention, seamless experience for athletes and academies.
                </p>
                <Link href="#" className="bg-primary py-2 px-7 font-inter font-medium rounded-3xl text-secondary self-start">
                  Add your Academy
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20">
              <div className="md:w-1/2 md:px-20 flex justify-center">
                <Image src="/images/bookings.png" alt="Bookings" width={545} height={330} className="self-center" />
              </div>
              <div className="flex flex-col gap-5 md:w-1/2 md:justify-between md:py-32">
                <h2 className="font-monument font-extrabold text-primary text-xl md:text-4xl">Manage your bookings</h2>
                <p className="font-inter font-medium md:pr-20">
                  ROAPMGT advanced all-in-one platform streamlines sports academy management - effortless bookings, total automation, delivering a seamless experience for athletes and academies.
                </p>
                <Link href="#" className="bg-primary py-2 px-7 font-inter font-medium rounded-3xl text-secondary self-start">
                  Add your Academy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-7 md:container md:mx-auto mt-10">
          <div className="download bg-secondary rounded-3xl px-7 pt-7 gap-5 flex flex-col md:flex-row md:bg md:pt-0">
            <div className="flex flex-col gap-5 flex-1 md:gap-0 md:justify-between md:py-10">
              <h2 className="text-primary font-monument font-extrabold text-center text-2xl md:text-left">
                Download <span className="font-impala font-normal">ROAP</span>
              </h2>
              <p className="font-inter font-medium text-left">
                Discover.Book.Transform.
              </p>
              <div className="flex w-3/4 gap-3 md:w-1/2">
                <Link href='https://apps.apple.com/us/app/roap-sports/id6569262163' target='_blank'>
                  <Image src="/images/appstore.png" alt="App Store" width={170} height={60} />
                </Link>
                <Link href='https://play.google.com/store/apps/details?id=com.roap.appNew' target='_blank'>
                  <Image src="/images/playstore.png" alt="Play Store" width={170} height={60} />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden pt-10 md:pt-0 flex-1 z-0">
              <div className="hidden md:block absolute -top-1/2 inset-x-0 bg-primary w-full aspect-square rounded-[50%] -translate-y-1/2 -z-10"></div>
              <div className="relative">
                <Image src="/images/iPhone21.png" alt="iPhone Screenshot 1" width={300} height={600} className="md:w-1/2 md:relative md:left-1/4" />
                <Image src="/images/iPhone20.png" alt="iPhone Screenshot 2" width={300} height={600} className="absolute top-0 md:w-1/2 md:left-1/3" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white">
        <div className="px-7 md:container md:mx-auto mt-10 py-14 flex flex-col md:flex-row gap-10 md:gap-48">
          <div className="flex flex-col gap-5">
            <h3 className="font-impala font-medium">ROAP</h3>
            <p className="font-inter font-medium lg:min-w-[530px]">
              Elevate your athletic journey with our wide-ranging Academy options and Sports
            </p>
            <div className="relative flex w-3/4 gap-3 z-10">
              <Link href='https://apps.apple.com/us/app/roap-sports/id6569262163' target='_blank'>
                <Image src="/images/appstore.png" alt="App Store" width={190} height={64} />
              </Link>
              <Link href='https://play.google.com/store/apps/details?id=com.roap.appNew' target='_blank'>
                <Image src="/images/playstore.png" alt="Play Store" width={190} height={64} />
              </Link>
            </div>
          </div>
          <div className="flex w-full">
            <nav className="nav flex-1 flex flex-col gap-5">
              <h3 className="font-monument font-extrabold">Company</h3>
              <ul className="font-inter font-medium space-y-2">
                <li><Link href="#forathlets">For Everyone</Link></li>
                <li><Link href="#forbuissness">For Business</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </nav>
            <nav className="nav flex-1 flex flex-col gap-5">
              <h3 className="font-monument font-extrabold">Contact us</h3>
              <a href="mailto:info@roap.co" className="font-inter font-medium">info@roap.co</a>
              <div className="sm flex gap-3">
                <SocialLinks light />
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

// components/SocialLinks.js
function SocialLinks({ light = false }) {
  const fillColor = light ? "fill-white" : "fill-black"

  return (
    <>
      <a href="https://www.facebook.com/profile.php?id=61567371271863">
        <svg className={`size-6 ${fillColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a href="https://www.instagram.com/roap.co/">
        <svg className={`size-6 ${fillColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/roap-app/about/?viewAsMember=true">
        <svg className={`size-6 ${fillColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </a>
    </>
  );
}