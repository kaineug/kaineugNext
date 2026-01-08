import { MDXRemote } from 'next-mdx-remote/rsc';

export default function MDXContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} />
    </div>
  );
}
