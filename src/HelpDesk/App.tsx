import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    console.log({
      nome: name,
      email: email,
      descricao: description,
    });
  };

  return (
    <div className="container">
      <h1>Help Desk - OdontoPrime</h1>
      <p>
        Entre em contato conosco: <strong>Suporte.OdontoPrime@gmail.com</strong>
      </p>

      {!sent ? (
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Descrição do problema:</label>
          <textarea
            placeholder="Descreva seu problema"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className="mensagem">
          <h2>✅ Mensagem enviada!</h2>
          <p>
            Obrigado, {name}! Recebemos seu chamado e entraremos em contato em breve pelo e-mail: <strong>{email}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
