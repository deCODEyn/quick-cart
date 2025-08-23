import { useState } from 'react';
import { Button, Input } from '@/components';
import { useToast } from '@/hooks';

export function NewsletterBox() {
  const [email, setEmail] = useState('');
  const { showSuccessToast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //lógica de fazer a subscrição
    showSuccessToast('Congratulations, you have been successfully subscribed!');
    setEmail('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum quia
        impedit sequi iste consequuntur earum.
      </p>
      <form
        className="mx-auto my-8 flex w-full items-center gap-1 rounded pl-3 sm:w-1/2"
        onSubmit={handleSubmit}
      >
        <Input
          className="h-10 w-full border bg-transparent outline-none focus:bg-transparent focus-visible:ring-0"
          name="newsletter-email"
          onChange={handleChange}
          placeholder="Enter your e-mail"
          required
          type="email"
          value={email}
        />
        <Button
          className="h-10 cursor-pointer rounded bg-black px-10 py-4 text-white text-xs uppercase hover:bg-gray-700 active:bg-gray-500"
          type="submit"
        >
          subscribe
        </Button>
      </form>
    </div>
  );
}
