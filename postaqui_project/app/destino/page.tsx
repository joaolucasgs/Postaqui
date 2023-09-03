'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Container } from "@mui/material";

const Destino = () => {
  const router = useRouter();
  const { query } = useSearchParams();

  return (
    <div className="flex min-h-screen items-start justify-start p-3 bg-[#FFCD40] flex-col">
      <div className="flex  flex-col  p-3 bg-[#eab308] drop-shadow-2xl rounded-md">
        <h2 className="text-4xl font-bold mb-2">Dados do Remetente:</h2>
        <p>Nome Completo: {query.get(`nome`)}</p>
        <p>CPF: {query.get(`cpf`)}</p>
        {/* ... Resto das informações ... */}
      </div>
    </div>
  );
};

export default Destino;
