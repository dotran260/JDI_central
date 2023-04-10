import CompanyLogo from '@iso/assets/images/company-logo.png';
import ChatIcon from '@iso/assets/images/icon/chat.svg';
import LeftArrow from '@iso/assets/images/icon/left-arrow.svg';
import MoreIcon from '@iso/assets/images/icon/more.svg';
import CashIcon from '@iso/assets/images/icon/task/cash.svg';
import DateHiredIcon from '@iso/assets/images/icon/task/date-hired.svg';
import EditIcon from '@iso/assets/images/icon/task/edit.svg';
import OpenViewGreenIcon from '@iso/assets/images/icon/task/open-view-green.svg';
import OpenViewIcon from '@iso/assets/images/icon/task/open-view.svg';
import PositionIcon from '@iso/assets/images/icon/task/position.svg';
import WorkingModeIcon from '@iso/assets/images/icon/task/working-mode.svg';
import WorkLoadIcon from '@iso/assets/images/icon/task/workload.svg';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { Col, Popover, Row, Spin } from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PaymentRequestDrawer from '../../components/PaymentRequestDrawer/PaymentRequestDrawer';
import { default as PaymentStatus, default as PaymentStatusTag } from '../../components/PaymentStatusTag';
import TaskStatusTag from '../../components/TaskStatusTag';
import { formatMoney } from '@iso/lib/helpers/money';
import { useParams } from 'react-router-dom';
import { DetailTaskWrapper, Separator } from './View.style';
import EndTaskIcon from '@iso/assets/images/icon/task/end.svg';
import { useDispatch, useSelector } from 'react-redux';
import TaskAction from '@iso/redux/tasks/actions';
import MatchAction from '@iso/redux/match/actions';
import EndTaskDrawer from '../../components/EndTaskDrawer/EndTaskDrawer';
import { getPaymentSalaryApi } from '../../api/task';
const { getJobMatchOne } = MatchAction;
const { getTaskPayment } = TaskAction;

