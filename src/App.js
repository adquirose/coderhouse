import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import {AuthContextProvider} from './components/Firebase/context'
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import GlobalStyle from "./theme/globalStyle";
import Styled from "styled-components";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OrderDetail from './components/OrderDetail'
import PrivateRoute from './components/PrivateRoute'

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
			<AuthContextProvider>
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
							<Route path="/order/:id">
								<OrderDetail />
							</Route>
							<Route path="/cart">
								<Cart />
							</Route>
							<PrivateRoute exact component={Checkout} path="/checkout" />
							<PrivateRoute exact path="/order/:id" component={OrderDetail} />
							<Route path="/signup">
								<SignUp />
							</Route>
							<Route path="/signin">
								<SignIn />
							</Route>
						</Switch>
					</AppContainer>
				</BrowserRouter>
			</AuthContextProvider>
		</CartContextProvider>
	);
}
export default App;
