import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../lib/posts';
import MDXContent from '../components/MDXContent';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params here
  const post = getPostBySlug(slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params here
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {post.date} • {post.author}
      </div>
      <MDXContent content={post.content} />
    </article>
  );
}
