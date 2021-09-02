import React, { Component } from 'react'

export default class RightControlSub extends Component {
  render() {
    switch (this.props.menuName) {
      case "黑名单管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="blackListManger/gatewayList" >
                添加黑名单
              </Link>
            </Button>
            <Button>操作记录</Button>
          </div>
        );
      case "网关型号管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="/gateModelManager/gateModelAdd" >
                添加型号
              </Link>
            </Button>
          </div>
        );
      case "虚拟网关授权管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="/vGatewayAuthorization/createAuthorization" >
                生成授权
              </Link>
            </Button>
          </div>
        );
      case "API管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="apiManager/register" >
                注册API
              </Link>
            </Button>
          </div>
        )
      case "授权管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="authorizationManager/register" >
                新建项目
              </Link>
            </Button>
          </div>
        )
      case "API授权":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to={this.props.menuPath || '#'} >
                开通授权
              </Link>
            </Button>
          </div>
        )
      case "角色管理":
        return (
          <div className="right-control-sub">
            <Button>
              <Link to="roleManager/newRole" >
                新增角色
              </Link>
            </Button>
          </div>
        )
      default:
        return <div> null </div>
    }
  }
}
