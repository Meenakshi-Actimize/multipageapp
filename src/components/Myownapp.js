import React from "react";
import Navbarcomp from "./Navbarcomp";
import Firstcomp from "./Firstcomp";
import Carouselcomp from "./Carouselcomp";
import Cardcomp from "./Cardcomp";
import Bannercomp from "./Bannercomp";
import Blogcomp from "./Blogcomp";
import Footercomp from "./Footer";

function Myownapp(){
    return(

        <>
        <Firstcomp />
        <Navbarcomp />
        <Carouselcomp />
        <h5 class="text-secondary my-3" style={{fontFamily:'sans-serif'}}>NEW ARRIVALS</h5>
        <Cardcomp />
        <h5 class="text-secondary my-3" style={{fontFamily:'sans-serif'}}>FEATURED</h5>
        <Bannercomp />
        <h5 class="text-secondary my-3" style={{fontFamily:'sans-serif'}}>OUR BLOG</h5>
        <Blogcomp />
        <Footercomp />

        </>
    )
}

export default Myownapp;