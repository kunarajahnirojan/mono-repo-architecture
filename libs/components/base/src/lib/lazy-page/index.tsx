import React from 'react';
import { Loading } from '@mono-repo-architecture/components/base';

interface Props {
  page: any;
}
export function Lazy({ page }: Props) {
  const Component = React.useMemo(() => {
    return React.lazy(() => {
      return new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        resolve({ default: page });
      });
    });
  }, []);

  return (
    <React.Suspense fallback={<Loading />}>
      <Component />
    </React.Suspense>
  );
}
