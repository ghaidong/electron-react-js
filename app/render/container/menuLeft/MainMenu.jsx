import React, { Component } from 'react'
import MenuItem from './MenuItem'

export default class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state={
      menuData: menuList,
      selectMenuName: ''
    }
  }
  render() {
    return (
      <div className="flex-item left-menu">
        {
          this.state.menuData.map((item, no) => <div key={no + "Item"}>
            <div className="left-menu-item">{item.name}</div>
            {
              item.children.map((subItem, subno) => (
                <MenuItem
                  key={subno + "subItem"}
                  menuName={subItem.name}
                  menuPath={subItem.path}
                  selectMenuName={this.state.selectMenuName}
                  onSelectMenu={(menuName) => { this.setState({ selectMenuName: menuName }) }}
                />
              ))
            }
          </div>
          )
        }
      </div>
    )
  }
}

const menuList = [
  {
    name: "接入服务",
    path: "/service",
    children: [
      {
        name: "黑名单管理",
        path: "/blackList"
      }, {
        name: "网关型号管理",
        path: "/gatewayTypeManager"
      }, {
        name: "虚拟网关版本管理",
        path: "/vGateway/frimware/list"
      }, {
        name: "虚拟网关授权管理",
        path: "/vGatewayAuthorization"
      }
    ]
  },
  {
    name: "Open API 管理",
    path: "/api",
    children: [
      {
        name: "API管理",
        path: "/apiManager"
      },
      {
        name: "授权管理",
        path: "/authorizationManager"
      },
      {
        name: "角色管理",
        path: "/roleManager"
      },
    ]
  }
]