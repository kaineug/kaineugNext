import BlogpostPreview from "../Components/articlePreview";
import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div>
            <h1>blog</h1>
            <p>Atkinson lorem ipsum lorem ipsum ipsum yeah yeah ipsum lorem</p>
            <p>sdjh</p>
            <p>hd</p>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block p-6 border hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            {post.title}
                        </h2>

                        <div className="text-sm text-gray-600 mb-3">
                            <span>{post.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
  );
}
