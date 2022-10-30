import { useState } from "react";
import contactImage from "../../images/contactPhoto/contact.jpg"
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contactImage} alt="Contato"/>
      </div>
      <div className="right">
        <h2>Contato</h2>
        <h4>Quer alavancar seus resultados assim como nossos clientes?</h4>
        <p>Nosso telefone / whatsapp: 22 98765-2121</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Qual é o seu nome ?"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E seu principal Email?"
            required
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Telefone c/ddd (pref c/ Whatsapp)?"
            required
          />
          <textarea
            rows="5"
            placeholder="Faça um pequeno resumo do que você precisa."
            required
          ></textarea>
          <button type="submit">Enviar</button>
          {message && (
            <span>
              Obrigado pelo contato!
              <br />
              Em breve retonaremos.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
