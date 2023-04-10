import ClockIcon from '@iso/assets/images/icon/opportunity/interview/clock.svg';
import InfoIcon from '@iso/assets/images/icon/opportunity/interview/info.svg';
import { Drawer, Input, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import { InterviewDrawerWrapper } from './InterviewDrawer.style';
import { useSelector, useDispatch } from 'react-redux';
import InterviewAction from '@iso/redux/interview/actions';

const { getInterview } = InterviewAction;

const UpdateInterviewDrawer = ({ visible, onClose, handleAcceptInterview, matchId }) => {
  const dispatch = useDispatch();
  const { dataInterview } = useSelector((state) => state.interview);
  const { interviewLength, timeZone, meetingURL, interviewDes } = dataInterview.result;

  useEffect(() => {
    dispatch(getInterview(matchId));
  }, [dispatch, matchId]);

  const data = {
    name: 'ICOIN WORKSHOP Corp.',
    onlineLink: 'https://meet.google.com',
    note: 'Details or notes written by Employee to candidate is displayed here.',
  };

  const [onlineLinkInput, setOnlineLinkInput] = useState(data?.onlineLink);

  return (
    <Drawer visible={visible} onClose={onClose} width={600}>
      <InterviewDrawerWrapper>
        <strong className='text-24'>Update Interview</strong>
        <p className='text-14 mt-40 mb-15'>
          <strong>{data?.name}</strong> would like to schedule an interview with you. Please pick a time & date.
        </p>
        <div className='container mb-15'>
          <div className='flex items-center mb-15'>
            <img src={ClockIcon} alt='clock' />
            <strong className='ml-15'>{interviewLength} mins</strong>
          </div>
          <div className='flex items-center'>
            <img src={InfoIcon} alt='info' />
            <p className='text-14 ml-15'>{interviewDes}</p>
          </div>
        </div>
        <p className='text-13 text-dark-gray mb-10'>
          Meeting Link <span className='text-red ml-5'>*</span>
        </p>
        <Input
          className='app-input'
          value={onlineLinkInput}
          onChange={(e) => setOnlineLinkInput(e.target.value)}
          placeholder='Meeting link is required for acceptance'
          required
        />
        <div className='flex items-center justify-between mt-15 mb-10'>
          <p className='text-13 text-dark-gray'>Block time slots</p>
          <Select className='app-select block-time-select' defaultValue={timeZone}>
            {/* <Select.Option value='1'>Singapore Time (GMT+8)</Select.Option>
            <Select.Option value='2'>Singapore Time (GMT+8)</Select.Option>
            <Select.Option value='3'>Singapore Time (GMT+8)</Select.Option> */}
          </Select>
        </div>
        <p className='text-11 text-light-gray mb-10'>Block time slots (if any) which you are unavailable for interview</p>

        <Calendar matchId={matchId && matchId} onlineLinkInput={onlineLinkInput} handleAcceptInterview={handleAcceptInterview} />
      </InterviewDrawerWrapper>
    </Drawer>
  );
};

export default React.memo(UpdateInterviewDrawer);
