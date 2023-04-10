import styled from 'styled-components';

const CardWrapper = styled.div`
  font-family: 'Raleway';
  width: 85%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e8e8ea;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  padding: 12px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  :hover {
    border: 1px solid #1ee9b6;
    box-shadow: 0px 4px 14px #1ee9b6;
    transition: 0.5s;
  }
  .freelanceImg {
    display: flex;
    justify-content: center;
    img {
      display: block;
      width: 100%;
      height: 182px;
      border-radius: 8px;
      margin-bottom: 14px;
    }
  }
  .freelanceDescription {
    margin-bottom: 14px;
    .name {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 135%;
      color: #1d1929;
      letter-spacing: 0.01em;
      margin-right: 10px;
    }
    .occupation {
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 130%;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
    }
  }
  .freelanceSalary {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;

    .salarySeparate {
      color: gray;
      margin: 0 10px;
    }
    .salaryTo {
      color: #18ba92;
    }
    .salaryFrom {
      color: #4a4754;
    }
  }
  .tag {
    display: flex;
    margin-bottom: 50px;

    p {
      color: #4a4754;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 130%;
      background: #e8e8ea;
      padding: 4px 8px;
      border-radius: 5px;
      margin-right: 5px;
    }
  }
  .viewProfile {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 12px;
  }
`;
const styleIcon = {
  fontSize: '15px',
  padding: '8px',
  borderRadius: '6px',
  background: 'black',
  color: 'white',
  marginRight: '6px',
};
const styleButton = {
  display: 'block',
  width: '85%',
  borderRadius: '6px',
};

export { CardWrapper, styleIcon, styleButton };
