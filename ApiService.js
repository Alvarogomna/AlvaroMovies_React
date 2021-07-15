import axios from 'axios';
export default class ApiService{
    static BASE_URL =  "https://api.themoviedb.org/3";
    static DISCOVER = "/discover/movie";
    static APIKEY = "de541384fb71e1fe9c195be7b9e3a91c";
    static POPULARITY_DESC = 'popularity.desc';
    
    getMovies = (pageNumber) =>{
      return axios.get(ApiService.BASE_URL + ApiService.DISCOVER, {
        params: {
          api_key: ApiService.APIKEY,
          sort_by: ApiService.POPULARITY_DESC,
          page: pageNumber,
          }
      }).then((res) => ({
          movies: res.data.results,
          totalPages: res.data.total_pages,  
     }) //cierre primera {
     ); //cierre then primer (
    }
    
}
