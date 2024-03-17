import React, { Component } from 'react';
import './App.css';
import Sidebar from './routes/sidebar'
import Introduction from './routes/introduction'
import About from './routes/about'
import Timeline from './routes/timeline'
import Projects from './routes/projects'
const apiKey = process.env.REACT_APP_API_KEY;
class App extends Component {
  render() {
    console.log(apiKey)
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
