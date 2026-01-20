import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>marked</h1>
        <p>Here is a collection of different things I want to remember. Some of these might be interesting for you.</p>
            <ul className="gap-4">
                <div className="pt-2 md:pt-8"></div>
                <li>
                    <Link 
                        id="connectLinks"
                        href="https://github.com/kaineug"
                        className="block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        Software I use
                    </Link>
                </li>
                <li>
                    <Link 
                        id="connectLinks"
                        href="https://bsky.app/profile/kaineug.de"
                        className="mt-2 block text-center row-span-2 hover:text-rose-400 border-1 border-solid text-3xl md:text-4xl p-1"
                    >
                        Social Media
                    </Link>
                </li>
            </ul>
      </div>
  );
}
