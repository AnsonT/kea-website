import './styles.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

@kea({
  actions: () => ({
    increment: (amount = 1) => ({ amount }),
    decrement: (amount = 1) => ({ amount })
  }),

  reducers: ({ actions, key, props }) => ({
    counter: [0, PropTypes.number, {
      [actions.increment]: (state, payload) => state + payload.amount,
      [actions.decrement]: (state, payload) => state - payload.amount
    }]
  }),

  selectors: ({ selectors }) => ({
    doubleCounter: [
      () => [selectors.counter],
      (counter) => counter * 2,
      PropTypes.number
    ]
  })
})
export default class Counter extends Component {
  render () {
    const { counter, doubleCounter } = this.props
    const { increment, decrement } = this.actions

    return (
      <div className='kea-counter'>
        Count: {counter}<br />
        Doublecount: {doubleCounter}<br />
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    )
  }
}
