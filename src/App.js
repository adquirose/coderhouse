import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
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
        <ItemListContainer />
      </AppContainer>
    </Fragment>
  );
}
export default App

