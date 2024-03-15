import React from "react";

function Blogcomp(){
    const Blogdata = [{img: "./assets/images/blog2.jpg", h2data:"No Wedding Bells Ring Without Samudrika Pattu", pdata: "Hey there, lovely brides! If you’ve ever dreamt of a fairytale wedding, then you know that no ensemble is complete without the everlasting poise of a Samudrika Pattu saree. Here at Pothys, we’re all about celebrating the grandeur of tradition, and let me tell you, these sarees are the epitome of grace and splendour"},{img:"./assets/images/blog1.jpg", h2data:  "Petal Perfection Elegant Sarees with Delicate Floral Patterns", pdata:"Are you ready to embrace timeless elegance with a touch of floral finesse? Look no further than Pothys, where we bring you a stunning collection of sarees adorned with delicate floral patterns. From vibrant blooms to subtle petals, our sarees are a celebration of nature’s beauty and feminine grace."} ,{img:"./assets/images/vlog3.jpg",h2data:"Pothys Swarna Mahal’s Auspicious Thaali Chain Mela", pdata:"Pothys Swarna Mahal’s Auspicious Thaali Chain Mela, widest range of Thaali Chains at Lowest Wastage(VA) 3.99% to 9.99% only! Get Rs.10,000 OFF per Carat on our stunning Diamond Mogappu Collections!Shop the exclusive and new range of Thaali Mogappu Designs- Jimmiki, Sparkling, Divinity, Diamonds and lots more."}]
    return(
        <>
        <div class="d-flex mx-2  row">
        {Blogdata.map((item) => (
        
            <div class="col-md-4 my-2">
            <div class="card h-100">
            <img src={item.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h4 className="text-start">{item.h2data}</h4>
                <p class="text-start " style={{fontSize:'14px'}}>{item.pdata}</p>
            </div>
            </div>
            </div>
        ))}
        </div>
        </>
    )
}
export default Blogcomp;