const Tasks = () => {
  const dispatch = useDispatch();
  const { dataPayment, isLoading } = useSelector((state) => state.tasks);
  const { dataMatchOne } = useSelector((state) => state.match);
  const history = useHistory();
  const params = useParams();
  const linkPayment = params.id;
  const [paymentRequestDrawer, setPaymentRequestDrawer] = useState(false);
  const [endTaskDrawer, setEndTaskDrawer] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [matchId, setMatchId] = useState(null);
  const [dataProps, setDataProps] = useState({});
  const [dataSalaryDetail, setDataSalaryDetail] = useState({});
  const { data } = dataPayment[0];
  const { confirmPayType, confirmWorkLoad, confirmWorkingMode, confirmSalary } = dataSalaryDetail ?? {};
  const { job, match, user } = dataMatchOne?.result ?? {};
  console.log(job?.jobName);
  useEffect(() => {
    getPaymentSalaryApi(linkPayment).then((res) => {
      setDataSalaryDetail(res?.result);
    });
  }, [linkPayment]);

  useEffect(() => {
    dispatch(getTaskPayment(linkPayment));
  }, [dispatch, paymentRequestDrawer, linkPayment]);

  useEffect(() => {
    dispatch(getJobMatchOne(linkPayment));
  }, [dispatch, linkPayment]);
  const dataSource = {
    name: 'Product Designer',
    companyName: 'ICOIN WORKSHOP Corp.',
    country: 'Singapore',
    status: 'inProgress',
    sheetEditDate: '2022-01-02',
    salary: '1000',
    payType: 'hourly',
    position: 'Product Designer',
    workingMode: 'Remote',
    workload: '40h/week',
    dateHired: '2022-01-02',
    activity: [
      {
        date: '2022-01-02',
        paymentStatus: 'requested',
        timeline: [
          {
            name: 'Robert Fox',
            action: 'submitted new payment request for',
            status: 'requested',
            date: '2022-01-02',
          },
          {
            name: 'ICOIN WORKSHOP Corp.',
            action: 'approved the payment',
            status: 'authorized',
            date: '2022-01-04',
          },
        ],
      },
      {
        date: '2022-01-04',
        paymentStatus: 'authorized',
        timeline: [
          {
            name: 'YOU',
            action: 'paid the payment',
            status: 'paid',
            date: '2022-01-04',
          },
        ],
      },
    ],
  };

  const handleOpenDrawer = (data, e) => {
    setPaymentId(data?.refCode);
    setMatchId(data?.matchCode);
    setDataProps(data);
    if (e.target.classList.contains('disabled')) {
      e.preventDefault();
    } else {
      setPaymentRequestDrawer(true);
    }
  };

  return (
    <Spin spinning={isLoading}>
      <LayoutContentWrapper>
        <DetailTaskWrapper>
          <Row gutter={[70, 30]}>
            <Col md={16} xs={24}>
              <div className='flex items-center'>
                <img className='cursor-pointer p-5' onClick={() => history.goBack()} src={LeftArrow} alt='back' />
                <div className='flex items-center ml-20'>
                  <img src={CompanyLogo} alt='company' />
                  <div className='ml-20 task-name'>
                    <p>{job?.jobName}</p>
                    <p>
                      <strong>{dataSource?.companyName}</strong>, {dataSource?.country}
                    </p>
                  </div>
                </div>
              </div>
              <Separator className='mt-30 mb-20' />
              <p className='task-activity'>Activity</p>
              <div>
                {data &&
                  data.map((item, index) => (
                    <div key={index} className='mb-30 mt-30'>
                      <div className='flex items-center justify-between mb-10'>
                        <div className='flex items-center'>
                          <img src={CashIcon} alt='cash' />
                          <p className='ml-10'>
                            Payment: <span>{item?.paymentPeriod}</span>
                          </p>
                        </div>
                        <PaymentStatusTag type={item?.status} />
                      </div>
                      <div className='timeline'>
                        {item?.matchHistory.map((x, i) => (
                          <div
                            key={i}
                            onClick={(e) => handleOpenDrawer(x, e)}
                            className={`timeline-item flex items-center justify-between cursor-pointer ${
                              i !== item?.matchHistory.length - 1 ? 'separator' : ''
                            } ${i === 0 ? 'active' : 'disabled'}`}
                          >
                            <div className={`${i === 0 ? 'active' : 'disabled'}`}>
                              {' '}
                              <strong>{x?.subject}</strong> {x?.message}
                            </div>
                            <p className={`${i === 0 ? 'active' : 'disabled'}`}>{moment(x?.paymentPeriod).format('DD MMM YYYY')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className='flex items-center justify-evenly'>
                <TaskStatusTag type={match?.taskStatus ?? 'hired'} />
                <button className='icon-button outline'>
                  <img src={ChatIcon} alt='chat' />
                </button>
                <button className='app-button button-outline'>
                  <div className='flex items-center justify-center'>
                    <span>View Job Post</span>
                    <img src={OpenViewIcon} className='ml-10' alt='view' />
                  </div>
                </button>
                <Popover
                  placement='bottomRight'
                  trigger={'click'}
                  overlayClassName='end-task-popover'
                  content={
                    <div onClick={() => setEndTaskDrawer(true)} className='flex items-center cursor-pointer'>
                      <img src={EndTaskIcon} alt='end task' />
                      <p className='ml-10'>End Task</p>
                    </div>
                  }
                >
                  <img src={MoreIcon} alt='more' className='p-5 cursor-pointer' />
                </Popover>
              </div>
              <div className='link-box'>
                <div className='flex items-center justify-between link-box-item'>
                  <p>Task Management</p>
                  <a href='a'>Update Link</a>
                </div>
                <div className='flex items-center justify-between link-box-item'>
                  <p>Contract</p>
                  <a href='a'>Update Link</a>
                </div>
                <div className='flex items-center justify-between link-box-item'>
                  <div className='flex items-center'>
                    <div className='icon-button'>
                      <img src={OpenViewGreenIcon} alt='view' />
                    </div>
                    <div className='ml-10'>
                      <p>
                        TimeSheet
                        <span className='ml-10 cursor-pointer'>
                          <img src={EditIcon} alt='edit' />
                        </span>
                      </p>
                      <p className='font-400 text-13'>Google Drive</p>
                    </div>
                  </div>
                  <p className='font-400 text-11'>{moment(dataSource?.sheetEditDate).format('DD MMM YYYY')}</p>
                </div>
              </div>
              <div className='info-box'>
                <div>
                  <strong className='text-24'>{formatMoney(confirmSalary)}</strong>
                  <p className='text-14 text-gray mt-2'>Salary ({confirmPayType})</p>
                </div>
                <div>
                  <p className='flex items-center'>
                    <img src={PositionIcon} alt='position' className='mr-10' />
                    Position: <strong className='ml-10'>{dataSource?.position}</strong>
                  </p>
                  <p className='flex items-center'>
                    <img src={WorkingModeIcon} alt='position' className='mr-10' />
                    Working Mode: <strong className='ml-10'>{confirmWorkingMode}</strong>
                  </p>
                  <p className='flex items-center'>
                    <img src={WorkLoadIcon} alt='position' className='mr-10' />
                    Workload: <strong className='ml-10'>{confirmWorkLoad}</strong>
                  </p>
                  <p className='flex items-center'>
                    <img src={DateHiredIcon} alt='position' className='mr-10' />
                    Date Hired: <strong className='ml-10'>{moment(dataSource?.dateHired).format('DD MMM YYYY')}</strong>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {paymentRequestDrawer && (
            <PaymentRequestDrawer
              visible={paymentRequestDrawer}
              onClose={() => setPaymentRequestDrawer(false)}
              paymentId={paymentId}
              dataProps={dataProps}
              matchId={matchId}
            />
          )}
          {endTaskDrawer && <EndTaskDrawer visible={endTaskDrawer} onClose={() => setEndTaskDrawer(false)} matchId={matchId} />}
        </DetailTaskWrapper>
      </LayoutContentWrapper>
    </Spin>
  );
};

export default React.memo(Tasks);
