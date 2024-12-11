import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col  items-center justify-center h-screen bg-background'>
      <h1 className='text-[36px] font-bold text-center md:text-left text-primary'>
        Welcome to <span className='text-emerald-600'>Imagit</span>
      </h1>
      <p className=''>Your personalized image editor</p>
      <Link href='/dashboard'>
        <button
          type='button'
          className='flex items-center justify-between relative text-[18px] mt-6 dark:text-primary text-secondary w-[150px]  px-4 py-2 rounded-3xl bg-emerald-600'
        >
          Get Started
          <span className='absolute right-2'>
            <ArrowRightCircle />
          </span>
        </button>
      </Link>
    </div>
  );
}
