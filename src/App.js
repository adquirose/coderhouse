import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './theme/globalStyle'

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Navbar />
    </Fragment>
  );
}
export default App

