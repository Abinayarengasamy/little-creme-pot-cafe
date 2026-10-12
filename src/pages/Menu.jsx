
import React from 'react'
import video from "../video/video.mp4";
import whitecake from "../images/whitecake.png";
import chocopiece from "../images/chocopiece.jpg";
import redcake from "../images/redcake.png";
import applepie from "../images/applepie.png";
import tiramisu from "../images/tiramisu.png";
import doughnuts from "../images/doughnuts.png";
import cheesecake from "../images/cheesecake.png";
import tresleches from "../images/tresleches.png";
import boba from "../images/boba.png";
import brownie from "../images/brownie.png";
import mango from "../images/mango.png";
import receptioncake from "../images/receptioncake.png";
import shake from "../images/shake.png";
import ascake from "../images/ascake.png";
import tiercake from "../images/tiercake.png";
import assscake from "../images/assscake.png";
import aswwcake from "../images/aswwcake.png";
import reeedcake from "../images/reeedcake.png";
import chococake from "../images/chococake.png";
import candlecake from "../images/shake.png";
import pinkpregcake from "../images/ascake.png";
import pregcake from "../images/tiercake.png";
import honcake from "../images/assscake.png";
import woodcake from "../images/aswwcake.png";
import flocake from "../images/reeedcake.png";
import lillycake from "../images/chococake.png";
import { menudata, menudatas, menudatasss,menudatassss,menudatasz,menudatass } from "../component/data/Aboutdata";









