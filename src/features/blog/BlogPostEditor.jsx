import { useForm } from "react-hook-form";
import DangerZoneEditing from "../../ui/DangerZoneEditing";
import Divider from "../../ui/Divider";
import { format } from "date-fns";
import {
  HiChatBubbleLeftEllipsis,
  HiLockClosed,
  HiLockOpen,
} from "react-icons/hi2";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAddPost } from "./useAddPost";
import { useUpdatePost } from "./useUpdatePost";
import { useUser } from "../auth/useUser";
import Button from "../../ui/Button";

function BlogPostEditor({ post }) {
  const id = post?.id || null; // null if creating new post
  const formFields = {
    title: post?.title || "",
    subtitle: post?.subtitle || "",
    content: post?.content || "",
  };
  const published = post?.published || false;
  const [willPublish, setWillPublish] = useState(false);

  const [locked, setLocked] = useState(post?.locked || false);
  const datePosted = post?.published_at || null;
  const dateUpdated = post?.updated_at || null;

  const { handleSubmit, register } = useForm({
    defaultValues: formFields,
  });

  const { addPost, isAdding } = useAddPost();
  const { updatePost, isUpdating } = useUpdatePost();

  const isWorking = isAdding || isUpdating;

  const { isAuthenticated } = useUser();

  function onSubmit(formData) {
    if (!isAuthenticated) return;

    const updatedPost = {
      ...formData,
      locked,
      published,
    };

    if (!published && willPublish) {
      // Post published.
      updatedPost.published_at = new Date().toISOString();
      updatedPost.published = true;
    }

    if (id === null) {
      // new post.
      addPost(updatedPost);
    } else {
      updatePost({ id, updatedPost });
    }
  }
  function onError(errors) {
    Object.values(errors).forEach((err) => {
      if (err.message) toast.error(err.message);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* Eat the enter key triggering topmost button */}
      <button disabled className="hidden" aria-hidden="true"></button>

      <Divider noAnimate spacing="small" />
      <div className="mx-auto flex w-4/5 flex-col items-stretch gap-4">
        <textarea
          type="text"
          id="title"
          placeholder="Post Title"
          onKeyDown={(e) => {
            // No new lines please
            if (e.code === "Enter") e.preventDefault();
          }}
          className="mx-auto min-h-8 w-full rounded-xl bg-slate-600 p-1 text-center text-3xl font-bold tracking-wide"
          {...register("title", { required: "A title is required." })}
          disabled={isWorking}
        />
        <textarea
          type="text"
          id="subtitle"
          placeholder="Post subtitle"
          onKeyDown={(e) => {
            // No new lines please
            if (e.code === "Enter") e.preventDefault();
          }}
          className="mx-auto w-full rounded-xl bg-slate-600 p-1 text-center text-lg font-bold tracking-wide italic"
          {...register("subtitle")}
          disabled={isWorking}
        />

        <div className="flex justify-between gap-12 px-4 text-slate-400">
          <div>
            <p>
              Posted:{" "}
              {datePosted
                ? format(new Date(datePosted), "yyyy-MM-dd hh:mm")
                : "Never"}
            </p>
            <p>
              Updated:{" "}
              {dateUpdated
                ? format(new Date(dateUpdated), "yyyy-MM-dd hh:mm")
                : "Never"}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-2">
              <HiChatBubbleLeftEllipsis /> 0
            </div>
            <button
              type="button"
              onClick={() => setLocked((prev) => !prev)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-500 px-1 py-0.5 uppercase transition-colors hover:border-slate-400 hover:text-slate-300"
            >
              {locked ? (
                <>
                  <HiLockClosed />
                  Locked
                </>
              ) : (
                <>
                  <HiLockOpen />
                  Unlocked
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <Divider noAnimate spacing="small" />
      <div className="prose-slate prose prose-invert min-h-96 w-full max-w-4xl flex-1 rounded-md bg-slate-800 p-8">
        <textarea
          id="content"
          className="min-h-[80vh] w-full rounded-md bg-slate-700 p-4"
          {...register("content", {
            required: "Would you prefer if this message contained no content?",
          })}
        />
      </div>
      {!published && (
        <>
          <Divider noAnimate />
          <div className="space-y-4 text-center">
            <p className="text-xl">
              This post is currently{" "}
              <strong className="text-red-500">not published</strong>.
            </p>
            <Button
              type="button"
              onClick={() => setWillPublish((prev) => !prev)}
            >
              {!willPublish
                ? "(Publish) Mark as ready"
                : "(Draft) Mark as not ready"}
            </Button>
            {willPublish ? (
              <p>
                You have marked this post as{" "}
                <strong className="text-green-400">ready to publish</strong>.
                <br />
                This post will be published on save.
              </p>
            ) : (
              <p>This post will be saved as a draft.</p>
            )}
          </div>
        </>
      )}
      <Divider noAnimate />
      <DangerZoneEditing
        handleSubmit={handleSubmit}
        onError={onError}
        isWorking={isWorking}
      />
    </form>
  );
}

export default BlogPostEditor;
