import { Fragment } from 'react';
import { ClientOrder } from './ClientOrder';
import { MenuItems } from './MenuItems';
import { Footer } from './Footer';

export const WaiterHome = () => {

    return (
        <Fragment>
            <div>
            <h2>"Bienvenid@!</h2>

            <ClientOrder/>
            <MenuItems/>
            <Footer/>
            

            </div>
        </Fragment>

    )
}
