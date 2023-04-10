import { Avatar, Drawer, Tabs } from 'antd';
import React, { useEffect, useState, memo } from 'react';
import { CandidateDrawerWrapper } from './CandidateDrawer.style';
import UserAvatar from '@iso/assets/images/2.jpg';
import UserIcon from '@iso/assets/images/icon/opportunity/user.svg';
import TimesIcon from '@iso/assets/images/icon/opportunity/times.svg';
import HiringIcon from '@iso/assets/images/icon/opportunity/hiring-progress.svg';
import ApplicationIcon from '@iso/assets/images/icon/opportunity/application-outline.svg';
import ConversationIcon from '@iso/assets/images/icon/opportunity/conversation.svg';
import NoteIcon from '@iso/assets/images/icon/opportunity/notes.svg';
import HiringTab from './HiringTab';
import ApplicationTab from './ApplicationTab';
import ConversationTab from './ConversationTab';
import NoteTab from './NoteTab';

const CandidateDrawer = ({ visible, onClose, candidateId, dataJob }) => {
  const [data, setData] = useState([]);
  const item = dataJob && dataJob.find((item) => item.code === candidateId);
  const name = item?.freelancer[0]?.fullname;
  const occupation = item?.freelancer[0]?.professional;
  const status = item?.status;

  useEffect(() => {
    setData({
      name: name,
      occupation: occupation || 'Software Engineer',
      country: 'Singapore',
    });
  }, [name, item, occupation]);

  const tabItem = [
    {
      key: 'hiringProgress',
      title: 'Hiring Progress',
      icon: HiringIcon,
      content: <HiringTab status={status} candidateId={candidateId} visible={visible} />,
    },
    {
      key: 'application',
      title: 'Application',
      icon: ApplicationIcon,
      content: <ApplicationTab />,
    },
    {
      key: 'conversation',
      title: 'Conversation',
      icon: ConversationIcon,
      content: <ConversationTab />,
    },
    {
      key: 'note',
      title: 'Notes',
      icon: NoteIcon,
      content: <NoteTab />,
    },
  ];

  return (
    <Drawer width={700} visible={visible} onClose={onClose} closable={false}>
      <CandidateDrawerWrapper>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Avatar src={UserAvatar} size={60} />
            <div className='ml-20'>
              <strong className='text-16'>{data?.name}</strong>
              <p className='text-light-gray text-13'>
                {data?.occupation}, {data?.country}
              </p>
            </div>
          </div>
          <div>
            <button className='app-button button-outline'>
              <img src={UserIcon} alt='profile' />
              <span className='ml-10 text-11'>View Profile</span>
            </button>
            <img src={TimesIcon} alt='close' className='ml-20 cursor-pointer' onClick={onClose} />
          </div>
        </div>
        <Tabs defaultActiveKey='hiringProgress' className='app-tabs'>
          {tabItem.map((item) => (
            <Tabs.TabPane
              tab={
                <div className='flex items-center gap-x-10'>
                  <img src={item.icon} alt={item.title} />
                  <span>{item.title}</span>
                </div>
              }
              key={item.key}
            >
              {item.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </CandidateDrawerWrapper>
    </Drawer>
  );
};

export default memo(CandidateDrawer);
