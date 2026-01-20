import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div>
            <h1>blog</h1>
            <p className="pb-1">from time to time i will publish posts about topics that interest me.</p>
            <p className="pb-1">the topics will vary, though there will be likely a focus on tech. i'll try to cover other topics like music, games or general life stuff. if i feel icky about a certain topic i might publish a post that involves politics.</p>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block p-6 border hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-2xl font-semibolt">
                            {post.title}
                        </h2>

                        <ul className="flex text-xl text-gray-400">
                            <li className="truncate grow">{post.displayDate}</li>
                            <li className="flex-none">{post.tags}</li>
                        </ul>

                    </Link>
                ))}
            </div>
        </div>
  );
}
