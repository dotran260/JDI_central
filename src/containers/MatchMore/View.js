import React, { useEffect } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { MatchMoreWrapper, Separator } from './View.style';
import { Col, Input, Row } from 'antd';
import LeftArrowIcon from '@iso/assets/images/icon/left-arrow.svg';
import { useHistory, useParams } from 'react-router';
import { calendar } from '@iso/assets/images/icon/opportunity/jobdetail/index.js';
import RequiredIcon from '@iso/assets/images/icon/opportunity/interview/required-skill.svg';
import TickGreenIcon from '@iso/assets/images/icon/opportunity/interview/tick-green.svg';
import TimesIcon from '@iso/assets/images/icon/opportunity/times.svg';
import SearchIcon from '@iso/assets/images/icon/search.svg';
import FilterIcon from '@iso/assets/images/icon/filter.svg';
import MatchMoreTable from './MatchMoreTable';
import RichTextEditor from 'react-quill';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import JobsAction from '@iso/redux/jobs/actions';
const { getJobsDetail } = JobsAction;

const MatchMorePage = () => {
  const dispatch = useDispatch();
  const { jobsDetail } = useSelector((state) => state.jobs);
  const history = useHistory();
  const { id } = useParams();
  const { jobName, expertiseTags, role, requiredSkills, details, created, lastApplyDatedata } = jobsDetail.data || {};
  console.log(role);
  useEffect(() => {
    dispatch(getJobsDetail(id));
  }, [dispatch, id]);

  return (
    <LayoutContentWrapper>
      <MatchMoreWrapper>
        <Row gutter={24}>
          {/* Job Detail */}
          <Col md={10}>
            <div className='container'>
              <div className='flex items-center pb-30'>
                <img onClick={() => history.goBack()} className='cursor-pointer' src={LeftArrowIcon} alt='left-arrow' />
                <strong className='text-24 ml-20'>{jobName}</strong>
              </div>
              <div className='scroll-section'>
                <div className='flex items-center gap-x-20 flex-wrap'>
                  <div className='flex items-center gap-x-5'>
                    <img src={calendar} alt='calendar' />
                    <p>Remain:</p>
                    <strong>
                      {moment(created).format('DD MMM YYYY')} - {moment(lastApplyDatedata).format('DD MMM YYYY')}
                    </strong>
                  </div>
                </div>
                <Separator className='mt-20 mb-20' />
                <div className='flex items-center flex-wrap mb-20'>
                  {expertiseTags &&
                    expertiseTags.map((item, index) => (
                      <span key={index} className='skill-tag mr-5'>
                        {item}
                      </span>
                    ))}
                </div>
                <strong className='text-16'>JOB DESCRIPTION</strong>
                <div className='ml-20 mt-20'>
                  <RichTextEditor value={details && details} readOnly={true} theme={'bubble'} />
                </div>
                <Separator className='mt-20 mb-20' />
                <div className='ml-15'>
                  <div className='flex items-center'>
                    <img src={RequiredIcon} alt='required' />
                    <p className='text-14 text-light-gray ml-10'>Requried Skills</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    {requiredSkills &&
                      requiredSkills.map((item, index) => (
                        <div key={index} className='flex items-center gap-x-10 ml-15 mt-10'>
                          <img src={TickGreenIcon} alt='tick-green' />
                          <strong>{item}</strong>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={14}>
            <div className='container'>
              <div className='flex items-center'>
                <img src={TimesIcon} alt='times' />
                <strong className='text-24 text-light-green ml-10'>Match more</strong>
              </div>
              <div className='flex items-center mt-30'>
                <Input prefix={<img src={SearchIcon} alt='search' />} className='app-input' placeholder='Top matches' />
                <Input suffix={<img src={FilterIcon} alt='search' />} className='app-input filter-input ml-10' placeholder='Filter' />
              </div>
              <div className='mt-40'>
                <MatchMoreTable role={role} />
              </div>
            </div>
          </Col>
        </Row>
      </MatchMoreWrapper>
    </LayoutContentWrapper>
  );
};

export default MatchMorePage;
