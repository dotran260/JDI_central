import CompanyLogo from '@iso/assets/images/company-logo.png';
import ChatIcon from '@iso/assets/images/icon/chat.svg';
import { Table } from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import AppPagination from '../../components/AppPagination/AppPagination';
import PaymentStatusTag from '../../components/PaymentStatusTag';
import TaskStatusTag from '../../components/TaskStatusTag';
import { useSelector, useDispatch } from 'react-redux';
import useQuery from '@iso/hooks/useQuery';
import TaskAction from '@iso/redux/tasks/actions';

const { getJobTask } = TaskAction;

const AllTasksTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const query = useQuery();
  const { dataTask, isLoading } = useSelector((state) => state.tasks);
  // const [current, setCurrent] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(getJobTask());
  }, [dispatch]);

  const dataSource = dataTask?.result?.data;

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Task',
      render: (_text, record) => {
        return (
          <div className='flex items-center'>
            <img src={CompanyLogo} alt='company' width={40} height={40} />
            <div className='ml-10 company-info'>
              <p>{record?.jobs?.jobName}</p>
              <p>
                <strong>{record?.jobs?.company.name}, </strong>
                {record?.jobs?.company?.companyLocation}
              </p>
            </div>
          </div>
        );
      },
      width: 300,
    },
    {
      key: 'employee',
      dataIndex: 'employee',
      title: 'Employee',
      render: (text, record) => <strong className='text-13'>{record?.employerCode}</strong>,
      width: 150,
    },
    {
      key: 'taskStatus',
      dataIndex: 'taskStatus',
      title: 'Task Status',
      render: (text, record) => <TaskStatusTag type={record?.taskStatus || 'hired'} />,
      width: 150,
    },
    {
      key: 'payType',
      dataIndex: 'payType',
      title: 'Pay Type',
      render: (text, record) => <p>{record?.payType}</p>,
      width: 100,
    },
    {
      key: 'paymentStatus',
      dataIndex: 'paymentStatus',
      title: 'Payment Status',
      render: (text, record) => <PaymentStatusTag type={record?.paymentStatus} />,
      width: 150,
    },
    {
      key: 'paymentPeriod',
      dataIndex: 'paymentPeriod',
      title: 'Payment Period',
      render: (text) => {
        return (
          <div>
            {text ? (
              <>
                <p>{moment(text).format('MMMM') + ' ' + moment(text).format('YYYY')}</p>
              </>
            ) : (
              <span>--</span>
            )}
          </div>
        );
      },
      width: 150,
    },
    {
      key: 'date',
      dataIndex: 'date',
      title: 'Date',
      render: (_, record) => <span>{moment(record?.created).format('DD MMM YYYY')}</span>,
      width: 150,
    },
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Action',
      render: (_text, _record) => {
        return (
          <div className='icon-button outline'>
            <img src={ChatIcon} alt='chat' />
          </div>
        );
      },
      width: 80,
    },
  ];

  return (
    <div className='w-full'>
      <Table
        scroll={{ x: 1000 }}
        dataSource={dataSource}
        columns={columns}
        rowKey='code'
        pagination={true}
        loading={isLoading}
        className='app-table company-table'
        onRow={(record) => ({
          onClick: () => {
            history.push(`${match.url}/${record.code}`);
          },
        })}
      />
      {/* <div className='mt-32 company-footer'>
        <AppPagination total={70} pagination={true} current={current} pageSize={pageSize} setCurrent={setCurrent} setPageSize={setPageSize} />
      </div> */}
    </div>
  );
};

export default React.memo(AllTasksTable);
