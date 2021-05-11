import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from './components/CartContext'
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import GlobalStyle from "./theme/globalStyle";
import Styled from "styled-components";

const AppContainer = Styled.div`
  display:grid;
  grid-template:[top] 100px [row1] 1fr [bottom] / [izq] 50px [col1] 1fr [col2] 50px [der];
  width:100vw;
  height:100%;
  min-height:100vh;
  background:#CEBCAF;
`;
function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<GlobalStyle />
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
		</CartContextProvider>
	);
}
export default App;
