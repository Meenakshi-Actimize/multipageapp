import React from "react";

function Newarrivalcard(){
    const cardData = [{cardd: "./assets/images/newarrival1.jpg", name:"TUSSAR SILK", cost:"Rs. 2000/-"}, {cardd: "./assets/images/newarrival2.jpg", name:"CHANDERI", cost:"Rs. 1800/-"},{cardd: "./assets/images/newarrival3.jpg", name:"MAYURI SILK", cost:"Rs. 1300/-"}, {cardd: "./assets/images/newarrival4.jpg", name:"Art SILK", cost:"Rs. 2000/-"}, {cardd: "./assets/images/newarrival5.jpg", name:"Art jute", cost:"Rs. 1800/-"},{cardd: "./assets/images/newarrival6.jpg", name:"Raw cotton", cost:"Rs. 1300/-"},{cardd: "./assets/images/newarrival1.jpg", name:"TUSSAR SILK", cost:"Rs. 2000/-"}, {cardd: "./assets/images/newarrival2.jpg", name:"CHANDERI", cost:"Rs. 1800/-"},{cardd: "./assets/images/newarrival3.jpg", name:"MAYURI SILK", cost:"Rs. 1300/-"}]
    const filterdata = [{name: "Tussar silk", price:"Rs.438-650",color:"White"}, {name: "Chanderi", price:"Rs.700-950",color:"Peach"}, {name: "Mayuri silk",price:"Rs.1000-1250",color:"Black"}, {name: "Art silk",price:"Rs.1300-2950",color:"Orange"},{name: "Art jute",price:"Rs.3000-4050",color:"Yellow"}, {name: "Raw cotton",price:"Rs.4200-5000",color:"Red"}]
    return(
        <>


        <div class="container">
        <div className="row ">
                <div className="col-md-3 my-4">
                   
                            <h5 className=" text-success">Filters</h5>
                            <p className=" border-top border-bottom my-3 text-warning">Category</p>
                            {filterdata.map((item) => (
                                <p className="form-check"> 
                                    <input className="form-check-input mx-1" type="checkbox" value=""  /> 
                                    <label className="form-check-label" >{item.name}</label>
                                </p>
                            ))}
                            <p className="border-top border-bottom my-3 text-warning">PRICE</p>
                            {filterdata.map((item) => (
                                <p className="form-check"> 
                                    <input className="form-check-input mx-1" type="checkbox" value=""  />
                                    <label className="form-check-label" >{item.price}</label>
                                </p>
                                                            ))}
                            <p className="border-top border-bottom my-3 text-warning">Color</p>
                            {filterdata.map((item) => (
                                <p  className="form-check"> 
                                    <input className="form-check-input mx-2" type="checkbox" value="" />
                                    <label className="form-check-label">{item.color}</label>
                                </p>
                            ))}
                            <button class="btn btn-primary my-3">Apply filter</button>

                    </div>
              
            
                <div className="col-md-9 my-4">
 
                
    <h5 className="text-success">New arrivals</h5>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-2">
            {cardData.map((item) => (
            <div class="col">
                <div class="card h-100">
                    <img src={item.cardd} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p style={{textAlign:'center', fontSize:'20px', color:'dark'}}>{item.name}</p>
                                        <p style={{textAlign: 'center'}}>{item.cost}</p>
                                        
                                      
                                        <button type="button" className="btn btn-warning  mt-2">Add to cart</button>
                                        <button type="button" className="btn btn-primary mx-2  mt-2 ">Order now</button>
                    </div>
                </div>
            </div>
               ))}
        </div>   
        </div>
    </div>
    </div>
    </div>

    </>
    )
}

export default Newarrivalcard;