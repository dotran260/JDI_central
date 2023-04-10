import styled from 'styled-components';

const OpportunitiesWrapper = styled.div`
  width: 100%;

  .opportunity-header {
    padding-bottom: 10px;
  }

  .opportunity-title {
    font-weight: 800;
    font-size: 24px;
    span:first-child {
      color: #1ee9b6;
    }
    span:last-child {
      color: #000;
    }
  }
`;

const OpportunitiesTabsWrapper = styled.div`
  
`;

const JobItemWrapper = styled.div`
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e8e8ea;
  border-radius: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  
  .full-time-tag,
  .part-time-tag {
    background: #ffde54;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
  .part-time-tag {
    background: #1bd2a4;
    color: #fff;
  }

  .skill-tag {
    background: #e8e8ea;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    color: #4a4754;
  }
`;
const ProjectItemWrapper = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  margin-bottom: 12px;

  .more-require {
    background: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 5px;
    font-size: 13px;
    line-height: 13px;
    padding: 6.5px 0;
    display: inline-block;
    max-width: 145px;
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8ea;
`;

export { OpportunitiesWrapper, OpportunitiesTabsWrapper, JobItemWrapper, ProjectItemWrapper, Separator };
