import BlogCard from "../features/blog/BlogCard";
import BlogPost from "./BlogPost";
import { usePosts } from "../features/blog/usePosts";
import LoadingAnimation from "../ui/LoadingAnimation";
import PageTitle from "../ui/PageTitle";
import BlogList from "../features/blog/BlogList";

function Blog() {
  return (
    <>
      <PageTitle title="Blog" subtitle="Collection of text." />
      <BlogList />
    </>
  );
}

export default Blog;
