import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Article } from './components/article/Article';
import { Svg } from './components/svg/Svg';
import { Canvas } from './components/canvas/Canvas';
import { ImageTransform } from './components/image-transform/ImageTransform';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Main</Link>{' '}|{' '}
          <Link to="/article">Article</Link>{' '}|{' '}
          <Link to="/svg">SVG</Link>{' '}|{' '}
          <Link to="/canvas">Canvas</Link>{' '}|{' '}
          <Link to="/image-transform">Image transform</Link>
        </nav>

        <hr />

        <Switch>
          <Route path="/" exact>
            <div>
              Main
            </div>
          </Route>

          <Route path="/article">
            <Article />
          </Route>

          <Route path="/svg">
            <Svg />
          </Route>

          <Route path="/canvas">
            <Canvas />
          </Route>

          <Route path="/image-transform">
            <ImageTransform />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
