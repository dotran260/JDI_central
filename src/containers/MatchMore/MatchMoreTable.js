import { Avatar, Table } from 'antd';
import React, { useEffect } from 'react';
import ChatIcon from '@iso/assets/images/icon/chat.svg';
import UserAvatar from '@iso/assets/images/2.jpg';
import MailIcon from '@iso/assets/images/icon/opportunity/interview/mail.svg';
import SlimTickIcon from '@iso/assets/images/icon/opportunity/interview/slim-tick.svg';
import { useDispatch, useSelector } from 'react-redux';
import MatchAction from '@iso/redux/match/actions';
const { getMatchMore } = MatchAction;

const MatchMoreTable = ({ data, role }) => {
  const dispatch = useDispatch();
  const { dataMatchMore } = useSelector((state) => state.match);

  useEffect(() => {
    dispatch(getMatchMore(role));
  }, [dispatch, role]);
  const columns = [
    {
      title: 'Freelancer',
      dataIndex: 'freelancer',
      key: 'name',
      render: (_, record) => (
        <div className='flex items-center gap-x-10'>
          <Avatar src={UserAvatar} size={32} />
          <strong>{record?.fullname}</strong>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_, record) => <p>{record?.professional}</p>,
    },
    {
      title: 'Exp. Years',
      dataIndex: 'exp',
      key: 'exp',
      render: (_, record) => <p>{record?.experienceLevel}</p>,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <div className='flex items-center gap-x-10'>
          {record?.isRequested ? (
            <button className='app-button button-outline disabled'>
              <img src={SlimTickIcon} alt='mail' />
              <p className='ml-10 text-dark-gray text-11'>Send Request</p>
            </button>
          ) : (
            <button className='app-button'>
              <img src={MailIcon} alt='mail' />
              <strong className='ml-10 text-white text-11'>Send Request</strong>
            </button>
          )}
          <button className='icon-button outline'>
            <img src={ChatIcon} alt='chat' />
          </button>
        </div>
      ),
    },
  ];
  return <Table className='app-table' rowKey='code' columns={columns} dataSource={dataMatchMore?.data?.data} pagination={true} />;
};

export default MatchMoreTable;
