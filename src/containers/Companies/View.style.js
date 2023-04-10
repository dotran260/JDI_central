import styled from "styled-components";

const CompaniesContainer = styled.div`
  width: 100%;

  .company-header {
    padding-bottom: 12px;
    margin-bottom: 18px;
    border-bottom: 1px solid #e8e8ea;
  }

  .company-title {
    font-weight: 800;
    font-size: 24px;
    span:first-child {
      color: #1ee9b6;
    }
    span:last-child {
      color: #000;
    }
  }

  .company-table {
    .company-info {
      p:first-child {
        color: #1d1929;
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 0px;
      }
      p:last-child {
        color: #4a4754;
        font-weight: 500;
        font-size: 11px;
        margin-bottom: 0px;
      }
    }
  }
  .company-footer {
    padding-top: 12px;
    margin-top: 18px;
    border-top: 1px solid #e8e8ea;

    .pagination-label {
      color: #a5a3a9;
      font-weight: 700;
      font-size: 11px;
    }
  }
`;

export { CompaniesContainer };
