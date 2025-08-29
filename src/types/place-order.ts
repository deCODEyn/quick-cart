export interface InputFormInterface {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'number' | 'tel';
  value: string;
}

export interface PaymentMethodButtonInterface {
  onClick: (method: string) => void;
  currentMethod: string;
  label?: string;
  logoSrc?: string;
  method: 'stripe' | 'razorpay' | 'cod';
}
