import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import Home from './pages/Home';

class App extends Component {
	render() {
		return (
			<Router>
				<Page>
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route path="/artworks" component={Artworks} /> */}
					</Switch>
				</Page>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
