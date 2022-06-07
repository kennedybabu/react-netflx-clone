const key = '51b2b5d5f941e522b58e755e059cf6b2'


const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    nowPlaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,  

}

export default requests