export type UserProps = {
  fullName: string;
  email: string;
  sex: 'fameles' | 'males';
  cpf: string;
  cel: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
  },
}