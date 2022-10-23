import "./list.scss"

export default function List({title, active, setSelected, id}) {
  return (
    <li className={active ? "list active" : "list"} onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}
