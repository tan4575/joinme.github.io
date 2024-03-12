import React, { Component } from 'react';
import './App.css';
import Sidebar from './routes/sidebar'
import Introduction from './routes/introduction'
import About from './routes/about'
import Timeline from './routes/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
