import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/detail/:id'>
						<Details />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