const Menu = () => {
  return (
    <div>
<div className="rowzz">
    <div className="video">
     <video 
  src={video} 
  width="100%" 
  height="100%" 
  controls
  loop 
  autoplay
/>

    </div>

    <div className="contentzz">
 <p> 🍫 Chocolate Berry Bliss Cake  
A rich threelayer chocolate sponge filled with luscious pink berry cream, topped with fresh strawberries and raspberries. 🎂✨
Perfect for birthdays, anniversaries, or any sweet celebration  this cake combines indulgent chocolate with the freshness of berries for a truly irresistible treat. 🍓🍫💖
</p>
    </div>
</div>

<div className="card-group">
  {menudata && menudata.map((item) => (
  
  <div className="card"key={item.id} id={item.id}>
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title} </h5>
      <p className="card-text"><small className="text-muted">$350</small></p>
    </div>
  </div>

/* <div className="card">
    <img src={assscake}
    width="80px"
    height="400px"
     className="card-img-top" alt="pink heart cake" />
    <div className="card-body">
      <h5 className="card-title">pink heart cake</h5>
      <p className="card-text"><small className="text-muted">$850</small></p>
    </div>
  </div>

  <div className="card">
    <img src={aswwcake} 
    width="80px"
    height="400px"
    className="card-img-top" alt="butterfly themed cake" />
    <div className="card-body">
      <h5 className="card-title">butterfly themed cake</h5>
      
      <p className="card-text"><small className="text-muted">$450</small></p>
    </div>
  </div> */
  ))}
</div>


<div className="card-group">
  {menudatas && menudatas.map((item) => (
  
  <div className="card"key={item.id} id={item.id}>
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text"><small className="text-muted">$800</small></p>
    </div>
  </div>

  /* <div className="card">
    <img src={cheesecake}
     width="80px"
    height="400px"
     className="card-img-top" alt="cheese cake" />
    <div className="card-body">
      <h5 className="card-title">cheese cake</h5>
      <p className="card-text"><small className="text-muted">$400</small></p>
    </div>
  </div>

  <div className="card">
    <img src={chococake}
     width="80px"
    height="400px"
     className="card-img-top" alt="choco cake" />
    <div className="card-body">
      <h5 className="card-title">choco cake</h5>
      <p className="card-text"><small className="text-muted">$560</small></p>
    </div>
  </div> */
  ))}
</div>


<div className="card-group">
  {menudatass && menudatass.map((item) => (
  
  <div className="card"key={item.id} id={item.id}>
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text"><small className="text-muted">$350</small></p>
    </div>
  </div>

  /* <div className="card">
    <img src={assscake}
    width="80px"
    height="400px"
     className="card-img-top" alt="pink heart cake" />
    <div className="card-body">
      <h5 className="card-title">pink heart cake</h5>
      <p className="card-text"><small className="text-muted">$850</small></p>
    </div>
  </div>

  <div className="card">
    <img src={aswwcake} 
    width="80px"
    height="400px"
    className="card-img-top" alt="butterfly themed cake" />
    <div className="card-body">
      <h5 className="card-title">butterfly themed cake</h5>
      
      <p className="card-text"><small className="text-muted">$450</small></p>
    </div>
  </div> */
  ))}
</div>


<div className="card-group">
  {menudatasss && menudatasss.map((item) => (
  
  <div className="card"key={item.id} id={item.id}>
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text"><small className="text-muted">$800</small></p>
    </div>
  </div>

  /* <div className="card">
    <img src={cheesecake}
     width="80px"
    height="400px"
     className="card-img-top" alt="cheese cake" />
    <div className="card-body">
      <h5 className="card-title">cheese cake</h5>
      <p className="card-text"><small className="text-muted">$400</small></p>
    </div>
  </div>

  <div className="card">
    <img src={chococake}
     width="80px"
    height="400px"
     className="card-img-top" alt="choco cake" />
    <div className="card-body">
      <h5 className="card-title">choco cake</h5>
      <p className="card-text"><small className="text-muted">$560</small></p>
    </div>
  </div> */
  ))}
</div>

<div className="card-group">
  {menudatassss && menudatassss.map((item) => (
  
  <div className="card"key={item.id} id={item.id}>
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text"><small className="text-muted">$350</small></p>
    </div>
  </div>

  /* <div className="card">
    <img src={assscake}
    width="80px"
    height="400px"
     className="card-img-top" alt="pink heart cake" />
    <div className="card-body">
      <h5 className="card-title">pink heart cake</h5>
      <p className="card-text"><small className="text-muted">$850</small></p>
    </div>
  </div>

  <div className="card">
    <img src={aswwcake} 
    width="80px"
    height="400px"
    className="card-img-top" alt="butterfly themed cake" />
    <div className="card-body">
      <h5 className="card-title">butterfly themed cake</h5>
      
      <p className="card-text"><small className="text-muted">$450</small></p>
    </div>
  </div> */
  ))}
</div>


<div className="card-group">
  {menudatasz && menudatasz.map((item) => (
  
  <div className="card">
    <img src={item.img} 
    width="80px"
    height="400px"
    className="card-img-top" alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text"><small className="text-muted">$800</small></p>
    </div>
  </div>

  /* <div className="card">
    <img src={cheesecake}
     width="80px"
    height="400px"
     className="card-img-top" alt="cheese cake" />
    <div className="card-body">
      <h5 className="card-title">cheese cake</h5>
      <p className="card-text"><small className="text-muted">$400</small></p>
    </div>
  </div>

  <div className="card">
    <img src={chococake}
     width="80px"
    height="400px"
     className="card-img-top" alt="choco cake" />
    <div className="card-body">
      <h5 className="card-title">choco cake</h5>
      <p className="card-text"><small className="text-muted">$560</small></p>
    </div>
  </div> */
  ))}
</div>

<div class="slidesz">
            <div class="sliding-picsz">
                <div className="marquee-track row-onee">
                
                        <img src={whitecake} alt="whiteforest" />
                        <img src={chocopiece} alt="chocopiece" />
                        <img src={redcake} alt="redcake" />
                        <img src={applepie} alt="applepie" />
                        <img src={tiramisu} alt="tiramisu" />
                        <img src={doughnuts} alt="doughnuts" />
                        <img src={cheesecake} alt="cheesecake" />
                
                    </div>
                
                    <div className="marquee-track row-twoo">
                
                    <img src={tresleches} alt="tresleches" />
                    <img src={boba} alt="boba" />
                    <img src={brownie} alt="brownie" />
                    <img src={mango} alt="mango" />
                    <img src={receptioncake} alt="reception cake" />
                    <img src={shake} alt="shake" />
                
                </div>
            </div>
            </div>






    </div>
  )
}

export default Menu

