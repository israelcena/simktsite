import { useState, useEffect } from "react";
import Item from "./item/Item"
import List from './list/List';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

import "./portfolio.scss"

export default function Portfolio() {

  const [selected ,setSelected] = useState("webApp");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "branding",
      title: "Branding"
    },
    {
      id: "redesSociais",
      title: "Redes Sociais"
    },
    {
      id: "webApp",
      title: "Web App"
    },
    {
      id: "mobileApp",
      title: "Mobile App"
    },
    {
      id: "parcerias",
      title: "Parcerias"
    },
  ];

  useEffect(()=>{
    switch (selected) {
      case "branding":
        setData(contentPortfolio)
        break;
      case "redesSociais":
        setData(designPortfolio)
        break;
      case "webApp":
        setData(webPortfolio)
        break;  
      case "mobileApp":
        setData(mobilePortfolio)
        break;    
      case "parcerias":
        setData(featuredPortfolio)
        break;
      default:setData([])
        break;
    }
  },[selected])

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portifólio</h2>
      <ul>
        {list.map(item => (
            <List 
            key={item.id} 
            title={item.title} 
            active={selected === item.id}
            id={item.id} 
            setSelected={setSelected}
            />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <Item 
          key={d.id}
          image={d.img}
          title={d.title} 
          />
        ))}
      </div>  
    </section>
  )
}
