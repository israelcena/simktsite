import { useState } from "react";
import contactImage from "../../images/contactPhoto/contact.jpg";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="left">
        <img src={contactImage} alt="Contato" />
      </div>
      <div className="right">
        <h2>Contato</h2>
        <h4>Quer alavancar seus resultados assim como nossos clientes?</h4>
        <p>Nosso telefone / whatsapp: 22 98765-2121</p>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="name_of_my_form" />
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
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Enviar</button>
          {message ? (
            <span>
              Obrigado pelo contato!
              <br />
              Em breve retonaremos.
            </span>
          ) : null}
        </form>
      </div>
    </section>
  );
}
