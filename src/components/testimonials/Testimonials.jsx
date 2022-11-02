import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "./testimonials.scss";
import Card from "./card/Card";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: <AiFillTwitterCircle style={{ color: `#00acee` }} />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: <AiFillYoutube style={{ color: `#FF0000` }} />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: <AiFillLinkedin style={{ color: `#0e76a8` }} />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Depoimentos</h2>
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
