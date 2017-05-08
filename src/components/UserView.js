import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import { updateUser } from '../actions/users'
import database from '../database'


const mapStateToProps = ({users}) => ({
  users
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`users/${this.props.params.userId}`)
      this.sonFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateUser({
            userId: this.props.params.userId,
            userSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.onFirebaseValue)
    },
  }),
)

const UserView = ({dispatch, params, users}) =>(
  <div>
    {users[params.userId] !== null ?
      JSON.stringify(users[params.userId]) :
      "404 User Not found."
    }
  </div>
)

export default enhance(UserView);
