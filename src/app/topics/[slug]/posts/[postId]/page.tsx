import PostShow from '@/components/posts/post-show';

export default function page({ params }) {
  const { postId } = params;
  return (
    <div>
      <PostShow postId={postId} />
    </div>
  );
}
