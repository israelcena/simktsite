import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "./testimonials.scss";
import Card from "./card/Card";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Israel Cena",
      title: "Senior Developer",
      img: "https://pbs.twimg.com/profile_images/1335683030007111682/l9D6BDzO_400x400.jpg",
      icon: <AiFillTwitterCircle style={{ color: `#00acee` }} />,
      desc: "Desenvolvedor desde 2007 Formado em Marketing e Sistemas de Informação Ajuda em projetos Open Source e em Ongs.",
    },
    {
      id: 2,
      name: "Sara Nunes",
      title: "Co-Founder",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: <AiFillYoutube style={{ color: `#FF0000` }} />,
      desc: "Formada em administração de empresas administra e executa ações de marketing intenas e externas.",
      featured: true,
    },
    {
      id: 3,
      name: "Dilton Neves",
      title: "Especialista em Marketing",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: <AiFillLinkedin style={{ color: `#0e76a8` }} />,
      desc: "Focado em satisfação do cliente e campanhas de marketing.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Equipe</h2>
      <div className="container" onDrag={()=>{console.log('hei')}}>
        {data ?
          data.map(({ id, desc, featured, icon, img, name, title }) => (
            <Card
              key={id}
              desc={desc}
              featured={featured}
              icon={icon}
              id={id}
              img={img}
              name={name}
              title={title}
            />
          )): null}
      </div>
    </section>
  );
}
