import { palette } from "styled-theme";

import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .ant-btn{
    border-radius: 4px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }



  .ant-row.ant-form-item {
    margin-bottom: 5px;
  }

  .has-success.has-feedback {
    .ant-select {
      .ant-select-selection {
        .ant-select-selection__rendered {
          .ant-select-selection__placeholder {
            display: none !important;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for project category menu [ScrumBoard]
  /*-----------------------------------------------*/
  .project-category {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 8px 12px;
        color: #000000;
        font-weight: 400;
      }
    }
  }

  /*-----------------------------------------------*/
  // style for project menu [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-dropdown {
    &.project-menu {
      width: 280px;
      top: 133px !important;

      .ant-dropdown-menu {
        padding: 0;
        overflow: hidden;

        .ant-dropdown-menu-item {
          min-height: 54px;
          line-height: auto;
          display: flex;
          align-items: center;
          padding: 10px 20px;

          &:first-child {
            padding: 0;
            border-bottom: 1px solid #f4f6fd;

            &:hover,
            &:focus {
              background-color: #ffffff;
            }
          }

          &:hover,
          &:focus {
            background-color: #F3F5FD;
          }

          &:last-child {
            background-color: #E6EAF8;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for popover [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-popover {
    .ant-checkbox-group {
      display: flex;
      flex-direction: column;
      .ant-checkbox-group-item {
        margin: 5px 0;
        span {
          font-size: 14px;
          color: #788195;
          text-transform: capitalize;
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for modal [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-modal-wrap {
    .ant-modal {
      .ant-modal-content {
        .ant-modal-body {
          .render-form-wrapper {
            padding: 10px;
            h2 {
              margin: 0;
            }
            form {
              padding: 15px 0 3px;
              .field-container {
                margin-bottom: 26px;
              }
            }
          }
        }
      }
    }
  }


h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
img,
svg {
  &::selection {
    background: ${palette("primary", 0)};
    color: #fff;
  }
}

.ant-row:not(.ant-form-item) {
  ${
    "" /* margin-left: -8px;
  margin-right: -8px; */
  };
  &:before,
  &:after {
    display: none;
  }
}

.ant-row > div {
  padding: 0;
}

.isoLeftRightComponent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.isoCenterComponent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  color: #1D1929;
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}

.scrollbar-track-y,
.scrollbar-thumb-y {
  width: 5px !important;
}

.scrollbar-track-x,
.scrollbar-thumb-x {
  height: 5px !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
}

.scrollbar-track {
  background: rgba(222, 222, 222, 0.15) !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
  background: rgba(0, 0, 0, 0.5) !important;
}

.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-bottomLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-bottomRight
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-topLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-topRight
  > .ant-popover-content
  > .ant-popover-arrow:after {
  left: 0;
  margin-left: -4px;
}

/* Instagram Modal */

.ant-modal-wrap.instagram-modal .ant-modal {
  max-width: 935px;
  width: 100% !important;
}

@media only screen and (max-width: 991px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    padding: 0 60px;
  }
}

@media only screen and (max-width: 767px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    max-width: 580px;
  }
}

.ant-modal-wrap.instagram-modal .ant-modal-content {
  border-radius: 0;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {
  position: fixed;
  color: #fff;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {
  font-size: 24px;
}

.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {
  padding: 0;
}

/********** Add Your Global RTL CSS Here **********/

/* Popover */

html[dir='rtl'] .ant-popover {
  text-align: right;
}

/* Ecommerce Card */

html[dir='rtl'] .isoCardInfoForm .ant-input {
  text-align: right;
}

/* Modal */

html[dir='rtl'] .has-success.has-feedback:after,
html[dir='rtl'] .has-warning.has-feedback:after,
html[dir='rtl'] .has-error.has-feedback:after,
html[dir='rtl'] .is-validating.has-feedback:after {
  left: 0;
  right: auto;
}

html[dir='rtl'] .ant-modal-close {
  right: inherit;
  left: 0;
}

html[dir='rtl'] .ant-modal-footer {
  text-align: left;
}

html[dir='rtl'] .ant-modal-footer button + button {
  margin-left: 0;
  margin-right: 8px;
}

html[dir='rtl'] .ant-confirm-body .ant-confirm-content {
  margin-right: 42px;
}

html[dir='rtl'] .ant-btn > .anticon + span,
html[dir='rtl'] .ant-btn > span + .anticon {
  margin-right: 0.5em;
}

html[dir='rtl'] .ant-btn-loading span {
  margin-left: 0;
  margin-right: 0.5em;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {
  padding-left: 25px;
  padding-right: 29px;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)
  .anticon {
  margin-right: -14px;
  margin-left: 0;
}

/* Confirm */

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {
  margin-left: 16px;
  margin-right: 0;
  float: right;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {
  float: left;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {
  margin-right: 10px;
  margin-left: 0;
}

/* Message */

html[dir='rtl'] .ant-message .anticon {
  margin-left: 8px;
  margin-right: 0;
}

/* Pop Confirm */

html[dir='rtl'] .ant-popover-message-title {
  padding-right: 20px;
  padding-left: 0;
}

html[dir='rtl'] .ant-popover-buttons {
  text-align: left;
}

/* Notification */

html[dir='rtl']
  .ant-notification-notice-closable
  .ant-notification-notice-message {
  padding-left: 24px;
  padding-right: 0;
}

html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-message,
html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-description {
  margin-right: 48px;
}

html[dir='rtl'] .ant-notification-notice-close {
  right: auto;
  left: 16px;
}

html[dir='rtl'] .ant-notification-notice-with-icon {
  left: 0;
}

/* Dropzone */

html[dir='rtl'] .dz-hidden-input {
  display: none;
}
.w-full {
  width: 100%;
}
.main-button {
  font-family: 'Poppins';
  font-weight: 500!important;
  font-size: 16px!important;
  line-height: 25px!important;
  background: linear-gradient(90deg, #347fad 0%, #5ea573 100%)!important;
  border-radius: 30px!important;
  padding: 18px!important;
  min-width: 150px!important;
  display: flex!important;
  justify-content: center!important;
  align-items: center!important;
  color: #ffffff!important;
}
.action-button {
  font-weight: 400!important;
  font-size: 12px!important;
  line-height: 19px!important;
  border: 1px solid #BDC3CB!important;
  border-radius: 20px!important;
  padding: 18px!important;
  min-width: 120px!important;
  display: flex!important;
  justify-content: space-between!important;
  align-items: center!important;
  color: #3C4146!important;
  font-family: 'Poppins';
}
.filter-button {
  cursor: pointer;
  min-width: 120px!important;
  display: flex!important;
  justify-content: center!important;
  align-items: center!important;
  color: #3C4146!important;
  font-family: 'Poppins';
}
.filter-button svg {
  margin-right: 10px;
}
.main-search-input {
  width: 100%;
  border: none!important;
  background-color: #ffffff!important;
  border-radius: 8px!important;
}
.main-search-input input.ant-input {
  background-color: #ffffff!important;
  box-shadow: none!important
}
.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow {
  display: none!important;
}
.ant-popover-content .ant-popover-inner {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  background: #FFFFFF!important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1)!important;
  border-radius: 8px!important;
  padding: 20px!important;
}
.ant-popover-inner-content {
  padding: 0!important;
}
.panel-popover .filter-button {
  justify-content: start!important;
  margin-bottom: 5px;
  margin-top: 5px;
}


.company-popover {
  max-width: 320px;
}
.company-popover .company-name {
  color: #4a4754;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #e8e8ea;
}
.company-popover .company-name p:first-of-type {
  font-weight: 700;
  font-size: 14px;
}
.company-popover .company-name p:last-of-type {
  font-weight: 500;
  font-size: 11px;
}
.company-popover .company-description {
  padding: 20px 0;
  border-bottom: 1px solid #e8e8ea;
  color: #1d1929;
  font-weight: 400;
  font-size: 13px;
}
.company-popover .company-info {
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #e8e8ea;
}
.company-popover .company-info div {
  margin-bottom: 10px;
}
.company-popover .company-info div img {
  margin-right: 10px;
}
.company-popover .company-logo {
  padding: 20px 0 0 0;
}

.progress-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #35EBBD;
}
.completed-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #1D1929;
}
.requested-tag,
.declined-tag,
.authorized-tag,
.paid-tag,
.received-tag
{
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  text-align: center;
  background-color: #E6ECFF;
  border-radius: 12px;
  color: #1A50FF;
  padding: 4px 8px;
}
.declined-tag  {
  color: #F53E3E;
  background-color: #FEEAEA;
}
.authorized-tag  {
  color: #1BD2A4;
  background-color: #E9FDF8;
}
.paid-tag  {
  color: #12BBF1;
  background-color: #DDF7FF;
}
.received-tag  {
  color: #1D1929;
  background-color: #E8E8EA;
}

.end-task-popover .ant-popover-inner {
  background-color: #000000 !important;
  padding: 30px;
  min-width: 220px;
}
.end-task-popover .ant-popover-inner-content p{
  color: #ffffff;
}

.chat-drawer .ant-drawer-content-wrapper {
  height: 80vh !important;
}
.chat-drawer .ant-drawer-body {
  padding: 0;
}

.status-filter-popover {
  width: 240px;
  padding: 30px 20px;
}
.status-filter-popover .ant-popover-inner {
  padding: 0 !important;
  overflow: hidden;
}
.status-filter-popover .ant-popover-inner-content ul li  {
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease-in-out;
}
.status-filter-popover .ant-popover-inner-content ul li:hover {
  background-color: #F4FFFC;
}
.status-filter-popover .ant-popover-inner-content ul li > div {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: var(--color);
}

.skill-tag {
  background: #e8e8ea;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  color: #4a4754;
}

.apply-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color);
  display: inline-block;
  margin-right: 10px;
}

.job-popover-avatar {
  width: 200px;
  height: 180px;
  border-radius: 8px;
  object-fit: contain;
}

.chat-bubble {
  background: #E9FDF8;
  border-radius: 12px 12px 0px 12px;
  padding: 14px 12px;

  &.other {
    background-color: #E8E8EA;
    border-radius: 12px 12px 12px 0px;
  }
}

.hiring-popover .ant-popover-inner{
  background-color: #000 !important;
  box-shadow: 0px 12px 26px rgba(0, 0, 0, 0.12) !important;
  border-radius: 3px !important;

  p{
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 15px;
    font-weight: 700;
    cursor: pointer;

    &:last-of-type{
      margin-bottom: 0;
    }
  
    &:hover {
      opacity: 0.8;
    }
  }
}

`;

export default GlobalStyles;
