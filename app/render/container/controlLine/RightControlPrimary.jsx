import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RightControlPrimary extends Component {
  render() {
    return (
      <div key="rightControlPrimary" className="right-control-primary">
        <div className="color-lump"></div>
        {
          this.props.arrLink ? (
            this.props.arrLink.map(
              (itemLink, key) => (
                <Link key={key} to={itemLink.menuPath}>
                  <span className="right-title">
                    {itemLink.menuName}
                    {/* <LeftOutlined className="crumb-arrow" /> */}
                  </span>
                </Link>
              )
            )
          ) : null
        }
        <span className="right-title">{this.props.menuName}</span>
      </div>
    );
  }
}
