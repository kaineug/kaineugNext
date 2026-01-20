import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    displayDate: string;
    tags: string;
    excerpt: string;
}

export interface Post extends PostMetadata {
    content: string;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-EU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    // Output: "Month 31, 2099"
}

export function getAllPosts(): PostMetadata[] {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Parse the frontmatter
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                displayDate: formatDate(data.date),
                tags: data.tags,
                excerpt: data.excerpt,
            };
        });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// export function getPostsBySlug(slug: string): Post | null {
//     try {
//         const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
//         const fullPath = path.join(postsDirectory, `${slug}.mxd`);
//         const fileContents= fs.readFileSync(fullPath, 'utf8');
//
//         const { data, content } = matter(fileContents);
//
//         return {
//             slug,
//             title: data.title,
//             date: data.date,
//             excerpt: data.excerpt,
//             content,
//         };
//     } catch (error) {
//         return null;
//     }
// }

export function getPostBySlug(slug: string): Post | null {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      displayDate: formatDate(data.date),
      tags: data.tags,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    return null;
  }
}
