import React, {useContext} from "react";
import { TermekContext } from "../../contexts/TermekContext";

export default function TermekSorAdmin(props) {
  const { deleteTermek } = useContext(TermekContext); //2. itt hozom létre a contextből a deleteTermek függvényt
  function torles() {
    deleteTermek(props.termek); //3. itt hívom meg a deleteTermek függvényt, és adom át neki a props.termek-et---itt haszn

  }

  return (
    <tr>
      <td>{props.termek.id}</td>
      <td>{props.termek.title}</td>   {/*itt 1. itt kapja meg amit akarsz --- az előző csak a váza volt, itt meg, h miket akarsz bele*/}
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
