import { Skeleton } from '@nextui-org/react';
import React from 'react';

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="rounded border p-4 space-y-2">
        <Skeleton className="h-6 w-48" />
      </div>
    </div>
  );
}
