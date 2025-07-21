
export function debounce<T extends (...args: string[]) => void>(
  func: T,
  delay: number
): {
  (...args: Parameters<T>): void;
  cancel: () => void;
} {
  let timeoutId: NodeJS.Timeout | null = null;

  const debouncedFunction = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debouncedFunction;
}
