import React from 'react';
import Activity from './components/_activities';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import FilteredActivites from './components/filteredActivites';
import GlobalStyle, {Container} from './components/commonData';

const Nav = styled.nav`
	background-color: #3F4045;
`
const Ul = styled.ul`
	display: flex;
	justify-content: center;
`
const Li = styled.li`
	padding: 0 20px;
	&:first-child{
		padding-left: 0;
	}
	&:last-child{
		padding-right: 0;
	}
	&:not(:last-child){
		border-right: 1px dotted #F4F4F8;
	}
	a{
		color: #F4F4F8;
		transition: all .3s;
		font-weight: 700;

		&:hover{
			color: #5BC0BE;
		}
	}
`
const Centered = styled.div`
	text-align: center;
`

const App = () => (
	<Router>
		<>
			<GlobalStyle />
			<Nav>
				<Container>
					<Ul>
						<Li>
							<Link to="/">Random activity</Link>
						</Li>
						<Li>
							<Link to="/filter/">Filtered activity</Link>
						</Li>
					</Ul>
				</Container>
			</Nav>
			<main>
				<Container>
					<Centered>
						<Route path="/" exact render={() => <Activity />} />
						<Route path="/filter/" component={FilteredActivites} />
					</Centered>
				</Container>
			</main>
		</>
	</Router>
);

export default App;