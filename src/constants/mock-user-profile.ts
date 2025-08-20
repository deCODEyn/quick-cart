export const mockUserProfile = {
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
    linkedIn: '',
    whatsApp: '12 93456-7890',
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
