import React, { useEffect, useState } from 'react';
import Tabs, { TabPane } from '@iso/components/uielements/tabs';
import BackArrowIcon from '@iso/assets/images/icon/backArrow.svg';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { CandidateProfileContainer } from './CandidateProfile.style';
import Tag from '@iso/components/Tag/tag';
import ClipboardTickIcon from '@iso/assets/images/icon/clipboardTick.svg';
import ClockIcon from '@iso/assets/images/icon/clock.svg';
import DesktopIcon from '@iso/assets/images/icon/desktop.svg';
import FinanceIcon from '@iso/assets/images/icon/finance.svg';
import LaptopIcon from '@iso/assets/images/icon/laptop.svg';
import SavedIcon from '@iso/assets/images/icon/Saved.svg';
import PenIcon from '@iso/assets/images/icon/pen.svg';
import User from '@iso/assets/images/user1.png';
import { useParams } from 'react-router';
import { StarFilled, EllipsisOutlined, DownloadOutlined } from '@ant-design/icons';
import { Popover, Col, Row } from 'antd';
import RichTextEditor from 'react-quill';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import FreelanceActions from '@iso/redux/freelance/actions';
import { isEmpty } from 'lodash';
const { getFreelancerDetail } = FreelanceActions;

function callback(key) {}
const CandidateProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [candidatePopover, setCandidatePopover] = useState(false);
  const { freelancerDetail } = useSelector((state) => state.freelance);
  const { fullname, experienceLevel, professional, describeYourself, hourlyRate, monthlyRate, skills, avatar, jobWorking, jobApplying } =
    freelancerDetail?.result?.user;

  useEffect(() => {
    dispatch(getFreelancerDetail(userId));
  }, [dispatch, userId]);
  return (
    <LayoutContentWrapper>
      <CandidateProfileContainer>
        <div className='headerCandidate'>
          <Link to={`/admin/dashboard/candidates`}>
            <img src={BackArrowIcon} alt='error' className='mr-20' />
          </Link>
          <div className='candidateInfo'>
            <img
              src={isEmpty(avatar) ? '' : `https://jdi-central-staging.s3.ap-southeast-1.amazonaws.com/${avatar[avatar.length - 1].path.origin}`}
              onError={(e) => {
                e.target.src =
                  'https://jdi-central-staging.s3.ap-southeast-1.amazonaws.com/avatar/user-000085_1680006188441_anita-austvika-tZ3PcuX-HMw-unsplash.jpg';
              }}
              className='candidateAvatar'
              alt='freelance'
            />
            <div className='candidateInfoWrap'>
              <h1 className='candidateInfoTitle'>{fullname}</h1>
              <p className='candidateInfoProfessional'>{professional}</p>
            </div>
          </div>
          <div className='candidateControl'>
            <StarFilled style={{ color: '#FFDE54' }} />
            <b>4.5</b> (2 comments)
            <a
              href='https://jdi-central-staging.s3.ap-southeast-1.amazonaws.com/resume/user-000065_1680531633591_pptexamples.ppt'
              className='btnResume ml-20 mr-20'
              download  
            >
              <DownloadOutlined width={12.8} height={13.33} className='mr-10' />
              Download Resume
            </a>
            <Popover
              visible={candidatePopover}
              onVisibleChange={(visible) => setCandidatePopover(visible)}
              trigger={['click']}
              overlayClassName='hiring-popover'
              placement='bottomLeft'
              content={
                <>
                  <p>Delete Job Post</p>
                  <p>End Job Post</p>
                </>
              }
            >
              <EllipsisOutlined rotate={90} />
            </Popover>
          </div>
        </div>
        <Row>
          <Col md={14}>
            <Tabs defaultActiveKey='1' onChange={callback} className='app-tabs'>
              <TabPane tab={'About'} key='1'>
                <Row>
                  <div className='w-full mb-20'>
                    <h4 className='mt-10 mb-10'>
                      <b>Overview</b>
                    </h4>
                    <RichTextEditor value={describeYourself} readOnly={true} theme={'bubble'} />
                  </div>
                  <div className='w-full mt-20 mb-20'>
                    <h4>
                      <b>Experience</b>
                    </h4>
                    <p>{experienceLevel}</p>
                  </div>
                </Row>
                <Row>
                  <div className='w-full mt-20 mb-20'>
                    <h4>
                      <b>Expertise</b>
                    </h4>
                    {/* <p>Experience des</p> */}
                  </div>
                  <div className='w-full mt-20 mb-20'>
                    <h4 className='mb-10'>
                      <b>Skills</b>
                    </h4>
                    {skills && skills.map((skill) => <Tag content={skill} />)}
                  </div>
                </Row>
                <Row>
                  <div className='w-full mt-20 mb-20'>
                    <h4>
                      <b>Work Experience</b>
                    </h4>
                  </div>
                </Row>
                <Row>
                  <div className='w-full mt-20 mb-20'>
                    <h4>
                      <b>Education</b>
                    </h4>
                  </div>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
          <Col md={10}>
            <div className='card'>
              <div className='w-full'>
                <Row className='w-full mb-10'>
                  <div className='head'>Expected Salary</div>
                </Row>
                <Row>
                  <Col md={12} className='salary'>
                    <div>{`S$ ${hourlyRate || 0}`}</div>
                    <p>Hourly</p>
                  </Col>
                  <Col md={12} className='salary'>
                    <div>{`S$ ${monthlyRate || 0}`}</div>
                    <p>Monthly</p>
                  </Col>
                </Row>
              </div>
              <hr className='w-full line' />
              <div>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={15} height={12} src={LaptopIcon} />
                    Jobs Working:
                  </div>
                  <div className='flex' style={{ margin: '0 0 0 5px' }}>
                    <b>{jobWorking?.jobName}</b>
                    {', '}
                    <span>{jobWorking?.role}</span>
                  </div>
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={10} height={14} src={PenIcon} />
                    <span>Jobs Applying:</span>
                  </div>
                  {jobApplying?.jobName && jobApplying?.role && (
                    <div>
                      <b>{jobApplying?.jobName}</b>
                      {', '}
                      <span>{jobApplying?.role}</span>
                    </div>
                  )}
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={14} height={10} src={FinanceIcon} />
                    Total Income:
                  </div>
                  <div style={{ color: '#1BD2A4', margin: '0 0 0 5px' }}> S$ 30,200.00</div>
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={12} height={14} src={ClipboardTickIcon} />
                    Completion Rate:
                  </div>
                  <div style={{ margin: '0 0 0 5px' }}> 80% </div>(8/9)
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={12} height={14} src={ClipboardTickIcon} />
                    Re-hired Rate:{' '}
                  </div>
                  <div style={{ margin: '0 0 0 5px' }}> 50%</div>
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={14} height={14} src={DesktopIcon} />
                    Working Mode:{' '}
                  </div>
                  <div style={{ margin: '0 0 0 5px' }}> Remote</div>
                </Row>
                <Row className='card-info'>
                  <div>
                    <img className='mr-10' alt='error' width={14} height={14} src={ClockIcon} />
                    Workload:{' '}
                  </div>
                  <div style={{ margin: '0 0 0 5px' }}> 40h/week</div>
                </Row>
              </div>
              <div>
                <button className='btnSaved'>
                  <span>
                    <img src={SavedIcon} className='SavedIcon mr-10' alt='error' />
                  </span>
                  <span>Add to Saved</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </CandidateProfileContainer>
    </LayoutContentWrapper>
  );
};

export default CandidateProfile;
