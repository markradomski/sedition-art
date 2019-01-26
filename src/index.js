import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import { Code, Home } from './pages';

class App extends Component {
	render() {
		return (
			<Router>
				<Page>
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
						<Route path={process.env.PUBLIC_URL + '/code'} component={Code} />
					</Switch>
				</Page>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
