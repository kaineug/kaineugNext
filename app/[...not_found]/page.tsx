import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  notFound()
}

// import { notFound } from 'next/navigation';
// import { getAllPosts, getPostBySlug } from '../blog/lib/posts';
// import MDXContent from '../blog/components/MDXContent';
//
// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
//
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
//
//   if (!post) return {};
//
//   return {
//     title: post.title,
//     description: post.excerpt,
//   };
// }
//
// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
//
//   if (!post) {
//     notFound();
//   }
//
//   return (
//     <article className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//       <div className="text-gray-600 mb-8">
//         {post.date}
//       </div>
//       <MDXContent content={post.content} />
//     </article>
//   );
// }
