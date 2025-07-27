export function NewsletterBox() {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum quia
        impedit sequi iste consequuntur earum dolor soluta.
      </p>
      <form
        className="mx-auto my-8 flex w-full items-center gap-3 border pl-3 sm:w-1/2"
        onSubmit={onSubmitHandler}
      >
        <input
          className="w-full outline-none sm:flex-1"
          placeholder="Enter your e-mail..."
          type="email"
        />
        <button
          className="bg-black px-10 py-4 text-white text-xs"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
