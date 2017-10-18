import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {refreshVideos} from '../actions/videos'
import {withDatabaseSubscribe} from './hocs'
import MenuLayout from './MenuLayout'
import VideosList from './videos/VideosList'


const mapStateToProps = ({videos}) => ({
  videos
})

const enhance = compose(
  connect(mapStateToProps),
  withDatabaseSubscribe(
    'value',
    (props) => ('videos'),
    (props) => (snapshot) => (
      props.dispatch(refreshVideos(snapshot.val()))
    )
  ),
)

const HomeView = ({videos}) => (
  <MenuLayout>
    <div>
      {videos === {} ? //FIXME: make this check work and provide a sensible default
        <div>No videos found</div> :
        <VideosList videoIds={Object.keys(videos)}/>
      }
    </div>
  </MenuLayout>
)

export default enhance(HomeView)
