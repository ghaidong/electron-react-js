import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuItem extends Component {
  render() {
    return (
      <Link to={this.props.menuPath} onClick={() => this.props.onSelectMenu(this.props.menuName)}>
        <div className="left-menu-subitem">
          {
            this.props.selectMenuName === this.props.menuName ?
              <span className="menu-text left-menu-subitem-active">{this.props.menuName}</span> :
              <span className="menu-text">{this.props.menuName}</span>
          }
        </div>
      </Link>
    )
  }
}
