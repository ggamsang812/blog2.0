import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import PostList from "./postlist";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      <PostList allPosts={allBlogs} />
    </div>
  );
}
