import type { Post } from "@/types";

import { getPosts } from "@/lib/mdx";
import { Layout } from "@/screens/posts";

import { notFound } from "next/navigation";

const route = "thoughts";

const Posts = getPosts(route);

export async function generateStaticParams() {
  return Posts.map((post) => ({
    slug: `${post.slug}`,
  }));
}

interface PageProps {
  params: Post;
}

export default function Page({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Layout post={post} route={route} />;
}
