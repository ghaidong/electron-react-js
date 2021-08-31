import React, { Component } from 'react'

class HeaderPanel extends Component {
  render() {
    return (
      <div className="flex-row header-panel">
        <div className="site-name">EMOP 控制台</div>
        <div className="flex-item"></div>
        <div className="user-name">{this.props.username}</div>
      </div >
    )
  }
}

export default HeaderPanel