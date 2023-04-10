import React, { useState, useEffect } from 'react';
// import { Row } from 'antd';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { CandidateContainer } from './Candidate.style';
import Tabs, { TabPane } from '@iso/components/uielements/tabs';
// import Freelancers from '@iso/components/Candidate/Freelancers';
import IntlMessages from '@iso/components/utility/intlMessages';
import InviteNewModal from '@iso/components/InviteNewModal/Modal.js';
import FreelanceList from './FreelancerList';
import { freelanceCountApi } from '../../api/freelancer';

const Candidate = () => {
  const [keyProps, setKeyProps] = useState('freelancer');
  const [countLength, setcountLength] = useState(0);
  const onChange = (key) => {
    setKeyProps(key);
  };
  console.log(countLength);
  useEffect(() => {
    freelanceCountApi().then((res) => setcountLength(res?.result));
  }, []);
  return (
    <LayoutContentWrapper>
      <CandidateContainer>
        <div className='header'>
          <div className='candidate-title'>
            <span>Candidate</span>
            <span> List</span>
          </div>
          <div>
            <InviteNewModal />
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey='freelancer' className='app-tabs' onChange={onChange}>
            <TabPane tab={`Freelancers (${countLength?.freelancer})`} key='freelancer'>
              <FreelanceList tab={keyProps} />
            </TabPane>
            <TabPane tab={`Agencies (${countLength?.agency})`} key='agency'>
              <FreelanceList tab={keyProps} />
            </TabPane>
            <TabPane tab={`Hiring (${countLength?.hired})`} key='hiring'>
              <FreelanceList tab={keyProps} />
            </TabPane>
          </Tabs>
        </div>
      </CandidateContainer>
    </LayoutContentWrapper>
  );
};

export default Candidate;
