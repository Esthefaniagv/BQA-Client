import { ClientOrder } from "./ClientOrder"
import { MenuItems } from "./MenuItems"


export const DivMenuItems = () => {

    return (
        <>
            <div className="DivMenuItems">
                <ClientOrder />
                <MenuItems />
            </div>

        </>
    )
}

export default DivMenuItems;