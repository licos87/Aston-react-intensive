import { AppRouter } from '@/app/providers/router';
import { ThemeProvider } from '@/shared/lib/theme';
import { useAppSelector } from '@/app/providers/storeProvider/hooks';
import { Spinner } from '@/shared/ui/Spiner';
import { getLoadingStatusSelector } from '@/entities/loadingStatus';

export const App = () => {
  const isLoading = useAppSelector(getLoadingStatusSelector)

  return (

      <ThemeProvider>
        <AppRouter />
        { isLoading && <Spinner/>}
      </ThemeProvider>
  )
}
