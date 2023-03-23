import React from 'react';

import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";
import HeaderCatalog from "./Header/HeaderCatalog";

const LayoutCatalog = () => {
    return (
        <div>
            <>
                <HeaderCatalog/>
                <Outlet/>
                <Footer/>
            </>
        </div>
    );
};

export default LayoutCatalog;