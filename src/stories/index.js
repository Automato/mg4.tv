import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Provider } from 'react-redux';

import configureStore from '../store'
import PerformanceFrame from '../components/PerformanceFrame'
import VideoStream from '../components/VideoStream'

const store = configureStore()

storiesOf('PerformanceFrame', module)
  .add("Default PerformanceFrame", () => (
    <Provider store={store} >
      <PerformanceFrame layout={{
        videoStreams: [
          {url: "", z_index: 0, aspectRatio:16/9},
        ],
      }} size={{
        height: 480,
        width: 854,
      }}/>
    </Provider>
  ))
  .add("Multiple Video PerformanceFrame", () => (
    <Provider store={store} >
      <PerformanceFrame layout={{
        videoStreams: [
          {url: "", z_index: 0, aspectRatio:16/9, scale: 0.5, position: "top-left"},
          {url: "", z_index: 1, aspectRatio:16/9, scale: 0.25, position: "top-right"},
        ],
      }} size={{
        height: 540,
        width: 960,
      }}/>
    </Provider>
  ))

storiesOf('VideoStream', module)
  .add("Default VideoStream", () => (
    <Provider store={store} >
      <VideoStream video={{url:""}} dispatch={()=>{}}/>
    </Provider>
  ))
  .add("4:3 Small VideoStream", () => (
    <Provider store={store} >
      <VideoStream video={{url:""}} aspectRatio={4/3} scaleWidth={720} />
    </Provider>
  ))