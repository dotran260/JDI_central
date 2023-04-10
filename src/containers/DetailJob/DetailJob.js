import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getJobDetail } from '../../api/jobs';
import { colorCol, colorColAbout, ContainerJobDetail, styleIconGray } from './View.style';
import { ArrowLeftOutlined, FlagOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import {
  insocial,
  fbsocial,
  earthsocial,
  working,
  location,
  jobdes,
  testrequired,
  candidate,
  requiredSkills,
  haveSkills,
  calendar,
  checkBlue,
  checkGreen,
} from '@iso/assets/images/icon/opportunity/jobdetail/index.js';
import { Spin } from 'antd';
import CompanyLogo from '@iso/assets/images/company-logo.png';
import { Col, Row } from 'antd';
import RichTextEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

const DetailJob = () => {
  const params = useParams();
  const linkDetail = params?.id;
  const [detail, setDetail] = useState(null);
  const dateString = detail && detail?.created;
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  useEffect(() => {
    getJobDetail(linkDetail).then((res) => setDetail(res));
    // eslint-disable-next-line
  }, [linkDetail]);

  return (
    <ContainerJobDetail>
      {detail ? (
        <>
          <div className='headerJobDetail'>
            <Link to='/admin/dashboard/opportunities' className='linkBack'>
              <ArrowLeftOutlined style={{ marginRight: '12px' }} />
            </Link>
            <h3 className='headerTitle'>Job Details</h3>
          </div>
          <Row gutter={[48]} style={{ margin: '0 30px', paddingBottom: '30px' }}>
            <Col span={18} style={colorCol}>
              <div className='postedDateWrapper'>
                <div className='postedRole'>
                  {detail?.data?.freelanceType?.includes('Full-time') && detail?.data?.freelanceType?.includes('Part-time') ? (
                    <>
                      <p className='full-time'>Full-time</p>
                      <p className='part-time'>Part-time</p>
                    </>
                  ) : detail?.data?.freelanceType?.includes('Part-time') ? (
                    <p className='part-time'>Part-time</p>
                  ) : (
                    <p className='full-time'>Full-time</p>
                  )}
                </div>
                <p className='postedDate'>
                  Posted Date: <b>{formattedDate}</b>
                </p>
              </div>

              <div className='jobDetailInfo'>
                <h1>{detail?.data?.jobName}</h1>
                <div className='tagJobDetailInfo'>
                  <div className='infoRate'>
                    <img src={calendar} alt='error' className='mr-r' />
                    <span>
                      Remain:{' '}
                      <b>
                        {' '}
                        {moment(detail?.data?.created).format('DD MMM YYYY')} - {moment(detail?.data?.lastApplyDatedata).format('DD MMM YYYY')}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
              <hr width='100%' size='2px' color='#E8E8EA' style={{ marginBottom: '24px' }} />

              <div className='tagSkill'>{detail?.data?.expertiseTags && detail?.data?.expertiseTags.map((value, i) => <p key={i}>{value}</p>)}</div>

              <div className='jobDescription'>
                <h1>JOB DESCRIPTIONS</h1>
                <RichTextEditor value={detail?.data?.details} readOnly={true} theme={'bubble'} />
              </div>

              <hr width='100%' size='2px' color='#E8E8EA' style={{ margin: '24px 0' }} />

              <div className='skillWrap'>
                <div className='requiredSkills'>
                  <img src={requiredSkills} alt='error' className='mr-r' />
                  <p>Required Skills</p>
                </div>
                <Row>
                  {detail?.data?.requiredSkills &&
                    detail?.data?.requiredSkills.map((value, i) => (
                      <Col key={i} span={12}>
                        <div className='skillDescription'>
                          <img src={checkGreen} alt='error' className='mr-r' />
                          <span>{value}</span>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>

            <Col span={6}>
              {/* CLIENT BUDGET */}
              <div className='clientDescription' style={colorCol}>
                <div className='clientHeader'>
                  <h1 className='clientTitle'>CLIENT BUDGET</h1>
                  <h1 className='clientMoney'>USD {`$${detail?.data?.salaryFrom} - $${detail?.data?.salaryTo}`}</h1>
                  <p className='clientHourly'>{`${detail?.data?.payType} Rate`}</p>
                </div>
                <hr width='100%' size='2px' color='#E8E8EA' style={{ margin: '24px 0' }} />
                <div className='infoClient'>
                  <div className='infoDetail'>
                    <img src={jobdes} alt='error' className='imgClientIcon' />
                    <p>
                      Job Duration: <b>{`${detail?.data?.jobDurationNumber} ${detail?.data?.jobDuration} `}</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <img src={working} alt='error' className='imgClientIcon' />
                    <p>
                      Working Mode: <b>{detail?.data?.workingMode}</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <img src={location} alt='error' className='imgClientIcon' />
                    <p>
                      Location: <b>Singapore</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <img src={testrequired} alt='error' className='imgClientIcon' />
                    <p>
                      <b>Test required</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <img src={candidate} alt='error' className='imgClientIcon' />
                    <p>
                      <b>{detail?.data?.candidate}</b> candidates
                    </p>
                  </div>
                </div>
              </div>

              {/* ABOUT CLIENT */}
              <div className='clientDescription' style={colorColAbout}>
                <div className='clientHeader'>
                  <h1 className='clientTitle'>ABOUT CLIENT</h1>
                  <img src={CompanyLogo} width={60} height={60} alt='company-logo' />
                  <h1 className='clientBrand'>{detail?.data?.companys[0]?.name}</h1>
                  <p>{detail?.data?.companys[0]?.companyLocation}</p>
                </div>
                <hr width='100%' size='2px' color='#E8E8EA' style={{ margin: '24px 0' }} />

                <div className='infoClient'>
                  <div className='infoDetail'>
                    <p>
                      Freelancers are responsible for all sorts of things that traditional employees are not, such as setting their work hours,
                      keeping track of time spent on different projects, billing clients, and paying their own employment and business taxes.
                    </p>
                  </div>
                </div>
                <hr width='100%' size='2px' color='#E8E8EA' style={{ margin: '24px 0' }} />

                <div className='infoClient'>
                  <div className='infoDetail'>
                    <FlagOutlined style={styleIconGray} />
                    <p>
                      Headquarters: <b>{detail?.data?.companys[0]?.companyLocation}</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <InboxOutlined style={styleIconGray} />
                    <p>
                      Industries: <b>{detail?.data?.companys[0]?.companyIndustry.join(', ')}</b>
                    </p>
                  </div>
                  <div className='infoDetail'>
                    <UserOutlined style={styleIconGray} />
                    <p>
                      Employees: <b>20-50</b>
                    </p>
                  </div>
                  <div className='infoDetail block'>
                    <img src={insocial} alt='in-social' className='imgIcon' />
                    <img src={fbsocial} alt='fb-social' className='imgIcon' />
                    <img src={earthsocial} alt='earth-social' className='imgIcon' />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <Spin tip='Loading...' size='large' style={{ display: 'block' }} />
      )}
    </ContainerJobDetail>
  );
};

export default DetailJob;
