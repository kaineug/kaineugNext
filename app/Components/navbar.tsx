'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-blue-400 text-3xl md:text-5xl/24" : "text-blue-300 text-3xl md:text-5xl/24 hover:text-rose-400";
    };

    return (
        <nav className="navbar pt-2 md:pt-10">
            <ul className="flex gap-2 md:gap-6">
                <li className="truncate grow">
                    <Link href={"/"} className={pathname === "/" ? "text-slate-400 text-4xl md:text-7xl/24" : "text-slate-600 text-4xl md:text-7xl/24 hover:text-rose-400"}>
                        kai neugebauer
                    </Link>
                </li>
                <li className="flex-none">
                    <Link href="/projects" className={isActive("/projects")}>
                        projekte 
                    </Link>
                </li>
                <li className="flex-none">
                    <Link href="/marked" className={isActive("/marked")}>
                        marked
                    </Link>
                </li>
                <li className="flex-none">
                    <Link href="/blog" className={isActive("/blog")}>
                        blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
