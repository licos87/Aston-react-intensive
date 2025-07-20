import type { Middleware, UnknownAction, Dispatch } from '@reduxjs/toolkit';
import { setIsLoading } from '@/entities/loadingStatus';

export const loadingMiddleware: Middleware<object, Dispatch<UnknownAction>> =
  (store) => {
  let pendingRequests = 0;

  return (next) =>
    (action: UnknownAction) => {

        const isPending = action.type.includes('pending');
        const isFulfilled = action.type.includes('fulfilled');
        const isRejected = action.type.includes('rejected');

        if (isPending) {
          pendingRequests++;
          store.dispatch(setIsLoading(true));
        }

        if (isFulfilled || isRejected) {
          pendingRequests = Math.max(0, pendingRequests - 1);

          if (pendingRequests === 0) store.dispatch(setIsLoading(false));
        }
      return next(action);
  };
};
