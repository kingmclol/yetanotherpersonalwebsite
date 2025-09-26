import BlogList from "../features/blog/BlogList";
import PageTitle from "../ui/PageTitle";

function Blog() {
  return (
    <>
      <PageTitle title="Blog" subtitle="Collection of text." />
      <BlogList />
    </>
  );
}

export default Blog;
