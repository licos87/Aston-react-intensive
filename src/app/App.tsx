import { PostList } from '@/widgets/PostList';
import { MainLayout } from '@/shared/layouts';
import { withLoading } from '@/shared/lib/hoc/withLoading.tsx';
import { fetchPosts } from '@/widgets/PostList/api/fetchPosts.ts';

export const App = () => {
  const PostListWithLoading = withLoading(PostList);

  return (
    <MainLayout>
      <PostListWithLoading fetchData={fetchPosts} />
    </MainLayout>
  )
}
