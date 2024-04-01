import React, { useState } from 'react'
import "./Testimonial.css"
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";


import image1 from "./img/team-1.jpg"
import image2 from "./img/team-2.jpg"
import image3 from "./img/team-3.jpg"
const Testimonial = () => {
    const testData=[
        {
            image: image1,
            review:"Great product, exceeded my expectations! Highly recommended please use this.",
            name:"sanket gaikwad",
            status: "Enterprenur"
        },
        {
            image: image2,
            review:"Good value for money, but could improve packaging for better protection.",
            name:"Jayant more",
            status: "Gate"
        },
        {
            image: image3,
            review:"Average quality, meets basic needs but lacks durability for long-term use",
            name:"suryakant satapure gaikwad",
            status: "Developer"
        }
    ]

    const[selected, setSelected] = useState(0);
    const tLenght = testData.length;

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testinomials</span>
            <span className='stroke-text'>What they</span>
            <span>Say about us</span>
            <span>{testData[selected].review}</span>
            <span>
                <span style={{color: "orange"}}>
                    {testData[selected].name}
                </span>{" "}
                -{testData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img className='right-t-image' src={testData[selected].image} alt="" />
            <div className='arrows'>
                <span className="left-arrow" onClick={()=>{
                    selected===0?
                    setSelected(tLenght-1):
                    setSelected((prev)=>prev-1);
                }}> < HiArrowSmLeft /></span>
                <span className="right-arrow"
                  onClick={()=>{
                    selected===tLenght-1?
                    setSelected(0):
                    setSelected((next)=>next+1);
                  }} ><HiArrowSmRight /></span>

            </div>
        </div>
    </div>
  )
}

export default Testimonial