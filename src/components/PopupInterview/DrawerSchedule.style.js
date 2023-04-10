import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  .spanBold {
    font-weight: 800;
  }
  .provideInfo {
    background: #f9f9f9;
    border: 1px solid #e8e8ea;
    border-radius: 8px;
  }
  .drawerTwo {
    padding: 20px;
  }
  .itemInfo {
    display: flex;
    padding: 16px;
  }
  .itemIcon {
    margin-right: 13px;
    color: #1bd2a4;
    font-size: 24px;
  }
  .itemWrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .interviewNoti {
    margin-bottom: 14px;
  }
  .itemTitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 147%;
  }
  .itemTitle.notBold {
    font-weight: 400;
  }
  .itemLink {
    text-decoration: underline;
    color: blue;
  }
  .desTime {
    display: block;
    font-weight: 500;
    font-size: 11px;
    line-height: 130%;
    color: #77757f;
  }
  .checkTime {
    font-weight: 700;
    font-size: 11px;
    line-height: 130%;
    margin-right: 12px;
  }
`;
export const DivWrap = styled.div`
  .interviewInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }

  .interviewTime {
    font-weight: 700;
    font-size: 14px;
    line-height: 147%;
    &.active {
      color: #1bd2a4;
    }
  }
  .interviewTime .interviewMajor {
    font-weight: 400;
    font-size: 13px;
    line-height: 135%;
  }
  .imgList {
    position: relative;
  }
  .ant-image-img,
  .imgIcon {
    width: 24px;
    height: 24px;
    border: 1px solid white;
    padding: 1px;
    border-radius: 50%;
  }
  .imgIcon.absolute {
    position: absolute;
    left: 12px;
  }
  .downIcon {
    margin-left: 24px;
  }
`;

export const titleFirt = (
  <p
    style={{
      fontWeight: 800,
      fontSize: '24px',
      lineHeight: '132%',
    }}
  >
    Interview Schedule
  </p>
);
export const titleSecond = (
  <p
    style={{
      fontWeight: 800,
      fontSize: '24px',
      lineHeight: '132%',
    }}
  >
    Interview is scheduled
  </p>
);
