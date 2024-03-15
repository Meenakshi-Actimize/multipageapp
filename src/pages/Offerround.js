import React from "react";

function Offerround(){
    const imageData = [{img:'assets/images/round1.jpg', name:'Silksarees'}, {img:'assets/images/round2.jpg',name:'Cotton saree'}, {img:'assets/images/round3.jpg',name:'Kerala'}, {img:'assets/images/round4.jpg',name:'Artsilk'}, {img:'assets/images/round5.jpg',name:'Designer'}]
return(
    <>
    <div class="container row">
            <div class= "col-md-4"></div>
            <div class= "col-md-5 d-flex mx-2">
                    { imageData.map((item) => (
                <>
                <div class="">


                <img src={item.img} alt="" 
                width={'70%'}
                
                className="rounded-circle border-secondary mx-3 my-3" 
                style={{marginTop:'10%', border:'3px solid black'}}/>
                <p class="" style={{fontSize:'9px'}}>{item.name}</p>
                </div>
                </>
                
            ))}
            </div>
            <div class= "col-md-3"></div>
        
        </div>
    </>
)

}
export default Offerround;