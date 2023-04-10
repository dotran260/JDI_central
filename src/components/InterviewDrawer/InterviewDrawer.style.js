import styled from "styled-components";

const InterviewDrawerWrapper = styled.div`
  .container {
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #e8e8ea;
    border-radius: 8px;

    .online-link {
      text-decoration-line: underline;
      color: #0030cc;
      font-size: 13px;
      line-height: 13px;
    }
  }

  .block-time-select {
    min-width: 215px;
    .ant-select-selector {
      font-weight: 700;
    }
  }
`;

export { InterviewDrawerWrapper };
