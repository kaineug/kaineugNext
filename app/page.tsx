import Link from "next/link";

export default function Home() {
    return (
        <>
            <div>
                <h1>hallo!</h1>
                <p id="connectLinks" className=" text-2xl md:text-4xl">I'm from Germany and I like computers. On this site I'll share blogs or things I'm interested in right now, hopefully somewhat frequently.</p>
            </div>
            <ul className="gap-4">
                <div className="pt-2 md:pt-8"></div>
                <li>
                    <Link 
                        id="connectLinks"
                        target="_blank"
                        href="https://github.com/kaineug"
                        className="block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        github
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        target="_blank"
                        href="https://bsky.app/profile/kaineug.de"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        bsky
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        target="_blank"
                        href="https://undefined.social/@kaineug"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        mastodon
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        target="_blank"
                        href="https://github.com/kaineug"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        twitter
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        target="_blank"
                        href="https://www.instagram.com/kai.neug"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        insta
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        href="mailto:kaineug@tuta.io"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        mail (kaineug@tuta.io)
                    </Link>
                </li>
            </ul>
        </>
  );
}
