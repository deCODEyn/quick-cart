import { Loader } from 'lucide-react';
import type { LoadingDataType } from '@/types';

export function LoadingData({ data }: LoadingDataType) {
  return (
    <div className="border-t">
      <div className="flex h-[50vh] flex-col items-center justify-center font-semibold text-2xl text-gray-500">
        <Loader className="animate-spin" />
        Loading {data}...
      </div>
    </div>
  );
}
