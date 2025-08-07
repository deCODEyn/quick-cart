import type { ContactInfoCardType } from '@/types';

export function ContactInfoCard({
  title,
  address,
  phone,
  email,
}: ContactInfoCardType) {
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <h3 className="font-semibold text-gray-600 text-xl">{title}</h3>
      <p className="text-gray-500">
        {address.map((line, index) => (
          <span key={`${line}-${index.toString()}`}>
            {line}
            {index < address.length - 1 && <br />}
          </span>
        ))}
      </p>
      <p className="text-gray-500">
        Phone: {phone} <br /> Email: {email}
      </p>
    </div>
  );
}
