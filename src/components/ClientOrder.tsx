import { Fragment } from "react"
import { ItemsBoxResume } from "./ItemsBoxResume"

export const ClientOrder = ({clientName}) => {
  return (
    <Fragment>
    <div className="clientOrder">ClientOrder
    <p>{clientName}</p>
    <ItemsBoxResume/>
    </div>
    </Fragment>
  )
}
