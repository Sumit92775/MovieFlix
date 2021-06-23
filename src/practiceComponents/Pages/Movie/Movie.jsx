import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../Movie/Movie.css';

class Movie extends Component {
    state = { 
        mode : "",
     }

     componentDidMount(){

         this.setState({
             mode : this.props.mode
         })
         
     }

    render() { 
        if(this.props.mode === "hidden"){
            {
                let singleMovieArrayObj = this.props.singleMovieObj;
                let moviePoster = singleMovieArrayObj.attribs.src;
                let movieTitle = singleMovieArrayObj.attribs.alt;
                let mode = this.state.mode;
                return(

                    <div class="movie_container">
                        <div class="movie_poster_div">
                            <Link to={{ pathname: "/moviepage", state: {singleMovieArrayObj,mode}}}>
                                <img src={moviePoster} alt=""/>
                            </Link>
                        </div>
                        <div class="movie_info_div">
                            <h3 class="movie_info_div_title">{`Movie : ${movieTitle}`}</h3>
                            {/* <h3 class="movie_info_div_release_date">{`Release : ${movieReleaseDate}`}</h3>
                            <h3 class="movie_info_div_vote_rating">{`IMDB : ${movieIMDB}`}</h3> */}
                        </div>
                    </div>

                )
            }
        }else{
            
                let singleMovieArrayObj = this.props.singleMovieObj;
                let moviePoster = "https://www.themoviedb.org/t/p/w440_and_h660_face"+singleMovieArrayObj.backdrop_path;
                let movieTitle = singleMovieArrayObj.title;
                let movieReleaseDate = singleMovieArrayObj.release_date;
                let movieIMDB = singleMovieArrayObj.vote_average;
                let mode = this.state.mode;
                return ( 
                    <div class="movie_container">
                        <div class="movie_poster_div">
                            <Link to={{ pathname: "/moviepage", state: {singleMovieArrayObj,mode}}}>
                                <img src={moviePoster} alt=""/>
                            </Link>
                        </div>
                        <div class="movie_info_div">
                            <h3 class="movie_info_div_title">{`Movie : ${movieTitle}`}</h3>
                            <h3 class="movie_info_div_release_date">{`Release : ${movieReleaseDate}`}</h3>
                            <h3 class="movie_info_div_vote_rating">{`IMDB : ${movieIMDB}`}</h3>
                        </div>
                    </div>
        
                    // </React.Fragment>
        
            // <div>Hello</div>
                 );
        }
    }
}
 
export default Movie;