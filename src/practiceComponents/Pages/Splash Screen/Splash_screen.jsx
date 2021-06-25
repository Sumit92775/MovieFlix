import React, { Component } from 'react'
class Splash_Screen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Splash_screen_container">
                <lottie-player className="netflix_lottie" onClick={()=>{
                    window.location.assign("http://localhost:3000/dashboard")
                }} src="https://assets3.lottiefiles.com/private_files/lf30_is6flrfu.json"  background="transparent"  speed="1"  style={{height : "100vh",width : "100%",backgroundColor : "black",cursor : "pointer"}}  autoplay/>
            </div>
         );
    }
}
 
export default Splash_Screen;