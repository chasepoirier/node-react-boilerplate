import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from 'modules/store'
import App from 'views/App'

import './index.css'

/* eslint-disable react/jsx-filename-extension */
const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
)
/* eslint-enable react/jsx-filename-extension */

ReactDOM.render(<Index />, document.getElementById('root'))
