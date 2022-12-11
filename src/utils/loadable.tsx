import React, { lazy, Suspense } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';

const loadable = (importFunc: () => Promise<{ default: React.ComponentType<any>; }>, { fallback = null } = { fallback: React.Component  }) => {
  const LazyComponent = lazy(importFunc);
  return (props: any) => (
    <Suspense fallback={<LoadingIndicator />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
