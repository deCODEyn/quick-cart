import type { DisplayPriceType } from '@/types';
import { currency } from '@/utils/constants';

export function DisplayPrice({ price }: DisplayPriceType) {
  return (
    <>
      {currency}
      {price.toFixed(2)}
    </>
  );
}
