/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

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
