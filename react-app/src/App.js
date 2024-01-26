import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/Footer'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/Navbar'
import TempValueContext from './contexts/TempValueContext'
import Home from './pages/Home'
import Connection from './services/Connection'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrap = styled.div`
  flex: 1;
`

function App() {
  return (
    <>
      <TempValueContext>
        <Connection />
        <PageContainer>
          <ContentWrap>
            <GlobalStyle />
            <Router>
              <NavBar />
              <Suspense fallback="...Loading please wait...">
                <Switch>
                  <Route path="/" exact component={Home} />
                </Switch>
              </Suspense>
            </Router>
          </ContentWrap>
          <Footer />
        </PageContainer>
      </TempValueContext>
    </>
  )
}

export default App
