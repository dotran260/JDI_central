import styled from 'styled-components';

const FreelancerWrapper = styled.div`
  font-family: 'Raleway';

  .btn-sort {
    background-color: transparent;
    border-color: transparent;
    font-size: 14px;
    font-weight: 700;
    color: #4a4754;
    cursor: pointer;
  }
  .colSortBy {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }
  .icon {
    margin-right: 12px;
  }
  .salaryRange {
    display: flex;
    justify-content: space-between;
  }
  .filterHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 130%;
    letter-spacing: 0.03em;
    color: #34303e;
  }
  .filterTitle {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 135%;
    display: flex;
    align-items: center;
    color: #4a4754;
  }
`;
const styleColBySort = { display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end' };

export { FreelancerWrapper, styleColBySort };
