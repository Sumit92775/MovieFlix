import axios from 'axios';
import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../../API/secrets';
import Movie from '../../../practiceComponents/Pages/Movie/Movie.jsx';
import './MoviePageComponent.css'
class MoviePageComponent extends Component {
    state = { 
        detailedMovieArray : [],
        movieId : []
     }

     async componentDidMount(){
         let data = this.props.moviesArray;
         let movieIdArray = [];
         for(let i = 0 ; i < data.length ; i++){
            movieIdArray.push(data[i].id);
         }

         this.setState({
            movieId : movieIdArray
         });

     }

    render() { 
        return ( 
            
            <React.Fragment>
                <div className="moviePage_container">
                    <div className="trending_movie_tag">
                    <lottie-player className="trending_movie_icon" src="https://assets3.lottiefiles.com/packages/lf20_slGFhN.json"  background="transparent"  speed="0.6"  loop autoplay></lottie-player>
                        <div className="trending_movie_text">Trending Movies</div>
                    </div>

                    <div className="trending_movie_container">
                        {this.props.hiddenMovieArray == null ? 
                             this.props.moviesArray.map((moviesObj) =>{
                                return <Movie key={moviesObj.id} singleMovieObj={moviesObj} mode={"normal"}></Movie>
                            })
                        :
                         
                        this.props.hiddenMovieArray.map((moviesObj) =>{
                            return <Movie key={moviesObj.id} singleMovieObj={moviesObj} mode={"hidden"}></Movie>
                        })
                        // <div></div>

                         }
                        
                    </div>
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default MoviePageComponent;