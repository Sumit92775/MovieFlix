import React, { Component } from 'react';
import './../MoviePage/MoviePage.css';
import Header from './../Header/Header.jsx'
import axios from 'axios';
import cheerio from 'cheerio';



class MoviePage extends Component {
    state = { 
        movieUrl : "",
        splitmovie : "",
        url : "",
        hMovieHref : "",
        hMovietitle : "",
        hMoviePoster : "",
     };

    componentDidMount(){
        
        if(this.props.location.state.mode === "hidden"){

            let _movieTitle = this.props.location.state.singleMovieArrayObj.attribs.alt;
            console.log(_movieTitle);

           let _moviePoster = this.props.location.state.singleMovieArrayObj.attribs.src;
           console.log(_moviePoster);

            
            
            let _movieHref =  this.props.location.state.singleMovieArrayObj.parent.parent.parent.parent.children;
            _movieHref = _movieHref[0].next.attribs.href;
            
            axios.get(`https://vidcloud9.com${_movieHref}`).then(response =>{
                if(response.status === 200){
                    const html = response.data;
                    const loadHtml = cheerio.load(html);
                    // console.log(loadHtml('.play-video iframe').attr('src'));
                    this.setState({
                        // movieUrl : `http:${loadHtml('.play-video iframe').attr('src')}`,
                        hMovieHref : `http:${loadHtml('.play-video iframe').attr('src')}`,
                        hMovietitle : _movieTitle,
                        hMoviePoster : _moviePoster
                    })
                    console.log(this.state.hMovieHref);
                }else{
                    this.setState({
                        url :  response.status
                    })
                }
            }).catch(function(e){
                // https://vidcloud9.com/search.html?keyword=resident%20evil
                console.log(e);
    
            })

          

        //    this.setState({
        //        hMovieHref : "https://vidcloud9.com/"+_movieHref,
        //        hMovietitle : _movieTitle,
        //        hMoviePoster : _moviePoster
        //    })
        }else{
            
            let movie = this.props.location.state.singleMovieArrayObj.title;
            let filmArray = movie.replaceAll(' ','-');
            filmArray = filmArray.replaceAll(".","");
            this.setState({
                splitmovie : filmArray
            })
            axios.get(`https://vidcloud9.com/videos/${filmArray}`).then(response =>{
                if(response.status === 200){
                    const html = response.data;
                    const loadHtml = cheerio.load(html);
                    // console.log(loadHtml('.play-video iframe').attr('src'));
                    this.setState({
                        movieUrl : `http:${loadHtml('.play-video iframe').attr('src')}`
                    })
                }else{
                    this.setState({
                        url :  response.status
                    })
                }
            }).catch(function(e){
                // https://vidcloud9.com/search.html?keyword=resident%20evil
                console.log(e);
    
            })
        }




        //// Fetch details ***************************************************
    }


    render() { 
        return ( 

            this.props.location.state.mode != "hidden" ? 
            
            <div class="selected_movie_container">
                <div className="shadow_effect">
                    <Header></Header>
                    <div class="selected_movie_container_i_m">
                        <div class="selected_movie_info">
                            <h1 class="title">{this.props.location.state.singleMovieArrayObj.title}</h1>
                            <h3 class="description">{this.props.location.state.singleMovieArrayObj.overview}</h3>
                            <h3 class="release">{this.props.location.state.singleMovieArrayObj.release_date}</h3>
                            <h3 class="popularity">{this.props.location.state.singleMovieArrayObj.popularity}</h3>
                            <h3 class="vote_rating">
                                {/* <img src="https://o.remove.bg/downloads/0e9e0c0f-774f-4ff8-a20a-c70d114a9858/30-301898_star-png-picture-star-png-clipart-removebg-preview.png"></img> */}
                                {this.props.location.state.singleMovieArrayObj.vote_average}</h3>
                        </div>
                        <iframe  src={this.state.movieUrl} width="320" height="240" autoplay ></iframe>
                    </div>
                </div>
            </div>
            : 

            <div class="selected_movie_container">
            <div className="shadow_effect">
                <Header></Header>
                <div class="selected_movie_container_i_m">
                    <div class="selected_movie_info">
                        <h1 class="title">{this.state.hMovietitle}</h1>
                        {/* <h3 class="description">{this.props.location.state.overview}</h3> */}
                        {/* <h3 class="release">{this.props.location.state.release_date}</h3> */}
                        {/* <h3 class="popularity">{this.props.location.state.popularity}</h3> */}
                        {/* <h3 class="vote_rating"> */}
                            {/* <img src="https://o.remove.bg/downloads/0e9e0c0f-774f-4ff8-a20a-c70d114a9858/30-301898_star-png-picture-star-png-clipart-removebg-preview.png"></img> */}
                            {/* {this.props.location.state.vote_average}</h3> */}
                    </div>
                    <iframe  src={this.state.hMovieHref} width="320" height="240" autoplay ></iframe>
                </div>
            </div>
        </div>

         );
    }
}
 
// src="http://vidembed.net/streaming.php?id=ODgxNg==&title=Fast+And+Furious+4+HD-720p&typesub=SUB&sub=L2Zhc3QtYW5kLWZ1cmlvdXMtNC1oZC03MjBwL2Zhc3QtYW5kLWZ1cmlvdXMtNC1oZC03MjBwLnZ0dA==&cover=L2Zhc3QtYW5kLWZ1cmlvdXMtNC1sa3YvY292ZXIucG5n" 
export default MoviePage;