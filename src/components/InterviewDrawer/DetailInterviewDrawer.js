import { Drawer } from 'antd';
import React, { useEffect } from 'react';
import { InterviewDrawerWrapper } from './InterviewDrawer.style';
import CalendarIcon from '@iso/assets/images/icon/opportunity/interview/calendar.svg';
import ClockIcon from '@iso/assets/images/icon/opportunity/interview/clock.svg';
import LocationIcon from '@iso/assets/images/icon/opportunity/interview/location.svg';
import UserIcon from '@iso/assets/images/icon/opportunity/interview/user.svg';
import InfoIcon from '@iso/assets/images/icon/opportunity/interview/info.svg';
import InterviewAction from '@iso/redux/interview/actions';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

const { getInterview } = InterviewAction;

const DetailInterviewDrawer = ({ visible, onClose, candidateId }) => {
  const dispatch = useDispatch();
  const { dataInterview } = useSelector((state) => state.interview);
  const { employerCode, selectDate, meetingURL, interviewLength, interviewDes } = dataInterview?.result ?? {};
  console.log(employerCode);
  useEffect(() => {
    dispatch(getInterview(candidateId));
  }, [dispatch, candidateId]);

  const data = {
    timeRange: selectDate || 'The freelancer has not chosen a schedule.',
    name: employerCode || 'employerCode',
    candidateName: 'John Doe',
    date: '2021-05-20',
    location: 'Video Call',
    onlineLink: meetingURL || '',
    timeLength: interviewLength || 'interviewLength',
    note: interviewDes || 'Details or notes written by Employee to candidate is displayed here.',
  };

  return (
    <Drawer visible={visible} onClose={onClose} width={600}>
      <InterviewDrawerWrapper>
        <strong className='text-24'>Interview is scheduled</strong>
        <p className='text-14 mt-40 mb-15'>
          You have an interview with <strong>{data?.name}</strong> Details below:
        </p>
        <div className='container'>
          <div className='flex items-center mb-15'>
            <img src={CalendarIcon} alt='calendar' />
            <strong className='ml-15'>{data?.timeRange || 'not set'}</strong>
          </div>
          <div className='flex items-center mb-15'>
            <img src={ClockIcon} alt='clock' />
            <strong className='ml-15'>{data?.timeLength} mins</strong>
          </div>
          <div className='flex items-center mb-15'>
            <img src={LocationIcon} alt='location' className='self-baseline mt-2' />
            <div className='ml-15'>
              <p>
                <strong>{data?.location}</strong>
              </p>
              {data?.onlineLink && (
                <a className='online-link' href={data.onlineLink}>
                  {data?.onlineLink}
                </a>
              )}
            </div>
          </div>
          <div className='flex items-center mb-15'>
            <img src={UserIcon} alt='user' className='self-baseline mt-2' />
            <div className='ml-15'>
              <strong className='text-14'>Employer</strong>
              <p className='text-dark-gray text-13'>{data?.name}</p>
              <p className='mt-10'>
                <strong className='text-14'>Candidate</strong>
              </p>
              <p className='text-dark-gray text-13'>{data?.candidateName}</p>
            </div>
          </div>
          <div className='flex items-center mb-15'>
            <img src={InfoIcon} alt='info' />
            <p className='text-14 ml-15'>{data?.note}</p>
          </div>
        </div>
      </InterviewDrawerWrapper>
    </Drawer>
  );
};

export default React.memo(DetailInterviewDrawer);
