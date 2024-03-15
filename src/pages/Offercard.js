import React from "react";

function Offercard(){

    const Carddata = [{ima:"./assets/images/carddata1.jpg", name:"Blue with shibori printed", price:"₹1,245", org:"₹2,345", offer:"15% off", Rating:'3.4★'},{ima:"./assets/images/carddata2.jpg", name:"Emerald green color", price:"₹639", org:"₹1020", offer:"25% off", Rating:'4★'}, {ima:"./assets/images/carddata3.jpg", name:"Yellow green&Multy color", price:"₹815", org:"999", offer:"9% off", Rating:'3.9★'}, {ima:"./assets/images/carddata4.jpg", name:"Green with digital print", price:"₹1586", org:"₹2375", offer:"13% off", Rating:'4.5★'}, {ima:"./assets/images/carddata6.jpg", name:"Cream  with floral printed", price:"₹2245", org:"₹4495", offer:"50% off", Rating:'4.0★'},{ima:"./assets/images/carddata7.jpg", name:"Chanderi cotton saree", price:"₹1922", org:"₹2745", offer:"30% off", Rating:'4.7★'}, {ima:"./assets/images/carddata8.jpg", name:"Elegant Art jute", price:"₹977", org:"₹1395", offer:"30% off", Rating:'4.4★'}, {ima:"./assets/images/carddata9.jpg", name:"Pastel peach color", price:"₹1495", org:"₹1800", offer:"12% off", Rating:'5★'}]
    return(
        <>
        <div class="container">
        <div class=" row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            {Carddata.map((item) => (
                <div class="col">
                <div class="card h-100">
                <img src={item.ima} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title mx-2 text-start" style={{fontSize:"13px"}}>{item.name}</h5>
                        <p class="text-start mx-2" style={{fontSize:"13px"}}>{item.price} <strike class="text-danger">{item.org}</strike>
                        <span class="text-start mx-2 text-warning">({item.offer})</span></p>
                        <button class="btn btn-success  d-flex align-items-center justify-content-center mx-2" style={{maxWidth:"18%", maxHeight:"25%"}}>{item.Rating} </button>
                </div>
                </div>
            </div>
        
            ))}

        </div>     
        </div></>
  
      
    )
}
export default Offercard;

