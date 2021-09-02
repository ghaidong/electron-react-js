import React, { Component } from 'react'

export default class BlackListManager extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-item-auto">
          <RightControlPrimary key="rightControlPrimary" menuName="黑名单管理" />
          <RightControlSub key="rightControlSub" menuName="黑名单管理" menuPath="menuPath" />
        </div>
        <div className="flex-item-scroll">
          <BlackListTable />
        </div>
      </React.Fragment>
    )
  }
}