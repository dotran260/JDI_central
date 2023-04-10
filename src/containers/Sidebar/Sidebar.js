import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import options from "./options";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Menu from "@iso/components/uielements/menu";
import appActions from "@iso/redux/app/actions";
import SidebarWrapper from "./Sidebar.styles";
import SidebarMenu from "./SidebarMenu";
import Logo from "@iso/assets/images/logo.png";
const { Sider } = Layout;

const { changeOpenKeys, changeCurrent, toggleCollapsed } = appActions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const { view, openKeys, collapsed, openDrawer, current, height } =
    useSelector((state) => state.App);

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
    if (view === "MobileView") {
      setTimeout(() => {
        dispatch(toggleCollapsed());
      }, 100);
    }
  }
  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(
      (key) => !(openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = openKeys.find(
      (key) => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    dispatch(changeOpenKeys(nextOpenKeys));
  }
  const getAncestorKeys = (key) => {
    const map = {
      sub3: ["sub2"],
    };
    return map[key] || [];
  };

  const isCollapsed = collapsed && !openDrawer;
  const mode = isCollapsed === true ? "vertical" : "inline";

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible={false}
        collapsed={false}
        width={120}
        className="isomorphicSidebar"
      >
        <div className="isoDashboardIcon">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <Scrollbars style={{ height: height - 70 }}>
          <Menu
            onClick={handleClick}
            className="isoDashboardMenu"
            mode={mode}
            openKeys={isCollapsed ? [] : openKeys}
            selectedKeys={current}
            onOpenChange={onOpenChange}
          >
            {options.map((singleOption) => (
              <SidebarMenu key={singleOption.key} singleOption={singleOption} />
            ))}
            <div className="logout">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5999 11.0004L15.7999 16.2004M20.5999 11.0004L15.7999 6.20039M20.5999 11.0004L5.3999 11.0004M11.7999 20.6004L1.3999 20.6004L1.3999 1.40039L11.7999 1.40039"
                  stroke="#4A4754"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </Menu>
        </Scrollbars>
      </Sider>
    </SidebarWrapper>
  );
}
