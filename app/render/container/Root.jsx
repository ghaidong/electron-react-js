import React, { Component } from 'react'
import HeaderPanel from '../component/layout/HeaderPanel'
import FooterPanel from '../component/layout/FooterPanel'
import MainMenu from './menuLeft/MainMenu';
import { Button } from 'antd';


export default class Root extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <HeaderPanel />
        <div className="flex-row middle-content">
          <div className="flex-item-auto flex-column left-panel">
            <MainMenu key="leftMenu" />
          </div>
          <div className="flex-item flex-column">
            <div className="flex-item-auto">
              title
            </div>
            <div className="flex-item-scroll ">
              content
              {/* <Button key="3" type="primary">Operating</Button>, */}
            </div>
          </div>
        </div>
        <FooterPanel />
      </React.Fragment>
    )
  }
}
