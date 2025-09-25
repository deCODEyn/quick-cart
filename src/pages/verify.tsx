import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LoadingData } from '@/components';
import { useShopContext } from '@/context';
import { useOrdersData, useToast } from '@/hooks';

export function Verify() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { resetCart } = useShopContext();
  const { verifyStripePayment } = useOrdersData();
  const { showErrorToast, showSuccessToast } = useToast();

  const verifyPayment = async () => {
    if (!orderId) {
      showErrorToast('Order not found.');
      navigate('/place-order');
      return;
    }
    const { success } = await verifyStripePayment(orderId, status === 'true');
    if (success) {
      showSuccessToast('Order created successfully.');
      resetCart();
      navigate('/orders');
    } else {
      showErrorToast('Payment not processed.');
      navigate('/place-order');
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Check only once.
  useEffect(() => {
    verifyPayment();
  }, []);

  return <LoadingData data="payment" />;
}
