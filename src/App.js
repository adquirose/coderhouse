import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from './components/CartContext'
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart'
import GlobalStyle from "./theme/globalStyle";
import Styled from "styled-components";

const AppContainer = Styled.div`
  display:grid;
  grid-template:[top] 100px [row1] 1fr [bottom] / [izq] 1fr [der];
  width:100vw;
  height:100%;
  min-height:100vh;
  background:#CEBCAF;
`;
function App() {
	return (
		<CartContextProvider value={[]}>
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
						<Route path="/cart">
							<Cart />
						</Route>
					</Switch>
				</AppContainer>
			</BrowserRouter>
		</CartContextProvider>
	);
}
export default App;
