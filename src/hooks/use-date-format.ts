import { useMemo } from 'react';

export function useDateFormat(timestamp: number): string {
  const formattedDate = useMemo(() => {
    if (!timestamp) {
      return '';
    }
    const date = new Date(timestamp);

    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  }, [timestamp]);
  return formattedDate;
}
