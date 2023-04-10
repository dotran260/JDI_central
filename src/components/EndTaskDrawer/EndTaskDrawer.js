import { Avatar, Drawer, Form, DatePicker } from 'antd';
import React from 'react';
import CompanyLogo from '@iso/assets/images/company-logo.png';
import EmployeeAvatar from '@iso/assets/images/2.jpg';
import { DrawerWrapper } from './EndTaskDrawer.style';
import moment from 'moment';
import { formatMoney } from '@iso/lib/helpers/money';
import { Input } from 'antd';
import { updateEndTask } from '../../api/task';
import { useParams } from 'react-router';

const { TextArea } = Input;
const EndTaskDrawer = ({ visible, onClose, paymentId, matchId, dataProps }) => {
  const params = useParams();

  const handleEndTask = () => {
    updateEndTask(params?.id);
    onClose();
  };
  return (
    <Drawer width={600} visible={visible} onClose={onClose}>
      {true ? (
        <DrawerWrapper>
          <div className='title'>End Task Note</div>
          <p className='text-13'>Task</p>
          <div className='flex items-center mt-10'>
            <img src={CompanyLogo} alt='company' />
            <div>
              <strong className='text-14'>Data name</strong>
              <p className='text-light-gray text-11'>
                <strong>companyName</strong>, count ry
              </p>
            </div>
          </div>
          <p className='text-13 mt-20'>Employee</p>
          <div className='flex items-center mt-10'>
            <Avatar src={EmployeeAvatar} className='small-avatar' />
            <strong className='text-14 ml-15'>Robert Fox</strong>
          </div>
          <div>
            <p className='text-13 mt-20'>End Month</p>
            <Form.Item name={'lastApplyDate'} className='w-full m-auto' rules={[{ required: true, message: 'Please pick your Last Apply Date!' }]}>
              <DatePicker
                className='w-full m-auto text-sm font-bold'
                bordered={true}
                format={'DD-MM-YYYY'}
                disabledDate={(current) => {
                  let customDate = moment().add(1, 'days').format('YYYY-MM-DD');
                  return current && current <= moment(customDate, 'YYYY-MM-DD');
                }}
              />
            </Form.Item>
          </div>
          <div>
            <p className='text-13 mt-20'>Message</p>
            <TextArea className='textArea' rows={3} placeholder='maxLength is 500' maxLength={500} />
          </div>
          <button onClick={handleEndTask} className='app-button w-full mt-40 p-16'>
            Complete Task
          </button>
        </DrawerWrapper>
      ) : (
        'Loading...'
      )}
    </Drawer>
  );
};

export default EndTaskDrawer;
