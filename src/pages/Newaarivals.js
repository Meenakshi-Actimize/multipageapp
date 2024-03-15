import React from "react";
import Firstcomp from "../components/Firstcomp";
import Navbarcomp from "../components/Navbarcomp";
import Footercomp from "../components/Footer";
import Newarrivalcard from "./Newarrivalcard";

function Newarrivals() {
    

    return(
        <>
        <Firstcomp />
        <Navbarcomp />
       
        <div>
            <img src="./assets/images/bannerweb.jpg" className="w-100 h-10" alt="Banner"/>
        </div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card my-4">
                        <div className="card-body">
                            <h5 className="card-title border-bottom">Filters</h5>
                            <p className="border-bottom my-3">Category</p>
                            {filterdata.map((item) => (
                                <p className="form-check"> 
                                    <input className="form-check-input mx-1" type="checkbox" value=""  /> 
                                    <label className="form-check-label" >{item.name}</label>
                                </p>
                            ))}
                            <p className="border-top border-bottom my-3">PRICE</p>
                            {filterdata.map((item) => (
                                <p className="form-check"> 
                                    <input className="form-check-input mx-1" type="checkbox" value=""  />
                                    <label className="form-check-label" >{item.price}</label>
                                </p>
                                                            ))}
                            <p className="border-top border-bottom my-3">Color</p>
                            {filterdata.map((item) => (
                                <p  className="form-check"> 
                                    <input className="form-check-input mx-2" type="checkbox" value="" />
                                    <label className="form-check-label">{item.color}</label>
                                </p>
                            ))}
                            <button class="btn btn-primary my-3">Apply filter</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {cardData.map((item) => (
                            <div className="col-md-4 my-4">
                                <div className="card">
                                    <img src={item.cardd} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p style={{textAlign:'center', fontSize:'20px', color:'dark'}}>{item.name}</p>
                                        <p style={{textAlign: 'center'}}>{item.cost}</p>
                                        
                                       <div class="d-flex">
                                        <button type="button" className="btn btn-warning">Add to cart</button>
                                        <button type="button" className="btn btn-primary mx-3">Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div> */}
        <Newarrivalcard />
        <Footercomp />
        </>
    )
}
export default Newarrivals;
