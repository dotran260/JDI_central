import styled from 'styled-components';

const DetailJobWrapper = styled.div`
  width: 100%;

  .filter-icon {
    display: flex;
    align-items: center;
    column-gap: 18px;
    padding: 15px 18px;
    background: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 8px;

    &:hover {
      border-color: #1bd2a4;
    }
  }

  .search-filter {
    width: 250px;
  }

  .status-select {
    display: inline-flex;
    align-items: center;
    column-gap: 18px;
    padding: 16px 18px;
    background: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 8px;
    width: 180px;

    &:hover {
      border-color: #1bd2a4;
    }
  }

  .text-placeholder {
    color: #a5a3a9;
    font-size: 13px;
    line-height: 13px;
  }
  .ant-tabs-content.ant-tabs-content-top {
    flex-direction: column;
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8ea;
`;
const ContainerJobDetail = styled.div`
  .mr-r {
    margin-right: 8px;
  }
  .headerJobDetail {
    .linkBack {
      color: green;
    }
    .headerTitle {
      font-weight: 700;
      font-size: 16px;
      line-height: 135%;
      letter-spacing: 0.01em;
    }
  }

  // Col1
  .headerJobDetail {
    display: flex;
    height: 46px;
    align-items: center;
    margin: 30px;
  }

  .postedDateWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .postedRole {
      display: flex;
      .full-time {
        background: #ffde54;
        border-radius: 5px;
        padding: 2px 4px;
        margin-right: 5px;
      }
      .part-time {
        background: #1bd2a4;
        border-radius: 5px;
        padding: 2px 4px;
      }
    }
  }

  .jobDetailInfo {
    h1 {
      font-weight: 800;
      font-size: 34px;
      line-height: 117%;
      margin-bottom: 24px;
    }
    .tagJobDetailInfo {
      display: flex;
      margin-bottom: 24px;
      .infoRate {
        margin-right: 20px;
        .green {
          color: green;
          border: none;
          margin-right: 6px;
        }
      }
    }
  }

  .tagSkill {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;

    p {
      background: #e8e8ea;
      border-radius: 5px;
      padding: 2px 4px;
      margin-right: 5px;
      font-weight: 500;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.03em;
    }
  }

  .jobDescription {
    h1 {
      font-weight: 700;
      font-size: 16px;
      line-height: 135%;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      margin-bottom: 26px;
    }
    p {
      padding: 0 28px;
      margin-bottom: 20px;
    }
  }
  .skillWrap {
    .niceSkills,
    .requiredSkills {
      display: flex;
      align-items: center;
      height: 38px;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 147%;
      }
    }
  }

  .skillDescription {
    padding-left: 14px;
  }

  // Col2
  .clientDescription {
    .clientHeader {
      text-align: center;
      .clientTitle {
        font-weight: 700;
        font-size: 11px;
        line-height: 130%;
        letter-spacing: 0.03em;
        margin-bottom: 26px;
      }
      .clientMoney {
        font-weight: 800;
        font-size: 34px;
        line-height: 117%;
      }
    }

    .infoClient {
      .infoDetail {
        display: flex;
        align-items: center;
        padding: 6px 0;
        .imgIcon {
          padding: 0 8px;
          cursor: pointer;
        }
        .imgClientIcon {
          margin-right: 8px;
        }
      }
      .block {
        display: block;
        text-align: center;
      }
    }
  }
`;
const styleIcon = { color: 'green', marginRight: '12px' };
const styleIconBlue = { color: 'blue', marginRight: '12px' };
const styleIconGray = { color: '#A5A3A9', marginRight: '12px' };
const colorCol = { background: '#F9F9F9', borderRadius: '12px', padding: '30px', boxShadow: '0px 12px 26px rgba(0, 0, 0, 0.12)' };
const colorColAbout = { background: '#F9F9F9', borderRadius: '12px', padding: '30px', marginTop: '24px', border: ' 1px solid #E8E8EA' };
export { DetailJobWrapper, Separator, ContainerJobDetail, styleIcon, colorCol, styleIconBlue, styleIconGray, colorColAbout };
