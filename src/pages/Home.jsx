import React from 'react'
import cake from "../images/pokecutweb_1788501974277 - Copy.png";
import whisk from "../images/whisk.png";
import leaf from "../images/leaf.png";
import travel from "../images/travel.png";
import gift from"../images/gift.png";
import whitecake from"../images/whitecake.png";
import chocopiece from"../images/chocopiece.jpg";
import redcake from"../images/redcake.png";
import tiramisu from"../images/tiramisu.png";
import doughnuts from"../images/doughnuts.png";
import cheesecake from"../images/cheesecake.png";
import applepie from"../images/applepie.png";
import tresleches from"../images/tresleches.png";
import boba from"../images/boba.png";
import brownie from "../images/brownie.png";
import mango from"../images/mango.png";
import receptioncake from"../images/receptioncake.png";
import shake from"../images/shake.png";
import panacotta from"../images/panacotta.png";
import pudding from"../images/pudding.png";
import bento from "../images/bento.png";
import brownies from "../images/brownies.png";
import strawberrydessert from"../images/strawberrydessert.png";
import jarcakes from"../images/jarcakes.png";
import prettycake from"../images/prettycake.png";
import { homedata, homedatas } from "../component/data/Aboutdata";



const Home = () => {
  return (
    <div>

        <>
        <div className="container">

                <div className="row">
 
                    <div className="col1">

                        <h5>made with love</h5>

                        <h1>
                            Happiness is <br />
                            just a <br />
                            slice away
                        </h1>

                        <h6>
                            delicious cakes made with love
                            <br />
                            to make your day sweeter
                        </h6>

                    </div>

                    <div className="col2">

                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/038/907/780/small_2x/ai-generated-delicate-delicious-pink-cakes-and-pies-for-valentine-s-day-free-photo.jpg"
                            alt="tempting-visuals"
                            width="700px"
                            height="500px"
                        />

                    </div>

                </div>

            </div>


            <div className="container2">

                <div className="row2">

                    <div className="cake">

                        <img
                            src={cake}
        alt="cake"
        height="50px"
        width="50px"
                        />

                        <p>each bite taste like a heaven</p>

                    </div>


                    <div className="whisk">
                        

                        <img
                           src={whisk}
    alt="whisk"
    height="50px"
    width="50px"
                        />

                        <p>handcrafted</p>
                        <p>small.batches</p>
                        <p>big flavour</p>

                    </div>


                    <div className="leaf">
                        

                        <img
                          src={leaf}
                            alt="leaf"
                            height="50px"
                            width="50px"
                        />

                        <p>premium ingrediants</p>
                        <p>we use quality and premium ingrediants</p>

                    </div>


                    <div className="travel">

                        <img
                            src={travel}
                            alt="travel"
                            height="50px"
                            width="50px"
                        />

                        <p>door delivery available</p>

                    </div>


                    <div className="sweetbox">

                        <img
                            src={gift}
                            alt="gift"
                            height="50px"
                            width="50px"
                        />

                        <p>special dresserts for special occasion</p>

                    </div>
                    </div>

                </div>
                <div className="slides">
                    <div className="sliding-pics">
                       <div className="marquee">



</div>


                    </div>
                </div>

                <div className="sliding-pics">
    <div className="marquee-track row-one">

        <img src={whitecake} alt="whiteforest" />
        <img src={chocopiece} alt="chocopiece" />
        <img src={redcake} alt="redcake" />
        <img src={applepie} alt="applepie" />
        <img src={tiramisu} alt="tiramisu" />
        <img src={doughnuts} alt="doughnuts" />
        <img src={cheesecake} alt="cheesecake" />

    </div>

    <div className="marquee-track row-two">

    <img src={tresleches} alt="tresleches" />
    <img src={boba} alt="boba" />
    <img src={brownie} alt="brownie" />
    <img src={mango} alt="mango" />
    <img src={receptioncake} alt="reception cake" />
    <img src={shake} alt="shake" />

</div>
</div>
                
<div className="bestsellers">

    <div className="bestseller-tag">
        <p>#bestsellers</p>
    </div>

    <div className="bestseller-row">
        {homedata && homedata.map((item) => (


        <div className="card1" key={item.id} id={item.id}>

            <img
                src={item.img}
                alt="brownie"
                height="250px"
                width="250px"
            />
            <p>{item.tittle}</p>
            <button className="button">treat yourself</button>
        </div>

        /* <div className="card2">
            <img
                src={strawberrydessert}
                alt="strawberry"
                height="250px"
                width="250px"
            />
            <p>strawberry dessert</p>
            <button className="button">treat yourself</button>
        </div>

        <div className="card3">
            <img
                src={jarcakes}
                alt="jarcakes"
                height="250px"
                width="250px"
            />
            <p>jar cake</p>
            <button className="button">treat yourself</button>
        </div> */

                                               
    ))}

    </div>


    <div className="bestseller-row">
                {homedatas && homedatas.map((item) => (


        <div className="card4" key={item.id} id={item.id}>
            <img
                src={item.img}
                alt={item.tittle}
                height="250px"
                width="250px"
            />
            <p>{item.tittle} </p>
            <button className="button">treat yourself</button>
        </div>

        /* <div className="card5">
            <img
                src={pudding}
                alt="pudding"
                height="250px"
                width="250px"
            />
            <p>pudding</p>
            <button className="button">treat yourself</button>
        </div>

        <div className="card6">
            <img
                src={panacotta}
                alt="panacotta"
                height="250px"
                width="250px"
            />
            <p>panacotta</p>
            <button className="button">treat yourself</button>
        </div> */

                ))}

    </div>

</div>





       <div className="cakeandtxt">
  <div className="cake">
    <img
      src={prettycake}
      alt="dessert"
      height="500px"
      width="500px"
    />
    
</div>

  <div className="text">
    <p>
      ✨ Little Creme Pot – where desserts meet love and artistry!
      🍫 Brownies, 🍓 strawberry delights, 🍯 jar cakes, 🎂 bento cakes, 🍮 panna cotta, and 🍧 puddings – all crafted fresh with premium ingredients.
      🚚 Delivered to your doorstep, perfect for 🎉 birthdays, 💍 anniversaries, or just a sweet craving.
      💖 Homemade charm + professional polish = happiness in every bite!
    </p>
  </div>
</div>




           
            

        </>
       




      
    </div>
  )
}

export default Home
