import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "@iso/lib/helpers/style_utils";
import WithDirection from "@iso/lib/helpers/rtl";

const SidebarWrapper = styled.div`
  .isomorphicSidebar {
    z-index: 1000;
    background: #f9f9f9;
    width: 120px;
    flex: 0 0 120px;

    .scrollarea {
      height: calc(100vh - 88px);
    }

    .isoDashboardIcon {
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;

      .logo-container {
        border: 1px solid #e8e8ea;
        background-color: #fff;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 12px;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 38px;
          width: 33px;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
    }

    &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        width: 0;
        min-width: 0 !important;
        max-width: 0 !important;
        flex: 0 0 0 !important;
      }
    }

    .isoLogoWrapper {
      height: 70px;
      margin: 0;
      padding: 0 10px;
      text-align: center;
      overflow: hidden;
      ${borderRadius()};

      h3 {
        a {
          font-size: 21px;
          font-weight: 300;
          line-height: 70px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${palette("grayscale", 6)};
          display: block;
          text-decoration: none;
        }
      }
    }

    .menu-icon-svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .isoDashboardMenu {
      padding-top: 50px;
      padding-bottom: 35px;
      background: transparent;
      padding-left: 5px;
      padding-right: 5px;
      border: none;

      .ant-menu-item {
        margin-bottom: 50px;
        padding-left: 0 !important;
        padding-right: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 5px 0;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover {
          .isoMenuHolder {
            span {
              color: #000;
            }
          }
        }

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          border-left: 4px solid #1bd2a4;
          height: 0;
          transition: all 0.3s ease;
        }
      }

      .isoMenuHolder {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
          color: #77757f;
          font-weight: 700;
          font-size: 11px;
          line-height: 11px;
          margin-top: 10px;
        }
      }

      .anticon {
        font-size: 18px;
        margin-right: 30px;
        color: inherit;
        ${transition()};
      }

      .nav-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #464e5f;
        ${transition()};
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-left: 4px solid #1bd2a4;
        height: 0;
        transition: all 0.3s ease;
      }

      .ant-menu-item-selected {
        background-color: transparent !important;

        &::after {
          content: none;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          border-left: 4px solid #1bd2a4;
          border-right: none;
          height: 100%;
          transition: all 0.3s ease;
        }
      }

      > li {
        &:hover {
          i,
          .nav-text {
            color: #464e5f;
          }
        }
      }
    }

    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
      background: #ffffff !important;
    }

    .ant-menu-submenu-inline,
    .ant-menu-submenu-vertical {
      > .ant-menu-submenu-title {
        width: 100%;
        display: flex;
        align-items: center;
        /* padding: 0 24px; */

        > span {
          display: flex;
          align-items: center;
        }

        .ant-menu-submenu-arrow {
          left: ${(props) => (props["data-rtl"] === "rtl" ? "25px" : "auto")};
          right: ${(props) => (props["data-rtl"] === "rtl" ? "auto" : "25px")};

          &:before,
          &:after {
            width: 8px;
            background: #464e5f !important;
          }
        }

        &:hover {
          .ant-menu-submenu-arrow {
            &:before,
            &:after {
              color: #464e5f;
              background: #464e5f !important;
            }
          }
        }
      }
    }
    .logout {
      margin-top: 15vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &.ant-layout-sider-collapsed {
      .nav-text {
        display: none;
      }

      .ant-menu-submenu-inline > {
        .ant-menu-submenu-title:after {
          display: none;
        }
      }

      .ant-menu-submenu-vertical {
        > .ant-menu-submenu-title:after {
          display: none;
        }

        .ant-menu-sub {
          background-color: transparent !important;

          .ant-menu-item {
            height: 35px;
          }
        }
      }
    }
  }
`;

export default WithDirection(SidebarWrapper);
