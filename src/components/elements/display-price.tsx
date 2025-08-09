import { currency } from '@/constants';
import type { DisplayPriceType } from '@/types';

export function DisplayPrice({ price }: DisplayPriceType) {
  return (
    <>
      {currency}
      {price.toFixed(2)}
    </>
  );
}
