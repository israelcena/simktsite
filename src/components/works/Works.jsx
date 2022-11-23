import { useState } from "react";

import Item from "./item/Item";

import { AiFillMobile } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: <MdWeb />,
      title: "Web Design",
      desc: "Desenvolvemos o Seu Projeto de Site com foco em Usabilidade e UX Design.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_1000" +
        "40756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: <AiFillMobile />,
      title: "Mobile Application",
      desc: "Trabalhamos com desenvolvimento de apps mobile para plataformas iOS e Android.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: <AiFillBank />,
      title: "Branding",
      desc: "Assessoria de marketing para criação de logomarca, identidade visual da empresa e outros serviços.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <section className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <Item
              icon={d.icon}
              image={d.img}
              title={d.title}
              description={d.desc}
            />
          </div>
        ))}
      </div>
      <AiOutlineCaretLeft
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <AiOutlineCaretRight
        className="arrow right"
        onClick={() => handleClick()}
      />
    </section>
  );
}
