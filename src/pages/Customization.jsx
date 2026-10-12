import React from 'react'
import tiercake from "../images/tiercake.png";
import assscake from "../images/assscake.png";
import aswwcake from "../images/aswwcake.png";
import cakestraw from "../images/cakestraw.png";
import { customizationdatas, customizationdatass, customizationdatasz } from "../component/data/Aboutdata";



const Customization = () => {
  return (
    <div>
    <div className="box">
   <div className="fontzz">
     <p>🎂 “Your cake, your canvas — every choice paints a sweeter story.” 
🍓 “From flavors to frosting, you hold the brush — we bake the masterpiece.” </p>  
<p>✨ “Customize, create, celebrate — because no two cakes should taste the same.”  
💖 “Add a message, a sparkle, a memory — your cake becomes your signature.” </p> 
<p>🎉 “Every slice is a celebration of you — layered with joy, frosted with love.”  
🌼 “Dream it, design it, devour it — your imagination is our recipe.” </p> 
<p>🍫 “Because ordinary cakes are everywhere, but yours will be unforgettable.”</p>
   </div>
</div>
      <div className="cakkiee">
            <img 
  src={cakestraw}
  alt="cake"
  height="500"
  width="100%" 
/>

      </div>

      <div className="customize">
        <h1>previously customized cakes by customers</h1>
        <div className="videos-order">
            <div className="video-one">
              <video width="300" height="300" controls>
      <source src="https://pin.it/5dswelA1G" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video>

            </div>
            <div className="video-one">
             
            <video width="300" height="300" controls>
      <source src="https://pin.it/4bckHncVo" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video> 
      
                
            </div>
            <div className="video-one">

              <video width="300" height="300" controls>
      <source src="https://pin.it/NNXJ5KDe0" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video> 
                
            </div>

        </div>

        <div className="videos-order">
             <div className="video-one">

              
              <video width="300" height="300" controls>
      <source src="https://pin.it/NNXJ5KDe0" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video> 

            </div>
            <div className="video-one">

              
              <video width="300" height="300" controls>
      <source src="https://pin.it/NNXJ5KDe0" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video> 
                
            </div>
            <div className="video-one">

              
              <video width="300" height="300" controls>
      <source src="https://pin.it/NNXJ5KDe0" type="video/mp4" />
       autoPlay 
  muted 
  loop 
    </video> 
                
            </div>
        </div>

        <div className="card-group">
                  {customizationdatas && customizationdatas.map((item) => (
          
          <div className="card" key={item.id} id={item.id}>
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
           {customizationdatass && customizationdatass.map((item) => (

          <div className="card" key={item.id} id={item.id}>
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
           {customizationdatasz && customizationdatasz.map((item) => (

            <div className="card">
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
        
        
      </div> 
                     
    </div>
  )
}

export default Customization;
