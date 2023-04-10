import styled from 'styled-components';

const MatchMoreWrapper = styled.div`
  width: 100%;

  .container {
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    padding: 30px;

    .scroll-section {
      max-height: 70vh;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .filter-input {
      width: 200px;
    }

    ul {
      list-style: disc;
      margin-left: 25px;
    }
  }
  .ql-clipboard,
  .ql-tooltip.ql-hidden {
    display: none !important;
  }
`;

const Separator = styled.div`
  border-bottom: 1px solid #e8e8ea;
`;

export { MatchMoreWrapper, Separator };
