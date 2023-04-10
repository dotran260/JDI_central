import React, { memo, useEffect, useState } from 'react';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { CalendarContainer } from './Calendar.style';
import InterviewAction from '@iso/redux/interview/actions';
import { useSelector, useDispatch } from 'react-redux';
import { updateInterviews } from '../../api/jobs';
import { insertHistory, updateStatus } from '../../api/match';
import { notification } from '@iso/components';

const { getInterview } = InterviewAction;
// const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const daysInWeek = [20, 21, 22, 23, 24, 25, 26];

const Calendar = ({ matchId, onlineLinkInput, handleAcceptInterview }) => {
  const dispatch = useDispatch();
  const { dataInterview } = useSelector((state) => state.interview);
  const { code } = dataInterview?.result;
  const today = new Date().getDate();
  const [timeRange, setTimeRange] = useState([]);
  const [worksList, setWorksList] = useState([]);
  const { interviewLength } = dataInterview.result;

  useEffect(() => {
    dispatch(getInterview(matchId));
  }, [dispatch, matchId]);

  useEffect(() => {
    const interviewResult = dataInterview?.result;
    if (interviewResult?.dateTimeRange) {
      setTimeRange(interviewResult.dateTimeRange);
    }
  }, [dataInterview]);
  const isValidLink = (link) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };
  const handleUpdateStatus = async () => {
    if (onlineLinkInput.length > 0 && isValidLink(onlineLinkInput)) {
      await updateInterviews(code, worksList, onlineLinkInput);
      await insertHistory(matchId, 'interview', 'Admin selected calendar');
      await updateStatus(matchId, 'interview', true);
      handleAcceptInterview();
    } else {
      // handle invalid link input
      return notification('error', 'Invalid link input');
    }
  };

  useEffect(() => {
    const worksList = [];
    let currentDate = null;
    let currentDayList = null;

    for (let i = 0; i < timeRange.length; i++) {
      const start = new Date(timeRange[i].start);
      const end = new Date(timeRange[i].end);
      for (let time = start; time <= end; time.setMinutes(time.getMinutes() + interviewLength)) {
        const day = time.getDate();
        if (day !== currentDate) {
          currentDate = day;
          currentDayList = {
            date: new Date(time.toDateString()),
            hours: [],
          };
          worksList.push(currentDayList);
        }
        const hour = time.getHours();
        const minutes = time.getMinutes();
        currentDayList.hours.push({
          name: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`,
          disabled: false,
        });
      }
    }
    setWorksList(worksList);
  }, [timeRange, interviewLength]);

  const handleDisable = (dayIndex, hourIndex) => {
    const updatedData = [...worksList];
    updatedData[dayIndex].hours[hourIndex].disabled = true;
    setWorksList(updatedData);
  };
  const handleNextWeek = () => {
    console.log('handleNextWeek');
  };

  const handlePrevWeek = () => {
    console.log('handlePrevWeek');
  };

  return (
    <>
      <CalendarContainer>
        <div className='calendarContainer'>
          <div className='calendarWeek'>
            <button onClick={handlePrevWeek} className='btnWeek btnPrev'>
              {<LeftCircleFilled />}
            </button>
            <h2 className='calendarTextWeek'> Week 1</h2>
            <button onClick={handleNextWeek} className='btnWeek btnNext'>
              {<RightCircleFilled />}
            </button>
          </div>
          <table className='calendarTable'>
            <thead>
              <tr>
                {worksList.map((day, index) => (
                  <th key={index} className={`calendarDaysOfWeek ${day === today ? 'active' : ''}`}>
                    {day?.date.toString().split(' ')[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {worksList.map((day, index) => (
                  <td key={index} className={`calendarDaysOfMonth ${day === today ? 'active' : ''}`}>
                    {(day?.date).toString().split(' ')[2]}
                  </td>
                ))}
              </tr>
              <tr>
                {worksList.map((day, indexData) => (
                  <td key={indexData} className='tdWorkingDay'>
                    <div className='wrapWorkingDay'>
                      {day.hours.map((work, indexWL) => {
                        return (
                          <button
                            key={indexWL}
                            className='btnWorkingDay btn-picked'
                            disabled={work?.disabled}
                            onClick={() => handleDisable(indexData, indexWL)}
                          >
                            {work?.name}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CalendarContainer>
      <button
        onClick={() => {
          handleUpdateStatus();
        }}
        className='app-button p-16 mt-40 w-full'
      >
        Accept Interview
      </button>
    </>
  );
};

export default memo(Calendar);
