// defaults
import { History } from 'history'
import * as React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { About, Home, NotFound } from 'views'

interface Props extends RouteComponentProps {
  history: History
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div className="App">
        <Switch location={this.props.history.location}>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
