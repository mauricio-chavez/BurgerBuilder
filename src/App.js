import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import './App.sass';


class App extends Component {
  render() {
	return (
	  <Layout>
		<BurgerBuilder />
	  </Layout>
	);
  }
}

export default App;
