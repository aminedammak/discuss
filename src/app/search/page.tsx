import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";
import React from "react";

interface SearchProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchPosts={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
