import React from "react";
import ReactDOM from "react-dom"
import Card from "./Card";
import vickyPro from "./images/vicky.jpg"
import rosro from "./images/ro.jpg"
import jitendrahero from "./images/jitendra.jpg"
import  "./index.css";

ReactDOM.render(<div className='background_prop'>
<h1 className ="heading_style">LIST OF TOP 3 WORLD BABA</h1>
<h2 className ="heading_style2">BABA SE MARG DARSHAN LEKAR AAP BHI BABA BANNE KA MOKA PAYE </h2>
    <Card
    imgsrc={vickyPro}
    title="Desi Baba ka dhamal"
    sname="Desi Baba"
    link="https://www.facebook.com/vivek.prajapati.3762584"
    />
    
    <Card 
    imgsrc={rosro}
    title="Langar Baba ka kamal"
    sname="Langar Baba"
    link="https://www.facebook.com/profile.php?id=100005178799492"
    />
    
    <Card 
    imgsrc={jitendrahero}
    title="CARRIBEAN BABA ki Masaj"
    sname="CARRIBEAN BABA"
    link="https://instagram.com/jitendraprajapati3397?utm_medium=copy_link"
    />
    
    </div>, document.getElementById("chintu")
);