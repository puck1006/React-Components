import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 Spike 组件库</h1>
        <h2>组件小练手 : React + TS +部分UT</h2>
        {/* <h3>安装试试</h3>
        <code>
          npm install vikingship --save
        </code> */}
      </>
    )
  }, { info : { disable: true }})