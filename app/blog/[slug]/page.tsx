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
    <article className="mt-4 md:mt-8">
      <h1 className="text-4xl mb-4 mt-12 md:mt-0" id="blogTitle">{post.title}</h1>
      <div className="text-gray-400 text-xl mb-8">
        {post.displayDate}
      </div>
      <MDXContent content={post.content} />
    </article>
  );
}
