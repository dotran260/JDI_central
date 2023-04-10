import { Modal, notification } from 'antd';
import React from 'react';
import { formatMoney } from '@iso/lib/helpers/money';

import { ProcessPaymentModalWrapper, Separator, SolidSeparator } from './PaymentRequestDrawer.style';
import CopyIcon from '@iso/assets/images/icon/copy.svg';
import { useState } from 'react';
import { updatePayment, updatePaymentStatus } from '../../api/task';

const ProcessPaymentModal = ({ visible, onCancel, data, handleApprove, matchId, dataProps }) => {
  const [announcement, setAnnouncement] = useState(false);
  const { refCode, matchCode, refType, subject, status } = dataProps;
  const handleCopyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    notification.success({
      message: 'Copied to clipboard',
    });
  };

  const handleCloseModal = () => {
    onCancel();
    setTimeout(() => {
      setAnnouncement(false);
    }, 500);
  };
  const _handleApprove = () => {
    setAnnouncement(true);
    handleApprove();
    updatePayment(refCode, matchCode, 'payment', 'approved the payment', 'Talent Manager', 'paid');
    updatePaymentStatus(matchId);
  };

  return (
    <Modal width={540} visible={visible} onCancel={handleCloseModal} footer={null}>
      <ProcessPaymentModalWrapper>
        <p className='title mb-20'>Payment Details</p>
        {announcement ? (
          <p className='text-13'>
            <span className='text-gray'>The payment status is updated to </span>
            Paid
          </p>
        ) : (
          <>
            <p className='text-13 text-gray'>Send the amount shown to the banking details below:</p>
            <div className='text-center mt-20'>
              <p className='text-14'>Pay Amount</p>
              <p>
                <strong className='pay-amount'>{formatMoney(data?.salary)}</strong>
              </p>
            </div>
            <div className='flex justify-center mt-20'>
              <div className='detail-box'>
                <div className='flex items-center justify-between'>
                  <p className='text-13'>Payment ID</p>
                  <div>
                    <strong className='text-14 mr-10'>{data?.paymentId}</strong>
                    <img
                      onClick={() => handleCopyToClipboard(data?.paymentId)}
                      className='cursor-pointer'
                      src={CopyIcon}
                      width={14}
                      height={14}
                      alt='copy'
                    />
                  </div>
                </div>
                <Separator className='mt-20 mb-20' />
                <div className='flex items-center justify-between mt-15'>
                  <p className='text-13'>Account Holder</p>
                  <strong className='text-14'>{data?.accountHolder}</strong>
                </div>
                <div className='flex items-center justify-between mt-15'>
                  <p className='text-13'>Bank Name</p>
                  <strong className='text-14'>{data?.bankName}</strong>
                </div>
                <div className='flex items-center justify-between mt-15'>
                  <p className='text-13'>City</p>
                  <strong className='text-14'>{data?.city}</strong>
                </div>
                <div className='flex items-center justify-between mt-15'>
                  <p className='text-13'>Bank Account No.</p>
                  <div>
                    <strong className='text-14 mr-10'>{data?.bankAccountNo}</strong>
                    <img
                      onClick={() => handleCopyToClipboard(data?.bankAccountNo)}
                      className='cursor-pointer'
                      src={CopyIcon}
                      width={14}
                      height={14}
                      alt='copy'
                    />
                  </div>
                </div>
                <SolidSeparator className='mt-20 mb-20' />
                <p className='text-center text-13 text-red'>
                  Remember to check the numbers carefully and include the <strong>Payment ID</strong> in your transfer’s note.
                </p>
              </div>
            </div>
            <button onClick={_handleApprove} className='app-button p-16 w-full mt-50'>
              I’ve Paid Already!
            </button>
          </>
        )}
      </ProcessPaymentModalWrapper>
    </Modal>
  );
};

export default ProcessPaymentModal;
