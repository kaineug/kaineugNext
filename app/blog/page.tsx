import BlogpostPreview from "../Components/articlePreview";
import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div>
            <h1>blog</h1>
            <p className="pb-1">this is my little blog. i will from time to time publish posts about topics that interest me on this page.</p>
            <p className="pb-1">the topic will vary, though there will be likely a focus on tech. i'll try to cover other topics like music, general life stuff, or maybe if i feel icky about a certain topic that involves politics, than i might share my thoughts about that as well.</p>

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
