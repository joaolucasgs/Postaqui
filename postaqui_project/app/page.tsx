"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import Link from "next/link";
import Destino from "./destino/page"; // Importe o componente Destino
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvancar = () => {
    const queryParams = new URLSearchParams(formData);
    router.push(`/destino?${queryParams.toString()}`);
    console.log(queryParams.toString());
  };
  return (
    <div className="flex min-h-screen items-center p-3 bg-[#FFCD40] flex-col">
      <Image src="/Postaqui.png" height={300} width={300} alt="Postaqui" />

      <div className="flex min-h-screen items-center p-3">
        <Container className="flex min-h-screen flex-col items-center p-3 bg-[#eab308] drop-shadow-2xl rounded-md">
          <h2 className="text-4xl font-bold mb-2 ">Dados de Origem:</h2>
          <form className="flex flex-col">
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="nome"
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleInputChange}
            />

            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="numero"
              placeholder="Numero"
              value={formData.numero}
              onChange={handleInputChange}
            />
            <input
              className="rounded-md p-2 mb-2"
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={formData.complemento}
              onChange={handleInputChange}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-sm"
              onClick={handleAvancar} // Use a função handleAvancar
            >
              Avançar
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
}
