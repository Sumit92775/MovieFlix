import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = { 
        searchedMovie : "",
     }

    handleSearch = (event) =>{
        // console.log(event.key);
        if(event.key == "Enter" && document.querySelector(".header_container_right_search").value){
           this.setState({
                searchedMovie : document.querySelector(".header_container_right_search").value
           })
            // console.log(document.querySelector(".header_container_right_search").value);
           this.props.searchMovie(document.querySelector(".header_container_right_search").value);
           document.querySelector(".header_container_right_search").value = "";
        }

    }

    componentDidMount(){

        // this.props.searchMovie
    }


    render() { 
   
        return ( 
            <header className="header">
            <div className="header_container_left">
                <img src="https://raw.githubusercontent.com/sushberiwal/Dev_PP/master/Module3_React/movies/public/logo.svg"></img>
            </div>
            <div className="header_container_right">
                
                {window.location.href === "http://localhost:3000/home" ? 
                
                // <input className="header_container_right_search" placeholder="search" onKeyPress={(text)=>this.handleSearch(text)}/>
                    
                <div className="searchContainer">
                    <div className="is">
                        <input className="header_container_right_search" type="text"  placeholder="Search" onKeyPress={(text)=>this.handleSearch(text)}/>
                        <lottie-player  className="search_icon" src="https://assets3.lottiefiles.com/packages/lf20_GBGaOw.json"  background="transparent"  speed="0.3"  loop autoplay></lottie-player>
                    </div>
                </div>
            
                : 
                <div className="header_container_right_dh_container">
                    <div className="header_container_right_dashboard">Dashboard</div>
                    <div className="header_container_right_home" onClick={()=>window.location.assign("./home")}>Home</div>
                </div>
            }
            </div>
        </header>
         );
    }
}
 
export default Header;