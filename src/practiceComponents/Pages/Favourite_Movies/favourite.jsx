import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Header/Header.jsx'
class Favourite_Movies extends Component {
    state = { 
        myFavouriteMoviesArray : []
     }

     componentDidMount(){
         let FavouriteMovies = JSON.parse(window.localStorage.getItem("fMovies"));
         this.setState({
            myFavouriteMoviesArray : FavouriteMovies
         })
     }

     remove = (lastWatched) =>{

        let updatedFavouriteMovies = this.state.myFavouriteMoviesArray.filter((obj) =>{
            console.log(obj);
            if(obj.whenWatched === lastWatched){
                return false;
            }
                return true;
        })

        console.log(updatedFavouriteMovies);

        window.localStorage.setItem("fMovies" ,JSON.stringify(updatedFavouriteMovies));

        this.setState({
            myFavouriteMoviesArray : updatedFavouriteMovies
        })

     }

    render() { 
        return ( 
            <div className="home_container">
                <Header></Header>
                <div className="movies_container" 
                style={{height : "450px" , width : "100%" ,gridGap : "50px", display : "flex" , justifyContent : "space-evenly" , alignItems : "center" , overflowX : "scroll" , paddingLeft : "40%" , paddingRight : "100px"}}
    >
                    { (this.state.myFavouriteMoviesArray != null || this.state.myFavouriteMoviesArray.length != 0) ? 
                
                this.state.myFavouriteMoviesArray.map((obj) =>{

                    return(
                        <div class="movie_container">
                            <div class="movie_poster_div">
                                {/* <Link to={{ pathname: "/moviepage"}}> */}
                                    <img src={obj.moviePoster} alt=""/>
                                {/* </Link> */}
                            </div>
                            <div class="movie_info_div">
                                <h3 class="movie_info_div_title">{`Movie : ${obj.movieTitle}`}</h3>
                                <h3 class="movie_info_div_release_date">
                                
                                <div className="delete_favourite_movie">
                                        {`last watch : ${obj.whenWatched}`}
                                        <i className="fas fa-trash" style={{paddingLeft : "5px" , color : "#e9d1c4"}} onClick={() =>this.remove(obj.whenWatched)}></i>
                                    </div>


                                </h3>
                                {/* <h3 class="movie_info_div_vote_rating">{`IMDB : ${movieIMDB}`}</h3> */}
                                
                            </div>
                            
                    </div>
                    // <div style={{color : "white"}}>Hello</div>
                    );
                })
                :
                <div style={{color : "white"}}>No favourite movies</div>    
                }
                    

                </div>
                
            </div>
         );
    }
}
 
export default Favourite_Movies;