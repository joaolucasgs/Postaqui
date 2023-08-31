import { create } from 'zustand';

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}

type FormStore = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

export const useFormDataStore = create<FormStore>((set) => ({
  formData: {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
  },
  
  setFormData: (data) => {
    console.log('Dados do formulário atualizados:', data);  // Adicione esta linha
    set({ formData: {...data} });
  }
}));
