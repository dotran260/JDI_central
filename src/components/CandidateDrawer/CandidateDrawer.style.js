import styled from 'styled-components';

const CandidateDrawerWrapper = styled.div`
  .upload-text {
    padding-bottom: 2px;
    border-bottom: 1px dashed #18ba92;
  }

  ul {
    list-style: disc;
    margin-left: 25px;
  }

  .hiring-step {
    margin: auto;
    font-size: 11px;
    line-height: 11px;
    font-weight: 500;
    width: 100%;
    letter-spacing: 0.03em;

    div {
      display: inline-block;
      position: relative;
      height: 31px;
      line-height: 31px;
      border: 1px solid #e8e8ea;
      margin-right: -3px;
      background-color: #f9f9f9;
      width: 100%;
      display: inline-flex;
      justify-content: center;
      whitespace: no-wrap;
      cursor: pointer;

      &.step:after {
        content: '';
        border-top: 1px solid #e8e8ea;
        border-right: 1px solid #e8e8ea;
        width: 22px;
        height: 22px;
        position: absolute;
        right: 0px;
        top: -0.5px;
        background-color: #f9f9f9;
        z-index: 150;
        -webkit-transform: translate(10px, 4px) rotate(45deg);
        -moz-transform: translate(10px, 4px) rotate(45deg);
        -ms-transform: translate(10px, 4px) rotate(45deg);
        -o-transform: translate(10px, 4px) rotate(20deg);
        transform: translate(10px, 4px) rotate(45deg);
      }

      &.active {
        &.blue {
          background-color: blue;
          &.active:after {
            background-color: blue;
          }
        }
        &.orange {
          background-color: orange;
          &.active:after {
            background-color: orange;
          }
        }
        &.sky {
          background-color: #2cccff;
          &.active:after {
            background-color: #2cccff;
          }
        }
        &.red {
          background-color: #f65354 !important;
          &.active:after {
            background-color: #f65354 !important; 
          }
        }
        background-color: #ffde54;
        color: white;
        font-weight: 700;
      }
      &.active:after {
        background-color: #ffde54;
      }
      &:last-of-type.active {
        background-color: #1ee9b6;
      }
      &:last-of-type.active:after {
        background-color: #1ee9b6;
      }

      &.disable {
        background-color: #d2d1d4;
        border: 1px solid #d2d1d4;
        color: #ffffff;
      }
      &.disable:after {
        background-color: #d2d1d4;
      }
    }
  }

  .progress-wrapper {
    margin-bottom: 20px;
    .progress-img {
      margin-right: 12px;
    }
    .progress-container {
      background: #f9f9f9;
      border: 1px solid #e8e8ea;
      border-radius: 6px;
      overflow: hidden;

      .progress-item {
        padding: 16px 14px;
        border-bottom: 2px dashed #e8e8ea;
        transition: all 0.1s ease-out;
        cursor: pointer;
        &:last-of-type {
          border-bottom: 0;
        }
        &:hover {
          background: #f4fffc;
          border-left: 3px solid #35ebbd;
        }
        &.disabled {
          cursor: not-allowed;
          border-left: 0px;
        }
      }
    }
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 2px dashed #e8e8ea;
`;
const styleApply = {
  backgroundColor: '#1BD2A4',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  color: '#FFFFFF',
  gap: '4px',
};
const styleReview = {
  backgroundColor: '#ff9a4d',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  color: '#FFFFFF',
  gap: '4px',
};

export { CandidateDrawerWrapper, Separator, styleApply, styleReview };
