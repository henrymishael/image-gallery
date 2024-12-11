"use client";

import {
  // UserGroupIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [{ name: "Gallery", href: "/dashboard", icon: HomeIcon }];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "relative group flex h-[48px] grow items-center justify-center gap-2 rounded-md dark:bg-gray-800 bg-gray-100 p-3 text-sm font-medium hover:bg-emerald-100 hover:text-emerald-600 md:flex-none md:justify-start md:p-2 md:px-3 ",
              {
                "bg-white text-emerald-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
