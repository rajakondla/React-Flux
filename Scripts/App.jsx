var React = require('react');
var reactRoute = require('react-router-dom');
var Router = reactRoute.BrowserRouter;
var Route = reactRoute.Route;
var Switch = reactRoute.Switch;
var Components = require('expose-loader?Components!./Views');


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                    
                        <Route path="/" exact component={Components.Login} />

                        <Route path="/about/:username" exact strict component={Components.Home} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = App;

