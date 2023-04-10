import React from 'react';
import { ApplyStatus } from './utility/status';

const ApplyStatusTag = ({ type, selected }) => {
  const status = Object.keys(ApplyStatus).find((item) => ApplyStatus[item].value === type);
  return (
    <div className='flex items-center'>
      <div className='apply-status-dot' style={{ '--color': ApplyStatus[status]?.color }} />
      <span className='text-13'>
        {`${ApplyStatus[status]?.label} `}
        {type === 'interview' && <span>{`${selected ? '(' + selected + ')' : ''}`}</span>}
      </span>
    </div>
  );
};

export default ApplyStatusTag;
