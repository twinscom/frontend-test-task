import React, { Component } from 'react';
import Activities from './components/Activities';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const BoredComponent = () => (
	<>
		<h1>This is a bored component</h1>
	</>
)
const Nav = styled.nav`

`

const Ul = styled.ul`


`

const Li = styled.li`


`

const Main = styled.main`

`

const App = () => (
	<Router>
		<>
			<Nav>
				<Ul>
					<Li>
						<Link to="/">Home</Link>
					</Li>
					<Li>
						<Link to="/bored/">About</Link>
					</Li>
				</Ul>
			</Nav>
			<Main>
				<Route path="/" exact component={Activities} />
				<Route path="/bored/" component={BoredComponent} />
			</Main>
		</>
	</Router>
);

export default App;