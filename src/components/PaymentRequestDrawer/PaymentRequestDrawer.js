import { Avatar, Drawer } from 'antd';
import React, { useEffect } from 'react';
import PaymentStatusTag from '../PaymentStatusTag';
import CompanyLogo from '@iso/assets/images/company-logo.png';
import EmployeeAvatar from '@iso/assets/images/2.jpg';
import { PaymentRequestDrawerWrapper, Separator } from './PaymentRequestDrawer.style';
import moment from 'moment';
import { formatMoney } from '@iso/lib/helpers/money';
import OpenViewGreen from '@iso/assets/images/icon/task/open-view-green.svg';
import { useState } from 'react';
import ProcessPaymentModal from './ProcessPaymentModal';

import { useDispatch, useSelector } from 'react-redux';
import TaskAction from '@iso/redux/tasks/actions';
import { getDetailPayment } from '../../api/task';
const { getTaskPaymentDetail } = TaskAction;

const PaymentRequestDrawer = ({ visible, onClose, paymentId, matchId, dataProps }) => {
  const dispatch = useDispatch();
  const { dataPaymentDetail, isLoading } = useSelector((state) => state.tasks);
  const [processPaymentModal, setProcessPaymentModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({
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
    paymentStatus: 'requested',
    totalTime: 200,
    totalPay: 12800,
    paymentId: 'FR100001',
    accountHolder: 'Robert Fox',
    bankName: 'ICBC',
    city: 'Singapore',
    bankAccountNo: '1234567890',
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
  });
  const { result } = dataPaymentDetail;
  console.log(paymentId);
  useEffect(() => {
    dispatch(getTaskPaymentDetail(paymentId));
  }, [dispatch, paymentId]);

  const handlePayment = (e) => {
    setProcessPaymentModal(true);
    setDisabled(true);
  };

  const handleApprove = () => {};

  return (
    <Drawer width={600} visible={visible} onClose={onClose}>
      {!isLoading ? (
        <PaymentRequestDrawerWrapper>
          <div className='title'>
            Payment Request <PaymentStatusTag type={result?.status} />
          </div>
          <p className='text-13'>Task</p>
          <div className='flex items-center mt-10'>
            <img src={CompanyLogo} alt='company' />
            <div>
              <strong className='text-14'>{data?.name}</strong>
              <p className='text-light-gray text-11'>
                <strong>{data?.companyName}</strong>, {data?.country}
              </p>
            </div>
          </div>
          <p className='text-13 mt-20'>Employee</p>
          <div className='flex items-center mt-10'>
            <Avatar src={EmployeeAvatar} className='small-avatar' />
            <strong className='text-14 ml-15'>{data?.activity[0].timeline[0].name}</strong>
          </div>
          <p className='text-13 mt-20'>Payment Period</p>
          <strong className='mt-10'>{moment(result?.patmentPeriod).format('MMMM YYYY')}</strong>
          <p className='text-13 mt-20'>Total Time</p>
          <p className='mt-10'>
            <strong>{result?.totalTime}</strong> hours
          </p>
          <p className='text-13 mt-20'>Total pay</p>
          <div className='flex items-center justify-between mt-10'>
            <strong>{formatMoney(data?.totalPay)}</strong>
            <p className='text-gray'>{`${formatMoney(data?.salary)}/${data?.payType}`}</p>
          </div>
          <p className='text-13 mt-20'>Employee Timesheet</p>
          <div className='flex items-center justify-between mt-10'>
            <p className='flex items-center text-green'>
              <img src={OpenViewGreen} alt='open' />
              <strong className='ml-10'>Timesheet</strong>
            </p>
            <p className='text-gray'>Google Drive</p>
          </div>
          <p className='text-gray'>{result?.timeSheet}</p>
          <Separator className='mt-25' />
          <p className='text-13 mt-20 mb-10'>Message</p>
          <strong>
            <p className='text-14'>{result?.message}</p>
          </strong>
          {result?.status === 'requested' && (
            <button
              onClick={() => setProcessPaymentModal(false)}
              className={`app-button w-full mt-40 p-16 ${result?.status === 'requested' ? 'disabled' : ''}`}
            >
              This request is pending approval by employer.
            </button>
          )}
          {result?.status === 'approved' && (
            <button onClick={handlePayment} className={`app-button w-full mt-40 p-16 ${disabled ? 'disabled' : ''}`}>
              Process Payment
            </button>
          )}
          {result?.status === 'paid' && (
            <button
              onClick={() => setProcessPaymentModal(false)}
              className={`app-button w-full mt-40 p-16 ${result?.status === 'paid' ? 'disabled' : ''}`}
            >
              This request is pending paid by freelancer.
            </button>
          )}
          {processPaymentModal && (
            <ProcessPaymentModal
              visible={processPaymentModal}
              onCancel={() => setProcessPaymentModal(false)}
              handleApprove={handleApprove}
              matchId={matchId}
              dataProps={dataProps}
              data={data}
            />
          )}
        </PaymentRequestDrawerWrapper>
      ) : (
        'Loading...'
      )}
    </Drawer>
  );
};

export default PaymentRequestDrawer;
