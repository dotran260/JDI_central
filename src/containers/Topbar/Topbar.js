import CalendarIcon from "@iso/assets/images/icon/header/calendar.svg";
import ChatIcon from "@iso/assets/images/icon/header/chat.svg";
import DownArrowIcon from "@iso/assets/images/icon/header/down-arrow.svg";
import NotificationIcon from "@iso/assets/images/icon/header/notification.svg";
import SearchIcon from "@iso/assets/images/icon/header/search.svg";
import { Avatar, Layout } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopbarWrapper from "./Topbar.styles";
import UserAvatar from "@iso/assets/images/2.jpg";
import ChatDrawer from "../../components/ChatDrawer/ChatDrawer";
import DrawerSchedule from "../../components/PopupInterview/DrawerSchedule";

import authAction from "../../redux/auth/actions";

const { logout } = authAction;
const { Header } = Layout;

export default function Topbar() {
  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const [showChat, setShowChat] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch();

  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    background: "#F9F9F9",
    position: "fixed",
    width: "100%",
    height: 88,
  };
  return (
    <TopbarWrapper>
      <Header
        style={styling}
        className={isCollapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"}
      >
        <div className="isoLeft">
          <div className="module-title">TALENT MANAGER</div>
        </div>

        <ul className="isoRight">
          <li className="isoUser">
            <img src={SearchIcon} alt="search" />
          </li>
          <li onClick={() => setShowChat(!showChat)} className="isoUser">
            <img src={ChatIcon} alt="chat" />
            <div className="userActivity" />
          </li>
          <li className="isoUser">
            <img src={NotificationIcon} alt="notification" />
            <div className="userActivity" />
          </li>
          <li className="isoUser" onClick={() => setVisible(true)}>
            <img src={CalendarIcon} alt="calendar" />
            <div className="userActivity" />
          </li>
          <li className="isoUser">
            <Avatar src={UserAvatar} />
          </li>
          <li className="isoUser">
            <img onClick={() => dispatch(logout())} src={DownArrowIcon} alt="more" />
          </li>
        </ul>
      </Header>
      <ChatDrawer visible={showChat} onClose={() => setShowChat(false)} />
      <DrawerSchedule visible={visible} onClose={() => setVisible(false)} />
    </TopbarWrapper>
  );
}
