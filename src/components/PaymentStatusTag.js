import React from 'react';

const PaymentStatusTag = ({ type }) => {
  switch (type) {
    case 'requested':
      return <div className='requested-tag'>Requested</div>;
    case 'declined':
      return <div className='declined-tag'>Declined</div>;
    case 'approved':
      return <div className='authorized-tag'>Approved</div>;
    case 'paid':
      return <div className='paid-tag'>Paid</div>;
    case 'received':
      return <div className='received-tag'>Received</div>;
    default:
      return <></>;
  }
};

export default PaymentStatusTag;
