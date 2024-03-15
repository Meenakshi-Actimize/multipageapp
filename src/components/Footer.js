import React from "react";

function Footercomp(){
    return(
        <div class="container-fluid bg-dark " style={{marginTop:'25px'}}>
            <div class="row text-white ">
                <div class="col-md-3 text-start px-5">
                    <div style={{marginTop:'24px'}}><strong>Customers</strong>
                    <p class="secondary">Contact Us</p>
                    <p class="secondary">FAQ</p>
                    <p class="secondary">Privacy Policy</p>
                    </div>
                </div>
                <div class="col-md-3 text-start px-5">
                    <div style={{marginTop:'24px'}}><strong>Useful links</strong>
                    <p class="secondary align-left">Blog</p>
                    <p class="secondary">About us</p>
                    </div>
                </div>
                <div class="col-md-3 text-start px-5">
                    <div style={{marginTop:'24px'}}><strong>Connect socially</strong>
                    <p class="secondary"><i class="bi-facebook mx-1"></i>Facebook</p>
                    <p class="secondary"><i class="bi-twitter mx-2"></i>Twitter</p>
                    <p class="secondary"><i class="bi-instagram mx-1"></i>Instagram</p>
                    <p class="secondary"><i class="bi-youtube mx-2"></i>Youtube</p>
                    </div>
                </div>
                <div class="col-md-3 text-start px-5">
                    <div style={{marginTop:'24px'}}><strong>Download with mobile app</strong>
                    <p class="secondary"><img src="./assets/images/playstore1.png" width="40%"/>
                    <img class="mx-2" src="./assets/images/playstore2.png" width="40%"/></p>
                    </div>
                    <p>Payments: <span><img src="./assets/images/payment1.png" width="20%" /></span></p>

                </div>
               
               <p class="border"></p>
          
                <div class="col-md-12 text-center px-5">
                    <p style={{fontSize:'70%'}}>©&nbsp;2024,&nbsp;own&nbsp;@All&nbsp;rights&nbsp;reserved.</p>
                </div>
              
              
            </div>
        </div>
    )
}
export default Footercomp;