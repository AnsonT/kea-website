import { getStore } from 'kea'

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()

export const store = getStore({
  middleware: [
    routerMiddleware(history)
  ],
  compose: [
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
  ],
  reducers: {
    router: routerReducer
  }
})

export const routeSelector = (state) => state.router.location
