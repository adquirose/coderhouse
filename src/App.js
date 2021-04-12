import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Items from './components/Items'
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
    <Fragment>
      <GlobalStyle/>
      <AppContainer>
        <Navbar />
        <Items>
          <h1>Aca se listan los productos</h1>
        </Items>
      </AppContainer>
    </Fragment>
  );
}
export default App

