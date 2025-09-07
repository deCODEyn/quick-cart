import { useCallback, useEffect, useState } from 'react';
import { deliveryFee } from '@/constants';
import { useShopContext } from '@/context';
import { useAddressData, useOrdersData } from '@/hooks';
import type { AddressType } from '@/schemas';
import type { CreateOrderType } from '@/types';
import { transformCartItems } from '@/utils/transform-cart-items';

export function usePlaceOrder() {
  const [method, setMethod] = useState<string | null>(null);
  const [addresses, setAddresses] = useState<AddressType[] | undefined>();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const { listAddresses } = useAddressData();
  const { cartItems, clearCart } = useShopContext();
  const { createOrder } = useOrdersData();
  const isPlaceOrderDisabled = !(selectedAddressId && method);

  const fetchAddresses = useCallback(async () => {
    const { result } = await listAddresses();
    setAddresses(result);
  }, [listAddresses]);

  const handleSelectAddress = useCallback((addressId: string) => {
    setSelectedAddressId(addressId);
  }, []);

  const handlePlaceOrder = useCallback(async (): Promise<{
    success: boolean;
    message: string | undefined;
  }> => {
    const items = transformCartItems(cartItems);
    const orderPayload: CreateOrderType = {
      addressId: selectedAddressId || '',
      items,
      deliveryFee,
      paymentMethod: method || '',
    };
    const { success, message } = await createOrder(orderPayload);
    if (success) {
      clearCart();
    }
    return { success, message };
  }, [selectedAddressId, method, cartItems, createOrder, clearCart]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return {
    addresses,
    selectedAddressId,
    setSelectedAddressId,
    method,
    setMethod,
    isPlaceOrderDisabled,
    handleSelectAddress,
    handlePlaceOrder,
  };
}
