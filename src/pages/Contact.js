import React from "react";
import Firstcomp from "../components/Firstcomp";
import Navbarcomp from "../components/Navbarcomp";
import Footercomp from "../components/Footer";

function Contact(){
    return(
        <>
        <Firstcomp />
        <Navbarcomp />
        <div>
            <img src={"./assets/images/Gift1.jpg"} alt="" class="w-100 h-5" />

        </div>
            <div class="container my-3">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-start">Lets <span class="text-warning">Chat</span></h5>
                    <p class="text-start text-secondary">Lets explore our new collection with sending a message. 
                    <span class="text-start"><br/>and get <i class="text-success">more & more giftcards</i></span></p>
                    <img src={"./assets/images/gift2.jpg"} alt="" class="w-50" />
                </div>
                <div class="col-md-6">
                    <p></p>
                    <div class="container">
                        <div class="row">
                            <div class="text-start my-2">Email id</div>
                            <input type="text" class="form-control border-dark h-100 mx-2" placeholder="Enter email id"/>
                            <div class="text-start my-2">Mobile number</div>
                            <input type="number" class="form-control border-dark h-100 mx-2" placeholder="Enter mobile number"/>
                            <div class="text-start my-2 ">Type a message</div>
                            <input type="text" class="border-box border py-5  border-dark form-control h-100 mx-2"/>
                            <div class="text-start"><button class="btn btn-dark  my-3">Send message</button></div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>

        <Footercomp />

        
        </>
    )
}

export default Contact;