import React from 'react'

export default function TermekUrlap() {


    /**
     * hozzunk látre egy űrlapot, amivel új terméket tudunk hozzáadni a listához
     * 
     * description - textarea
     * ár - number
     * 
     * a kategóriákhoz legördülő menüt használj
     */


  return (
    <div>
      <h2>Termék űrlap</h2>
      <form>
        <label>
          Név:
          <input type="text" name="name" />
        </label>
        <label>
          Ár:
          <input type="number" name="price" />
        </label>
        <label>
          Leírás:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Mentés</button>
      </form>
    </div>
  )
}
