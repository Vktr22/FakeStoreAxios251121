import React, {useContext} from "react";
import { TermekContext } from "../../contexts/TermekContext";

export default function TermekSorAdmin(props) {
  const { deleteTermek } = useContext(TermekContext);
  function torles() {
    deleteTermek(props.termek);

  }

  return (
    <tr>
      <td>{props.termek.id}</td>
      <td>{props.termek.title}</td>
      <td>{props.termek.price}</td>
      <td>{props.termek.description}</td>
      <td>{props.termek.category}</td>
      <td>
        <img
          src={props.termek.image}
          alt={props.termek.title}
          style={{ width: "50px" }}
        />
      </td>
      <td>
        <button className="btn" onClick={torles}>x</button>
      </td>
    </tr>
  );
}
