import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Button from "../ui/Button";
import BlogHeader from "../features/blog/BlogHeader";
import { usePost } from "../features/blog/usePost";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../ui/LoadingAnimation";
function BlogPost() {
  const { id } = useParams();

  const { post, isLoading } = usePost(id);

  const [tempText, setTempText] = useState("");
  const [editing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!post?.content) return;
    setTempText(post.content);
  }, [post?.content]);

  if (isLoading) return <LoadingAnimation />;
  if (!post) return <p className="text-center">No post found..?</p>;
  
  return (
    <article>
      <BlogHeader post={post} />
      <div className="w-full max-w-4xl flex-1 rounded-md bg-slate-800 p-12">
        <Button onClick={() => setIsEditing((prev) => !prev)}>
          {editing ? "save" : "edit"}
        </Button>
        {editing ? (
          <textarea
            className="h-48 w-full"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
          />
        ) : (
          <div className="prose-slate prose prose-invert w-full">
            <Markdown>{tempText}</Markdown>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogPost;
