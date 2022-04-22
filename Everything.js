import React from "react"
import About from "./About"
import Info from "./Info"
import Interest from "./Interest"
import Footer from "./Footer"

export default function Everything(){
    return (
        <div className="container">
        <div className="card">
       <Info/>
       <About/>
       <Interest/>
       <Footer/>
       </div>
        </div>
    )
}
