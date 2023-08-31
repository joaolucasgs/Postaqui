'use client'
import React from "react";
import { useFormDataStore } from "../store";

const Destino = () => {
  const formDataStore = useFormDataStore();
  const { formData } = formDataStore;

  return (
    <div className="flex min-h-screen items-start justify-start p-3 bg-[#FFCD40] flex-col">
      <div className="flex  flex-col  p-3 bg-[#eab308] drop-shadow-2xl rounded-md">
        <h2 className="text-4xl font-bold mb-2">Dados do Remetente:</h2>
        <p>Nome Completo: {formData.nome}</p>
        <p>CPF: {formData.cpf}</p>
        <p>Telefone: {formData.telefone}</p>
        <p>E-mail: {formData.email}</p>
        <p>CEP: {formData.cep}</p>
        <p>Estado: {formData.estado}</p>
        <p>Cidade: {formData.cidade}</p>
        <p>Bairro: {formData.bairro}</p>
        <p>Rua: {formData.rua}</p>
        <p>Número: {formData.numero}</p>
        <p>Complemento: {formData.complemento}</p>
      </div>
    </div>

    
  );
};

export default Destino;
