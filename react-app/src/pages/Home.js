import React from 'react'
import styled from 'styled-components'
import Banner from '../assets/banner.png'
import BgGraph from '../assets/BgGraph.png'
import BgRanking from '../assets/BgRanking.png'
import Graph from '../components/Graph'
import List from '../components/List'
import Ranking from '../components/Ranking'

const Title = styled.div`
  padding-top: 5vh;
  img {
    width: 100%;
  }
`

const Wrapper = styled.div`
  padding: 2% 10%;
  z-index: 1000;
  img {
    position: absolute;
    z-index: -1;
  }
`

const Home = () => {
  return (
    <>
      <Title>
        <img src={Banner} />
      </Title>
      <Wrapper>
        <List />
        <img src={BgGraph} />
        <Graph />
        <img src={BgRanking} />
        <Ranking />
      </Wrapper>
    </>
  )
}

export default Home
