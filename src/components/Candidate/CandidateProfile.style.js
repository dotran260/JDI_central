import styled from 'styled-components';

const CandidateProfileContainer = styled.div`
  width: 100%;

  .headerCandidate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .candidateImg {
      border-radius: 50%;
      height: 60px;
      weight: 60px;
    }
    .candidateInfo {
      display: flex;
      flex: 1;

      .candidateInfoWrap {
        margin-left: 20px;
        .candidateInfoTitle {
          font-weight: 800;
          font-size: 24px;
          line-height: 132%;
        }
        .candidateInfoProfessional {
          font-weight: 400;
          font-size: 14px;
          line-height: 147%;
        }
      }
    }

    .candidateControl {
    }
  }

  .btnResume {
    color: #4a4754;
    padding: 5px 10px 5px 10px;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d2d1d4;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  .btnSaved {
    background: #ffffff;
    border: 1px solid #d2d1d4;
    border-radius: 12px;
    width: 310px;
    height: 48px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  .card {
    margin: 70px 0 0 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 24px;
    width: 350px;
    background: #f9f9f9;
    border: 1px solid #e8e8ea;
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .head {
    color: #4a4754;
    font-weight: bold;
    font-size: 16px;
  }

  .salary {
    font-size: 14px;
    div:first-child {
      font-size: 24px;
      color: #1d1929;
      font-weight: 800;
    }
  }

  .card-info {
    margin: 0 0 12px 0;

    div:first-child {
    }
    div:last-child {
      color: #4a4754;
      font-weight: bold;
    }
  }
  .ql-clipboard,
  .ql-tooltip.ql-hidden {
    display: none !important;
  }
  .candidateAvatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export { CandidateProfileContainer };
