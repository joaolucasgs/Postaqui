'use client'
import React from "react";
import { useRouter } from "next/router";

const Destino = () => {
  const router = useRouter();
  const queryParams = router.query; // Obtém os query parameters da rota

  return (
    <div className="flex min-h-screen items-start justify-start p-3 bg-[#FFCD40] flex-col">
      <div className="flex  flex-col  p-3 bg-[#eab308] drop-shadow-2xl rounded-md">
        <h2 className="text-4xl font-bold mb-2">Dados do Remetente:</h2>
        <p>Nome Completo: {queryParams.nome}</p>
        <p>CPF: {queryParams.cpf}</p>
        {/* ... Resto das informações ... */}
      </div>
    </div>
  );
};

export default Destino;
