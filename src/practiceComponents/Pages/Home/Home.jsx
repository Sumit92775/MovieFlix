import axios from 'axios';
import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../../API/secrets.js';
import MoviePageComponent from '../MoviePageComponent/MoviePageComponent.jsx';
import Header from './../Header/Header.jsx';
import './Home.css';
import cheerio from 'cheerio';

class Home extends Component {
    state = {  
        movie_20_array : [],
        total_pages : "",
        searchedMovieByUser : "",
        url : null,
    }

    async componentDidMount(){
        // https://api.themoviedb.org/3/trending/all/day?api_key=26fa9a8bdd5ad1189d3cd1792b035d5a

        let data = await axios.get(`${API_URL}/trending/all/day?api_key=${API_KEY}`);
        let moviesArray = data.data.results;
        let totalPagesAvailable = data.data.total_pages;
        this.setState({
            movie_20_array : moviesArray,
            total_pages : totalPagesAvailable
        });
    }

    searchMovie = (searchedMovie) =>{
        this.setState({
            searchedMovieByUser : searchedMovie
        })

        this.setMovies(searchedMovie);
    }

    setMovies = async (searchedMovie) => {
    
            var cd = [];
            let data = await axios.get(API_URL + "/search/movie", {
              params: { api_key: API_KEY, page: 1, query: searchedMovie },
            });
            let moviesData = data.data.results;
            let pagesCount = data.data.total_pages; //3
            let pages = [];
            for (let i = 1; i <= pagesCount; i++) {
              pages.push(i);
            }
            this.setState({
                movie_20_array: moviesData,
            });



            // ******************************************************************

            let singleMovieFetch = moviesData[0];
            let movie = singleMovieFetch.title;
            let filmArray = movie.replaceAll(' ','-');
            filmArray = filmArray.replaceAll(".","");

console.log(filmArray);
            let sdk1 = axios.get(`https://vidcloud9.com/videos/${filmArray}`).then(response =>{
            if(response.status === 200){
                const html = response.data;
                const loadHtml = cheerio.load(html);
                // console.log(loadHtml('.play-video iframe').attr('src'));
                // this.setState({
                //     url : `http:${loadHtml('.play-video iframe').attr('src')}`
                // })


            }else{
                this.setState({
                    url :  response.status
                })
            }
        }).catch(function(e){
            var path;
            let dd = searchedMovie.split(" ");
           if( dd.length == 1){
            path = searchedMovie;
           }else{
               
               path = searchedMovie.replaceAll(" ","%20");
           }
            console.log(path);
            let sdk = axios.get(`https://vidcloud9.com/search.html?keyword=${path}`).then(response =>{
                if(response.status == 200){
                    let loadHtml = cheerio.load(response.data);
                    console.log(path);
                    let movieATag = loadHtml('li.video-block img').get();
                    cd = movieATag;
                    console.log(response);
                    console.log(movieATag);
                    // this.setState({
                    //     url : cd
                    // })
                    return cd;
                }
            }).catch(function(e){
                console.log(e);
            })

            return sdk;
        })

        sdk1.then(e=>{

            console.log(e);
            if(e != undefined || e != null){

                console.log(e);
                let arr = [];
                for(let i = 0 ; i < e.length ; i++){
                    arr.push(e[i]["attribs"]["href"]);
                }
                this.setState({
                    url : e
                })
                console.log(e);
            }else{

            }
        })

          };

    


    
    render() { 
        console.log("Hi");
        return ( 
            <div className="home_container">
                <Header searchMovie={this.searchMovie}></Header>
                <MoviePageComponent moviesArray={this.state.movie_20_array} hiddenMovieArray = {this.state.url}></MoviePageComponent>
            </div>
         );
    }
}
 
export default Home;