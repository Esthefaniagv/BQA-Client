import { Fragment } from "react"
import { ItemsBox } from "./ItemsBox"

export const MenuItems = () => {
  return (
    <Fragment>
      <div className="menuItems">
        <ul className="nav nav-underline ">
          <li className="nav-item ">
            <a className="nav-link active menuNav" aria-current="page" href="#">Desayuno</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link menuNav" href="#">Almuerzo y Cena</a>
          </li>
        </ul>
        <ItemsBox />
      </div>
    </Fragment>
  )
}
