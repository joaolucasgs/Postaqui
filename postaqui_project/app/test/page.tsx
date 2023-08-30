'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [shipmentOptions, setShipmentOptions] = useState<any[]>([]);
  const [trackingCode, setTrackingCode] = useState<string | null>(null);

  useEffect(() => {
    const calculateShipping = async () => {
      const baseURL = 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate';
      const headers = {
        'Content-Type': 'application/json',
      };

      const requestData = {
        sender: {
          // Preencha com os detalhes do remetente
        },
        receiver: {
          // Preencha com os detalhes do destinatário
        },
        package: {
          // Preencha com os detalhes da embalagem
        },
      };

      try {
        const response = await axios.post(baseURL, requestData, { headers });
        setShipmentOptions(response.data.shipment);
      } catch (error) {
        console.error('Erro ao calcular frete:', error);
      }
    };

    calculateShipping();
  }, []);

  const trackShipment = async (carrierId: string) => {
    const trackingURL = `https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/posting?carrier=${carrierId}`;
    const trackingRequestData = {
      calculated_id: '{{ID_SHIPPING_CALCULATE}}', // Substitua pelo ID retornado na requisição anterior
    };

    try {
      const response = await axios.post(trackingURL, trackingRequestData);
      setTrackingCode(response.data.code);
    } catch (error) {
      console.error('Erro ao rastrear remessa:', error);
    }
  };

  return (
    <div>
      <h1>Exemplo de Requisição com Axios e TypeScript</h1>
      <h2>Opções de Envio:</h2>
      <ul>
        {shipmentOptions.map(option => (
          <li key={option._id}>
            Transportadora: {option.carrier}<br />
            Preço: {option.price}<br />
            <button onClick={() => trackShipment(option._id)}>Rastrear</button>
          </li>
        ))}
      </ul>
      {trackingCode && (
        <div>
          <h2>Código de Rastreio:</h2>
          <p>{trackingCode}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
