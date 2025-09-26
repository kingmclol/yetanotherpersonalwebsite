import Markdown from "react-markdown";
import BlogHeader from "./BlogHeader";
import Divider from "../../ui/Divider";
import DangerZone from "../../pages/DangerZone";
import { useDeletePost } from "./useDeletePost";
import Section from "../../ui/Section";
import { fadeInFromBottom } from "../../utils/animationVariants";

function BlogPostViewer({ post, onStartEditing }) {
  const { isDeleting, deletePost } = useDeletePost();
  return (
    <>
      <BlogHeader post={post} />
      <div className="prose-slate prose prose-invert min-h-96 w-full max-w-4xl flex-1 rounded-md bg-slate-800 p-12">
        <Markdown>{post.content}</Markdown>
      </div>
      <Divider />
      {!post.published && (
        <>
          <Section
            variants={fadeInFromBottom}
            className="space-y-4 text-center"
          >
            <p className="text-xl">
              This post is currently{" "}
              <strong className="text-red-500">not published</strong>.
            </p>
          </Section>
          <Divider />
        </>
      )}

      <DangerZone
        resourceId={post.id}
        useDeleteResource={useDeletePost}
        onStartEditing={onStartEditing}
        resourceType="post"
        isDeleting={isDeleting}
        deleteResource={deletePost}
      />
    </>
  );
}

export default BlogPostViewer;
