import React from "react";
function Card(props) {
console.log(props);

return (
<>
  <div className="cards">
    <div className="card">
<img src={props.imgsrc} alt="mypic" className="card_img" />
   <div className="card_info">
<span className="card_category">{props.title} </span>
<a href={props.link} target="blank">
  <button> WATCH NOW </button>
    </a>
     </div>
      </div>
       </div>
</>
);
    
}
export default Card;