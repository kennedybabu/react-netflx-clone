import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row rowId='2' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowId='4' title='Now Playing' fetchURL={requests.nowPlaying} />
        <Row rowId='5' title='Popular' fetchURL={requests.requestPopular} />
    </>
  )
}

export default Home