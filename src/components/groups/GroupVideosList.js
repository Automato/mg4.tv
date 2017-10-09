import React from 'react'
import {Link} from 'react-router-dom'


const GroupVideosList = ({groupId, videoIds}) => (
  <ul>{videoIds.map((videoId) => (
    <li key={videoId}>
      <Link to={`/videos/${videoId}`}>
        {videoId}
      </Link>
    </li>
  ))
  }</ul>
)

export default GroupVideosList
