import Link from "next/link";
import NavLinks from "./navlinks";
import { ModeToggle } from "./mode-toggle";

export default function SideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='mb-2 flex h-20 items-center justify-center rounded-md bg-emerald-600 p-4 md:h-40'>
        <Link href={"/"} className='w-32 text-white md:w-40'>
          Imagit
        </Link>
      </div>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <div className='hidden h-auto w-full grow rounded-md dark:bg-gray-800 bg-gray-100 md:block'>
          <NavLinks />
        </div>
        <div className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md dark:bg-gray-800 bg-gray-100 p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3'>
          <ModeToggle />
          <div className='hidden md:block'>Toggle</div>
        </div>
      </div>
    </div>
  );
}
