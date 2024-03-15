import React from "react";
import Firstcomp from "../components/Firstcomp";
import Navbarcomp from "../components/Navbarcomp";
import Footercomp from "../components/Footer";
import Offercard from "./Offercard";
import Offerround from "./Offerround";

function Offercomp(){
    

    return(
        <>
        <Firstcomp />
        <Navbarcomp />
        <div>
            <img src="./assets/images/offerbanner.jpg" class="w-100 h-10" />
        </div>
        <h5 class="my-3">SHOP BY CATEGORY</h5>

        <Offerround />
        <h5 class="my-2">LATEST COLLECTION</h5>
        <Offercard />



        <Footercomp />
        </>
    )
}
export default Offercomp; 