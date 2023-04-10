import React, { useState, useEffect, memo } from 'react';
import {
  selected,
  rejected,
  offer,
  interview,
  apply,
  hired,
  review,
  dropdown,
  checkapply,
} from '@iso/assets/images/icon/opportunity/hiring/index.js';
import { Popover } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import UpdateInterviewDrawer from '../InterviewDrawer/UpdateInterviewDrawer';
import DetailInterviewDrawer from '../InterviewDrawer/DetailInterviewDrawer';
import { useSelector, useDispatch } from 'react-redux';
import MatchAction from '@iso/redux/match/actions';
import { insertHistory } from '../../api/match';
import { styleApply, styleReview } from './CandidateDrawer.style';
const { getMatchHistory, updateMatchStatusRequest } = MatchAction;

const HiringTab = ({ data, status, candidateId, visible }) => {
  const dispatch = useDispatch();
  const { dataMatchHistory, dataMatch } = useSelector((state) => state.match);
  const [step, setStep] = useState(0);
  const [interviewPopover, setInterviewPopover] = useState(false);
  const [updateInterviewDrawer, setUpdateInterviewDrawer] = useState(false);
  const [detailInterviewDrawer, setDetailInterviewDrawer] = useState(false);
  const [statusChange, setStatusChange] = useState('apply');
  const { result } = dataMatchHistory;

  useEffect(() => {
    switch (status) {
      case 'apply':
        setStep(0);
        setStatusChange('selected');
        break;
      case 'selected':
        setStep(1);
        setStatusChange('interview');
        break;
      case 'interview':
        setStep(2);
        setStatusChange('review');
        break;
      case 'review':
        setStep(3);
        setStatusChange('offer');
        break;
      case 'offer':
        setStep(4);
        setStatusChange('hired');
        break;

      case 'hired':
        setStep(5);
        break;
      case 'rejected':
        setStep(6);
        setStatusChange('rejected');
        break;
      default:
        break;
    }
  }, [status, statusChange]);

  useEffect(() => {
    dispatch(getMatchHistory(candidateId));
  }, [dispatch, candidateId, step, visible]);

  const handleAcceptInterview = React.useCallback(() => {
    setUpdateInterviewDrawer(false);
    setDetailInterviewDrawer(true);
  }, []);

  const handleUpdateStatus = async () => {
    dispatch(updateMatchStatusRequest(candidateId, statusChange));
    insertHistory(candidateId, 'selected', 'selected candidate');
    setStep(step + 1);
  };

  const handleReview = async () => {
    dispatch(updateMatchStatusRequest(candidateId, statusChange));
    insertHistory(candidateId, 'review', 'review candidate');
    setStep(step + 1);
  };

  const handleRejected = async () => {
    dispatch(updateMatchStatusRequest(candidateId, 'rejected'));
    insertHistory(candidateId, 'rejected', 'rejected candidate');
    setStep(6);
  };
  return (
    <>
      <div className='flex items-center hiring-step'>
        <div key={0} className={`step ${step === 0 ? 'active' : ''} ${step > 0 ? 'disable' : ''}`}>
          New Applied
        </div>
        <div key={1} className={`step ${step === 1 ? 'active blue' : ''} ${step > 1 ? 'disable' : ''}`}>
          {step === 1 ? (
            <Popover
              visible={interviewPopover}
              onVisibleChange={(visible) => setInterviewPopover(visible)}
              trigger={['click']}
              overlayClassName='hiring-popover'
              placement='bottom'
              content={
                <>
                  <p
                    onClick={() => {
                      handleRejected();
                    }}
                    style={{ color: 'red' }}
                  >
                    Reject Candidate
                  </p>
                </>
              }
            >
              <span className={`${step >= 1 ? 'text-white' : ''}`}>Selected</span>
              <img src={dropdown} className='ml-5' alt='dropdown' width={8.5} />
            </Popover>
          ) : (
            <span className={`${step >= 1 ? 'text-white' : ''}`}>Selected</span>
          )}
        </div>
        <div key={2} className={`step ${step === 2 ? 'active' : ''} ${step > 2 ? 'disable' : ''}`}>
          {step === 2 ? (
            <Popover
              visible={interviewPopover}
              onVisibleChange={(visible) => setInterviewPopover(visible)}
              trigger={['click']}
              overlayClassName='hiring-popover'
              placement='bottom'
              content={
                <>
                  <p
                    onClick={() => {
                      setDetailInterviewDrawer(true);
                      setInterviewPopover(false);
                    }}
                  >
                    Interview Details
                  </p>
                  {!dataMatch?.result?.data[0]?.interviewInviteted && (
                    <p
                      onClick={() => {
                        setUpdateInterviewDrawer(true);
                        setInterviewPopover(false);
                      }}
                    >
                      Update Interview
                    </p>
                  )}
                </>
              }
            >
              <span className={`${step >= 2 ? 'text-white' : ''}`}>Interview</span>
              <img src={dropdown} className='ml-5' alt='dropdown' width={8.5} />
            </Popover>
          ) : (
            <span className={`${step >= 2 ? 'text-white' : ''}`}>Interview</span>
          )}
        </div>
        <div key={3} className={`step ${step === 3 ? 'active orange' : ''} ${step > 3 ? 'disable' : ''}`}>
          Review
        </div>
        <div key={4} className={`step ${step === 4 ? 'active sky' : ''} ${step > 4 ? 'disable' : ''}`}>
          Offer
        </div>
        {step !== 6 ? (
          <div key={5} className={`${step === 5 ? 'active green' : ''} ${step > 5 ? 'disable' : ''}`}>
            Hired
          </div>
        ) : (
          <div key={6} className={`${step === 6 ? 'active red' : ''} ${step > 5 ? 'disable' : ''}`}>
            Rejected
          </div>
        )}
      </div>
      <div className='mt-20'>
        {step === 0 && (
          <Button onClick={handleUpdateStatus} style={styleApply}>
            <div>
              <img src={checkapply} className='progress-img' alt='error' />
              <span style={{ color: '#ffff' }}>Assessed this candidate</span>
            </div>
          </Button>
        )}
        {step === 2 && (
          <>
            {!dataMatch?.result?.data[0]?.interviewInviteted ? (
              <Button
                onClick={() => {
                  setUpdateInterviewDrawer(true);
                }}
                style={styleApply}
              >
                <div>
                  <img src={checkapply} className='progress-img' alt='error' />
                  <span style={{ color: '#ffff' }}> Accept interview</span>
                </div>
              </Button>
            ) : (
              <Button
                className='mt-20'
                onClick={() => {
                  handleReview();
                }}
                style={styleReview}
              >
                <div>
                  <img src={checkapply} className='progress-img' alt='error' />
                  <span style={{ color: '#ffff' }}>Review</span>
                </div>
              </Button>
            )}
          </>
        )}
        {(step === 0 || step === 1 || step === 2 || step === 3 || step === 4 || step === 5 || step === 6) && (
          <>
            {result &&
              result.map((value, indexValue) => (
                <div key={indexValue} className='progress-wrapper'>
                  {value?._id}
                  <div className='progress-container'>
                    {value?.root.map((item, indexItem) => (
                      <div key={indexItem} className='progress-item'>
                        <strong>{item?.subject}</strong>
                        <span> {item?.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* <div className='progress-wrapper'>
              <img src={hired} className='progress-img' alt='error' />
              Hired
              <div className='progress-container'>
                {items.hired.map((item) => (
                  <div key={item._id} className='progress-item'>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='progress-wrapper'>
              <img src={offer} className='progress-img' alt='error' />
              Offer
              <div className='progress-container'>
                {items.offer.map((item) => (
                  <div key={item._id} className='progress-item'>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='progress-wrapper'>
              <img src={review} className='progress-img' alt='error' />
              Review
              <div className='progress-container'>
                {items.review.map((item) => (
                  <div key={item._id} className='progress-item'>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='progress-wrapper'>
              <img src={interview} className='progress-img' alt='error' />
              Interview
              {items.interview.map((item, index) => (
                <div
                  key={item._id}
                  onClick={(e) => {
                    if (e.target.classList.contains('disabled')) {
                      e.preventDefault();
                    } else {
                      setDetailInterviewDrawer(true);
                    }
                  }}
                  className={`progress-container ${index === 0 ? 'active' : 'disabled'}`}
                >
                  <div className={`progress-item ${index === 0 ? 'active' : 'disabled'}`}>
                    <p className={`${index === 0 ? 'active' : 'disabled'}`}>{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='progress-wrapper'>
              <img src={selected} className='progress-img' alt='error' />
              Selected
              <div className='progress-container'>
                {items.selected.map((item) => (
                  <div key={item._id} className='progress-item'>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='progress-wrapper'>
              <img src={apply} className='progress-img' alt='error' />
              New Applied
              <div className='progress-container'>
                {items.apply.map((item) => (
                  <div key={item._id} className='progress-item'>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </>
        )}
      </div>
      {updateInterviewDrawer && (
        <UpdateInterviewDrawer
          visible={updateInterviewDrawer}
          onClose={() => setUpdateInterviewDrawer(false)}
          handleAcceptInterview={handleAcceptInterview}
          matchId={candidateId}
        />
      )}
      {detailInterviewDrawer && (
        <DetailInterviewDrawer visible={detailInterviewDrawer} onClose={() => setDetailInterviewDrawer(false)} candidateId={candidateId} />
      )}
    </>
  );
};

export default memo(HiringTab);
