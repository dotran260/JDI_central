import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import useWindowSize from "@iso/lib/hooks/useWindowSize";
import appActions from "@iso/redux/app/actions";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardRoutes from "./DashboardRoutes";

import {
  DashboardContainer,
  // DashboardGlobalStyles
} from "./Dashboard.styles";

const { Content } = Layout;
const { toggleAll, changeTitle } = appActions;
const styles = {
  layout: {
    flexDirection: "row",
    overflow: "hidden",
  },
  content: {
    flexShrink: "0",
    background: "#FFFFFF",
    position: "relative",
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.06)",
    borderRadius: "12px",
  },
  footer: {
    background: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #ededed",
  },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  React.useEffect(() => {
    dispatch(changeTitle(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardContainer>
      {/* <DashboardGlobalStyles /> */}
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout
            className="isoContentMainLayout"
            style={{
              height: appHeight,
            }}
          >
            <Content className="isomorphicContent" style={styles.content}>
              <DashboardRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
