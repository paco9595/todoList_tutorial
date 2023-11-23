import TrashIcon from "../assets/icons/trash.svg";
import CheckInput from "./checkInput";
import "./../styles/item.css";
export default function ItemList({ task, deleteHandler, checkedTaskHandler }) {
  const { title, id, checked } = task;
  return (
    <li className="item">
      <CheckInput
        isChecked={checked}
        onCheckHandler={() => checkedTaskHandler(id)}
      />
      <div className="checkContainer"></div>
      <div className="title">{title}</div>
      <div>
        <img src={TrashIcon} alt="" onClick={() => deleteHandler(id)} />
      </div>
    </li>
  );
}
