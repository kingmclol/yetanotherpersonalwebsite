import { useState } from "react";
import { useParams } from "react-router-dom";
import BlogPostEditor from "../features/blog/BlogPostEditor";
import BlogPostViewer from "../features/blog/BlogPostViewer";
import { usePost } from "../features/blog/usePost";
import LoadingAnimation from "../ui/LoadingAnimation";
function BlogPost() {
  const { id } = useParams();

  const { post, isLoading } = usePost(id);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) return <LoadingAnimation />;

  if (!post)
    return (
      <p className="text-center">
        No post found... If you're just playing around, thanks for the interest.
        But come on. These are incremental numeric ids.
      </p>
    );

  return (
    <>
      <article>
        {isEditing ? (
          <BlogPostEditor post={post} />
        ) : (
          <BlogPostViewer
            post={post}
            onStartEditing={() => setIsEditing(true)}
          />
        )}
      </article>
    </>
  );
}

export default BlogPost;
