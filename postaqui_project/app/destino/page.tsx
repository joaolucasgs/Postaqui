import { useRouter } from "next/router";

const Destino = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div>
      <p>Nome Completo: {query.nome}</p>
      <p>CPF: {query.cpf}</p>
      {/* ... outros campos */}
    </div>
  );
};

export default Destino;
