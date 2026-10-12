import React from 'react';
import gpto from '../images/gpto.png';
import about from'../images/about.png';
import fun from'../images/fun.png';
import applepie from'../images/applepie.png';
import { aboutdata, aboutdatas } from "../component/data/Aboutdata";




const About = () => {
  return (
    <div>
        <div className="heading">
           <img src={about}
           width="100%"
           height="500"
           />

           <img src={fun}
           width="100%"
           height="1000"
           />

        </div>

        <div className="explore">
            <h1>explore</h1>
        </div>

        <div className="pro">
             {aboutdata && aboutdata.map((item) => (
            <div className="im1" key={item.id} id={item.id}>
                <img src={item.img}
                height="300px"
                width="300px"
                />
                

      <h5 className="card-title">{item.title}</h5>
                      <small className="text-muted">$800</small><br/>

<button type="button" className="btn btn-outline-primary">add to cart</button>


            </div>

            /* <div className="im2">
                <img src={applepie}
                height="300px"
                width="300px"
                />
 <h5 className="card-title">red bomb cake</h5>
                      <small className="text-muted">$800</small><br/>

<button type="button" class="btn btn-outline-primary">add to cart</button>

            </div>

            <div className="im3">
                <img src={applepie}
                height="300px"
                width="300px"
                />
                 <h5 className="card-title">red bomb cake</h5>
                      <small className="text-muted">$800</small><br/>

<button type="button" class="btn btn-outline-primary">add to cart</button>


            </div> */
           ))}
        </div>
        
       

       <div className="pro">
                     {aboutdatas && aboutdatas.map((item) => (

            <div className="im1" key={item.id} id={item.id}>
            

                <img src={item.img}
                                alt={item.title}

                height="300px"
                width="300px"
                />
                

      <h5 className="card-title">{item.title}</h5>

                      <small className="text-muted">$800</small><br/>

<button type="button" className="btn btn-outline-primary">add to cart</button>


            </div>

            /* <div className="im2">
                <img src={applepie}
                                alt="choco"

                height="300px"
                width="300px"
                />
 <h5 className="card-title">red bomb cake</h5>
                      <small className="text-muted">$800</small><br/>

<button type="button" class="btn btn-outline-primary">add to cart</button>

            </div>

            <div className="im3">
                <img src={applepie}
                alt="choco"
                height="300px"
                width="300px"
                />
                 <h5 className="card-title">red bomb cake</h5>
                      <small className="text-muted">$800</small><br/>

<button type="button" class="btn btn-outline-primary">add to cart</button>


            </div> */ ))}
        </div>
       



                      
    </div>
  )
}

export default About
