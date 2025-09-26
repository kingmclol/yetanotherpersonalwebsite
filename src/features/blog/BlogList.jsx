import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import LoadingAnimation from "../../ui/LoadingAnimation";
import Section from "../../ui/Section";
import { fadeInFromLeft, noAnimation } from "../../utils/animationVariants";
import BlogCard from "./BlogCard";
import { usePosts } from "./usePosts";
import BlogCardEmpty from "./BlogCardEmpty";

function BlogList() {
  const navigate = useNavigate();
  const { posts, isLoading } = usePosts();
  return (
    <div className="flex min-w-xl items-center justify-center">
      {isLoading ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : posts.length === 0 ? (
        <Section
          key="nodata"
          layout
          variants={fadeInFromLeft}
          className="flex w-xl flex-col items-center justify-center gap-8"
        >
          <img
            src="/amber_upset.webp"
            alt="oh no sticker"
            className="mx-auto h-32 w-32"
          />
          <h1 className="text-center text-xl font-bold tracking-wide">
            I couldn't find any posts data??? RIP my Supabase???
          </h1>
        </Section>
      ) : (
        <Section
          key={posts.map((p) => `${p.id}:${p.updated_at}`).join(",")}
          variants={noAnimation}
          className="flex flex-col gap-4"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          <BlogCardEmpty/>
        </Section>
      )}
    </div>
  );
}

export default BlogList;
