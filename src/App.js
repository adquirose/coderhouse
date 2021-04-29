import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import GlobalStyle from './theme/globalStyle'
import Styled from 'styled-components'

const AppContainer = Styled.div`
  width:100vw;
  height:100vh;
  display:grid;
  grid-template:[top] 100px [row1] 1fr [bottom] / [izq] 50px [col1] 1fr [col2] 50px [der];
`
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}
export default App

