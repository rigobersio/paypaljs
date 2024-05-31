import React, { useState } from 'react';
import PaypalButton from './components/paypalButton/PaypalButton';

function App() {
  const [totalValue, setTotalValue] = useState(null);
  const [invoice, setInvoice] = useState('');

  const handleSelectService = (value, invoice) => {
    setTotalValue(value);
    setInvoice(invoice);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
        <h2>Servicios</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Consulta Pediátrica</h3>
          <p>1 USD</p>
          <button onClick={() => handleSelectService('1', 'consulta pediátrica')}>Seleccionar</button>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Consulta Cardióloga</h3>
          <p>2 USD</p>
          <button onClick={() => handleSelectService('2', 'cardiólogo')}>Seleccionar</button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '10px', textAlign: 'center' }}>
        <h2>Pago</h2>
        {totalValue && (
          <div>
            <PaypalButton totalValue={totalValue} invoice={invoice} SameSite="none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
