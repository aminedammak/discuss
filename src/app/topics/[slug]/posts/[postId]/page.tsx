import PostShow from '@/components/posts/post-show';
import Link from 'next/link';
import paths from '@/paths';
import CommentList from '@/components/comments/comment-list';
import CommentCreateForm from '@/components/comments/comment-create-form';
import { fetchCommentsByPostId } from '@/db/queries/comments';

export default function PostShowPage({ params }) {
  const { slug, postId } = params;
  return (
    <div>
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
