import React from "react";

function Cardcomp(){

    const cardData = [{cardd: "./assets/images/card1.jpg", name:"TUSSAR SILK", cost:"Rs. 2000/-"}, {cardd: "./assets/images/card2.jpg", name:"CHANDERI", cost:"Rs. 1800/-"},{cardd: "./assets/images/card3.jpg", name:"MAYURI SILK", cost:"Rs. 1300/-"},{cardd: "./assets/images/card4.jpg", name:"VASUNDARA ", cost:"Rs. 1,399.00"}]

    return(
   
        <>
        <div class="d-flex mx-2  row">
        {cardData.map((item) => (
        
            <div class="col-md-3 my-2">
            <div class="card ">
            <img src={item.cardd} class="card-img-top" alt="..." />
            <div class="card-body">
                <p style={{textAlign:'start', fontSize:'20px', color:'dark'}}>{item.name}</p>
                <p style={{textAlign: 'start'}}>{item.cost}</p>
                <button  type="button" class="btn btn-primary d-grid">Buy now</button>
            </div>
            </div>
            </div>
        ))}
        </div>

        </>
    )}
export default Cardcomp;