import { AppRouter } from '@/app/providers/router';
import { ThemeProvider } from '@/shared/lib/theme/ThemeProvider.tsx';
import { savePosts, setIsLoading } from '@/app/providers/StoreProvider/config/actions.ts';
import { POSTS_LIST } from '@/widgets/PostList/mock/postsList.ts';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { isLoadingSelector } from '@/app/providers/StoreProvider/config/selectors.ts';
import { Spinner } from '@/shared/ui/Spiner';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector)

  useEffect(() => {
    dispatch(setIsLoading(true))
    setTimeout(() => {
      dispatch(savePosts(POSTS_LIST));
    dispatch(setIsLoading(false))
    }, 3000);
  }, [dispatch]);

  return (

      <ThemeProvider>
        <AppRouter />
        { isLoading && <Spinner/>}
      </ThemeProvider>
  )
}
