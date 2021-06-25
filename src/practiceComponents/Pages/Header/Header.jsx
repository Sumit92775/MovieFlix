import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MoviePage from '../MoviePage/MoviePage';
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


    setLike = () => {
        
        let likeContainer = document.querySelector(".header_container_right_like_container"); 
        if(likeContainer.classList.contains("active")){
            likeContainer.innerHTML = `
            <img src="https://i.ibb.co/r6m2F7J/1843187-200.png"></img>`
            return;
        }
            likeContainer.innerHTML = "";
    
            likeContainer.innerHTML = `
            <lottie-player src="https://assets2.lottiefiles.com/datafiles/hvAaKBDVLhuV5Wl/data.json"  background="transparent"  speed="0.4"  style="width: 100px; height: 100px;"  loop autoplay></lottie-player>
            `;
            likeContainer.classList.add("active");

            //// Push movie on localstorage

            let PosterUrl = this.props.setLikes.moviePoster;
            let MovieTitle = this.props.setLikes.movieTitle;
            let MovieUrl = this.props.setLikes.movieUrl;
            let whenWatched = this.props.setLikes.whenWatched;

            // check Whether the double tapped or liked movie exists in localstorage or not
            let moviesArrayFromLocalStorage = JSON.parse(window.localStorage.getItem("fMovies"));

            if(moviesArrayFromLocalStorage == null){

            }else{
                for(let i = 0 ; i < moviesArrayFromLocalStorage.length ; i++){
                    if(moviesArrayFromLocalStorage[i].movieTitle === MovieTitle){
                        return;
                    }
                }

            }



            if(window.localStorage.getItem("fMovies") != null && window.localStorage.getItem("fMovies") != undefined){

                let fMoviesArray = JSON.parse(window.localStorage.getItem("fMovies"));
                fMoviesArray.push({"moviePoster" : PosterUrl,"movieTitle" : MovieTitle.replace("-"," "),"movieUrl" : MovieUrl ,"whenWatched" : whenWatched});
                window.localStorage.setItem("fMovies",JSON.stringify(fMoviesArray));
            }else{
                window.localStorage.setItem("fMovies" , JSON.stringify([]))
                let movieStoredArray = JSON.parse(window.localStorage.getItem("fMovies"));
                console.log(movieStoredArray);
                movieStoredArray.push({"moviePoster" : PosterUrl,"movieTitle" : MovieTitle,"movieUrl" : MovieUrl ,"whenWatched" : whenWatched})
                window.localStorage.setItem("fMovies",JSON.stringify(movieStoredArray));
            }

            
        
        // document.querySelector(".header_container_right_like_container img").src = "data:image/png;base64,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";
    }


    render() { 
   
        if(document.querySelector(".list-server-more") != null){
           console.log("ehllo");
        }
        return ( 
            <header className="header">
            <div className="header_container_left">
                <img src="https://raw.githubusercontent.com/sushberiwal/Dev_PP/master/Module3_React/movies/public/logo.svg"></img>
            </div>
            <div className="header_container_right">
                
                {(window.location.href === "http://mflicks.herokuapp.com/home" || window.location.href === "http://localhost:3000/home") ? 
                
                // <input className="header_container_right_search" placeholder="search" onKeyPress={(text)=>this.handleSearch(text)}/>
                    
                <div className="searchContainer">
                    <div className="is">
                        <input className="header_container_right_search" type="text"  placeholder="Search" onKeyPress={(text)=>this.handleSearch(text)}/>
                        <lottie-player  className="search_icon" src="https://assets3.lottiefiles.com/packages/lf20_GBGaOw.json"  background="transparent"  speed="0.3"  loop autoplay></lottie-player>
                    </div>
                </div>
            
                : 

                window.location.href === "http://localhost:3000/moviepage" ? 
                <div className="header_container_right_like_container" onDoubleClick={this.setLike}>
                    <img src="https://i.ibb.co/r6m2F7J/1843187-200.png"></img>
                </div> 
                :
           
                window.location.href === "http://localhost:3000/favourite-movies" ? 
                <div className="favourite_movies_like">
                   <lottie-player src="https://assets2.lottiefiles.com/datafiles/hvAaKBDVLhuV5Wl/data.json"  background="transparent"  speed="0.4" loop autoplay></lottie-player>
                </div> 

                :
                <div className="header_container_right_dh_container">
                    <div className="header_container_right_dashboard">Dashboard</div>
                    <div className="header_container_right_home" onClick={()=>window.location.assign("./home")}>Home</div>
                    {/* <img src="https://image.freepik.com/free-vector/cute-brown-bear-hugging-heart_257056-532.jpg" style={{height : "60px" , width : "60px",padding  : "5px",backgroundColor : "red"}}alt="My Favourite" /> */}
                    <div className="favourite_movies" onClick={()=>window.location.assign("./favourite-movies")}>My Favourites</div>
                </div>
                
              
                

            
            }
            </div>
        </header>
         );
    }
}
 
export default Header;