import styled from 'styled-components';

const DetailTaskWrapper = styled.div`
  width: 100%;

  .task-name {
    p:first-of-type {
      font-weight: 800;
      font-size: 24px;
      line-height: 26px;
    }
    p:last-of-type {
      font-size: 14px;
      color: #77757f;
    }
  }

  .task-activity {
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background-color: #e8e8ea;
      border-radius: 3px;
      font-size: 11px;
      line-height: 11px;
      margin-left: 10px;
      font-weight: 400;
    }
  }

  .timeline {
    border: 1px solid #e8e8ea;
    border-radius: 6px;

    .timeline-item {
      font-size: 14px;
      line-height: 14px;
      padding: 16px 14px;
      &:hover {
        background: #f4fffc;
        border-left: 3px solid #35ebbd;
        transition: all 0.1s ease-out;
      }
      &.disabled {
        cursor: not-allowed;
        border-left: 0px;
      }
      &.separator {
        border-bottom: 2px dashed #e8e8ea;
      }
    }
  }

  .link-box {
    margin-top: 40px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    border-radius: 12px;

    .link-box-item {
      margin-bottom: 24px;

      p {
        font-weight: 700;
        font-size: 15px;
        line-height: 17px;
      }

      a {
        color: #1bd2a4;
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .info-box {
    margin-top: 24px;
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #e8e8ea;
    border-radius: 12px;

    div:first-of-type {
      padding-bottom: 27px;
      border-bottom: 1px solid #e8e8ea;
    }

    div:last-of-type {
      padding-top: 24px;

      p {
        margin-bottom: 13px;
        font-size: 14px;
        line-height: 16px;
        color: #4a4754;
      }
    }
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 2px dashed #e8e8ea;
`;

export { DetailTaskWrapper, Separator };
