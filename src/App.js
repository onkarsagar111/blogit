import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AllPosts from './components/allposts/allposts';
import CreatePost from './components/createpost/createpost';
import Layout from './components/layout/layout';
import Settings from './components/settings/settings';
import Themes from './components/themes/themes';
import Todo from './components/todo/todo';

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Layout >
          <Switch>
            <Route
              path="/createpost"
              exact
              component={CreatePost}
            />
            <Route
              path="/allposts"
              exact
              component={AllPosts}
            />
            <Route
              path="/themes"
              exact
              component={Themes}
            />
            <Route
              path="/settings"
              exact
              component={Settings}
            />
            <Route
              path="/todo"
              exact
              component={Todo}
            />
            <Route
              path="/"
              component={AllPosts}
            />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
