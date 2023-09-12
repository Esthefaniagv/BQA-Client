import { Fragment } from 'react';
import { ClientOrder } from './ClientOrder';
import { MenuItems } from './MenuItems';

export const WaiterHome = () => {

    return (
        <Fragment>
            <div>
            <h2>"Bienvenid@!</h2>

            <ClientOrder/>
            <MenuItems/>
            </div>
        </Fragment>

    )
}
