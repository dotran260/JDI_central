import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Menu from "@iso/components/uielements/menu";
import Icon from "./Icon";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;

const stripTrailingSlash = (str) => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};
export default React.memo(function SidebarMenu({ singleOption, ...rest }) {
  let match = useRouteMatch();
  const { current } = useSelector((state) => state.App);

  const { key, label, leftIcon, children } = singleOption;
  const url = stripTrailingSlash(match.url);

  if (children) {
    return (
      <SubMenu key={key} {...rest}>
        {children.map((child) => {
          const linkTo = child.withoutDashboard
            ? `/${child.key}`
            : `${url}/${child.key}`;
          return (
            <Menu.Item key={child.key}>
              <div>
                <Icon type={leftIcon} active={current && current[0]} />
              </div>
              <Link to={linkTo}>{child.label}</Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  }

  return (
    <Menu.Item key={key} {...rest}>
      <Link to={`${url}/${key}`}>
        <span className="isoMenuHolder">
          <Icon type={leftIcon} active={current && current[0]} />
          <span className="nav-text">{label}</span>
        </span>
      </Link>
    </Menu.Item>
  );
});
