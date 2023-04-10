import React, { memo } from 'react';
import { OpportunitiesTabsWrapper } from './View.style';
import JobIcon from '@iso/assets/images/icon/opportunity/job.svg';
import ProjectIcon from '@iso/assets/images/icon/opportunity/project.svg';
import JobGreenIcon from '@iso/assets/images/icon/opportunity/job-green.svg';
import ProjectGreenIcon from '@iso/assets/images/icon/opportunity/project-green.svg';
import OpportunityItem from './OpportunityItem';
import { Spin } from 'antd';

const OpportunitiesTabs = ({ data, activeSubTab, setActiveSubTab, loading }) => {
  const dataTabs = data[0]?.data || [];

  const filteredData = dataTabs.filter((item) => {
    if (activeSubTab === 'Job' && item.type === 'Job') {
      return true;
    }
    if (activeSubTab === 'Project' && item.type === 'Project') {
      return true;
    }
    return false;
  });

  return (
    <OpportunitiesTabsWrapper>
      <div className='flex items-center mb-20'>
        <button onClick={() => setActiveSubTab('Job')} className={`app-button button-outline ${activeSubTab === 'Job' ? 'green' : ''}`}>
          <img src={activeSubTab === 'Job' ? JobGreenIcon : JobIcon} width={14} height={14} alt='job' />
          <span className='ml-10'>Jobs</span>
        </button>
        <button onClick={() => setActiveSubTab('Project')} className={`ml-10 app-button button-outline ${activeSubTab === 'Project' ? 'green' : ''}`}>
          <img src={activeSubTab === 'Project' ? ProjectGreenIcon : ProjectIcon} width={14} height={14} alt='project' />
          <span className='ml-10'>Projects</span>
        </button>
      </div>
      <div className='item-Wrap'>
        {data && loading ? (
          <Spin tip={'loading...'} style={{ display: 'block' }} />
        ) : filteredData.length === 0 ? (
          <p>No data available.</p>
        ) : (
          filteredData.map((item, index) => <OpportunityItem key={index} data={item} job={activeSubTab === 'Job'} />)
        )}
      </div>
    </OpportunitiesTabsWrapper>
  );
};

export default memo(OpportunitiesTabs);
