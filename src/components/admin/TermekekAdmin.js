import React , {useContext}from 'react'
import TermekSorAdmin from './TermekSorAdmin'
import { TermekContext } from '../../contexts/TermekContext'

export default function TermekekAdmin() {
    const {termekLista}=useContext(TermekContext)
  return (
    <div className= "table-responsive">
        <table className= "table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Név</th>
                    <th>Ár</th>
                    <th>Leírás</th>
                    <th>Kategória</th>
                    <th>Kép</th>
                </tr>
            </thead>
            <tbody>
                {termekLista?termekLista.map( (termek)=>{
                    return <TermekSorAdmin termek={termek} key={termek.id} />
                }

                ):"Nincs adaat"}
              
            </tbody>
        </table>
    </div>
  )
}
