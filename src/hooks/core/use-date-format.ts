import { useMemo } from 'react';

export function useDateFormat(timestamp: string): string {
  const formattedDate = useMemo(() => {
    if (!timestamp) {
      return '';
    }
    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
      return 'Date format error';
    }

    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  }, [timestamp]);
  return formattedDate;
}
