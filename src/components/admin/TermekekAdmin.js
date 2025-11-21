import React , {useContext}from 'react'
import TermekSorAdmin from './TermekSorAdmin'
import { TermekContext } from '../../contexts/TermekContext'

export default function TermekekAdmin() {
    const {termekLista}=useContext(TermekContext)//0. itt hozom létre a contextből a terméklistát
  return (
    <div className= "table-responsive">
        <table className= "table table-striped">
            <thead>
                <tr>
                    <th>id</th>     {/*itt felép, h mit akarsz*/}
                    <th>Név</th>
                    <th>Ár</th>
                    <th>Leírás</th>
                    <th>Kategória</th>
                    <th>Kép</th>
                </tr>
            </thead>
            <tbody>
                {termekLista?termekLista.map( (termek)=>{
                    return <TermekSorAdmin termek={termek} key={termek.id} />{/**2. itt adod át a termék sornak a paraméterét */}
                }

                ):"Nincs adaat"}
              
            </tbody>
        </table>
    </div>
  )
}
