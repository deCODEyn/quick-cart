import {
  Facebook,
  Instagram,
  Mail,
  Pencil,
  Phone,
  Plus,
  Twitter,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Image, Input, Title } from '@/components';

const mockUserProfile = {
  firstName: 'Fulano',
  middleName: 'Ciclano',
  lastName: 'Silva',
  fullName: 'Fulano Ciclano Silva',
  cpf: '01234567890',
  rg: '12345678',
  email: 'cicla_silva@example.com',
  phoneNumber: '12 93456-7890',
  socialMedia: {
    instagram: '@fulano_ciclano',
    facebook: '/ciclanoSilva',
    X: '',
  },
  addresses: [
    {
      _id: '123home',
      street: 'Rua das Flores',
      houseNumber: '100',
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01000-000',
      country: 'Brasil',
      type: 'Home',
    },
    {
      _id: '456work',
      street: 'Avenida Brasil',
      houseNumber: '500',
      neighborhood: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20000-000',
      country: 'Brasil',
      type: 'Work',
    },
    {
      _id: '789other',
      street: 'Avenida Tuiuti',
      houseNumber: '343',
      neighborhood: 'Centro',
      city: 'Joinvile',
      state: 'SC',
      zipCode: '00040-000',
      country: 'Brasil',
      type: 'Other',
    },
  ],
  lastOrders: [
    {
      id: 'ord1',
      items: [
        {
          name: 'Camiseta',
          image: 'https://placehold.co/80x80/6366f1/ffffff?text=C',
        },
      ],
    },
    {
      id: 'ord2',
      items: [
        {
          name: 'Calça Jeans',
          image: 'https://placehold.co/80x80/f97316/ffffff?text=J',
        },
      ],
    },
    {
      id: 'ord3',
      items: [
        {
          name: 'Tênis',
          image: 'https://placehold.co/80x80/ef4444/ffffff?text=T',
        },
      ],
    },
    {
      id: 'ord4',
      items: [
        {
          name: 'Jaqueta',
          image: 'https://placehold.co/80x80/22c55e/ffffff?text=J',
        },
      ],
    },
    {
      id: 'ord5',
      items: [
        {
          name: 'Mochila',
          image: 'https://placehold.co/80x80/eab308/ffffff?text=M',
        },
      ],
    },
  ],
};

export function UserProfile() {
  const [profileData, setProfileData] = useState(mockUserProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(mockUserProfile);

  const fetchUserProfile = useCallback(() => {
    setProfileData(mockUserProfile);
  }, []);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen border-t pt-10 font-inter">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col items-center gap-6 rounded-sm border bg-gray-100 p-4 md:flex-row md:items-start">
          <div className="flex w-full flex-shrink-0 flex-col items-center md:w-1/3">
            <div className="relative h-40 w-40 md:h-52 md:w-52">
              <Image
                alt="Placeholder"
                className="h-full w-full rounded-full"
                src="https://placehold.co/80x80/6366f1/ffffff?text=IMAGE"
              />
              <Button className="absolute right-0 bottom-0 h-6 w-12 cursor-pointer border-none bg-black text-center hover:bg-gray-700 md:h-8 md:w-16">
                <Pencil className="size-4 text-white md:size-5" />
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col items-center md:w-2/3">
            <h1 className="text-3xl md:text-left">
              <Title span="profile" title="my" />
            </h1>
            <p className="text-base text-gray-500">
              Welcome to
              <span className="mx-1 font-bold">QuickCart E-commerce!</span>
            </p>
            <p className="mt-5 text-gray-800 text-lg">{profileData.fullName}</p>
            <p className="my-2 flex items-center gap-2 text-center text-gray-600">
              <Mail size={16} /> {profileData.email}
            </p>
            <div className="mt-2 flex w-full flex-row justify-end">
              <Button className="cursor-pointer">Alterar Senha</Button>
            </div>
          </div>
        </div>
        <div className="rounded-md border bg-gray-50 p-5 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl">
              <Title span="information" title="personal " />
            </h2>
            <Button
              className="cursor-pointer border-none bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400"
              onClick={isEditing ? handleSaveClick : handleEditClick}
            >
              {isEditing ? 'Salvar' : 'Editar Perfil'}
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2 text-gray-700">
              {isEditing ? (
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">CPF: </p>
                  <Input
                    name="cpf"
                    onChange={handleChange}
                    placeholder="Número do CPF"
                    type="text"
                    value={editedData.cpf}
                  />
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">CPF: </p>
                  <p>{profileData.phoneNumber || 'Não informado'}</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              {isEditing ? (
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">RG: </p>
                  <Input
                    name="rg"
                    onChange={handleChange}
                    placeholder="Número do RG"
                    type="text"
                    value={editedData.rg}
                  />
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">RG: </p>
                  <p>{profileData.phoneNumber || 'Não informado'}</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="size-4" />
              {isEditing ? (
                <Input
                  name="phoneNumber"
                  onChange={handleChange}
                  placeholder="Número de Telefone"
                  type="text"
                  value={editedData.phoneNumber}
                />
              ) : (
                <p>{profileData.phoneNumber || 'Não informado'}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Instagram className="size-4" />
              {isEditing ? (
                <Input
                  name="instagram"
                  onChange={handleChange}
                  placeholder="Instagram"
                  type="text"
                  value={editedData.socialMedia.instagram}
                />
              ) : (
                <p>{profileData.socialMedia?.instagram || 'Não informado'}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Facebook className="size-4" />
              {isEditing ? (
                <Input
                  name="facebook"
                  onChange={handleChange}
                  placeholder="Facebook"
                  type="text"
                  value={editedData.socialMedia.facebook}
                />
              ) : (
                <p>{profileData.socialMedia?.facebook || 'Não informado'}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Twitter className="size-4" />
              {isEditing ? (
                <Input
                  name="X"
                  onChange={handleChange}
                  placeholder="X"
                  type="text"
                  value={editedData.socialMedia.X}
                />
              ) : (
                <p>{profileData.socialMedia?.X || 'Não informado'}</p>
              )}
            </div>
          </div>
          <div className="mt-12">
            <h3 className="my-5 text-lg md:text-xl">
              <Title span="addresses" title="registered" />
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {profileData.addresses.map((addr) => (
                <div
                  className="rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm"
                  key={addr._id}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-lg">{addr.type}</span>
                    <Button
                      className="cursor-pointer"
                      size="icon"
                      variant="ghost"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-gray-600">
                    {addr.street}, {addr.houseNumber}
                  </p>
                  <p className="text-gray-600">
                    {addr.neighborhood}, {addr.city} - {addr.state}
                  </p>
                  <p className="text-gray-600">{addr.zipCode}</p>
                  <p className="text-right text-gray-600">{addr.country}</p>
                </div>
              ))}
            </div>
            <Button className="mt-6 flex cursor-pointer items-center gap-2 justify-self-center">
              <Plus className="size-4" /> Add Address
            </Button>
          </div>
        </div>
        <div className="rounded-md border bg-gray-100 p-5 shadow-md">
          <h2 className="mb-6 font-semibold text-2xl text-gray-800">
            <Title span="orders" title="latest" />
          </h2>
          <div className="grid grid-cols-2 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {profileData.lastOrders.map((order) => (
              <div className="flex flex-col items-center" key={order.id}>
                <div className="h-20 w-20 overflow-hidden rounded-lg border border-gray-300">
                  <Image
                    alt={order.items[0].name}
                    className="h-full w-full object-cover"
                    src={order.items[0].image}
                  />
                </div>
                <span className="mt-2 text-center text-gray-700 text-sm">
                  Pedido #{order.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
