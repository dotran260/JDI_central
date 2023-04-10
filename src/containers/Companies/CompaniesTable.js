import CompanyLogo from '@iso/assets/images/company-logo.png';
import EarthLogo from '@iso/assets/images/company/earth.svg';
import EmployeeLogo from '@iso/assets/images/company/employee.svg';
import FacebookLogo from '@iso/assets/images/company/facebook.svg';
import HeadquarterLogo from '@iso/assets/images/company/headquarter.svg';
import IndustryLogo from '@iso/assets/images/company/industry.svg';
import InstagramLogo from '@iso/assets/images/company/instagram.svg';
import ChatIcon from '@iso/assets/images/icon/chat.svg';
import CompanyActions from '@iso/redux/company/actions';
import { Popover, Spin, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppPagination from '../../components/AppPagination/AppPagination';
import useQuery from '@iso/hooks/useQuery';

import ChatDrawer from '../../components/ChatDrawer/ChatDrawer';

const { getListCompany } = CompanyActions;

const CompaniesTable = () => {
  const query = useQuery();
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showChat, setShowChat] = useState(false);
  const { company, isLoading } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(getListCompany({ page: current, limit: pageSize }));
  }, [dispatch, query, current, pageSize]);

  useEffect(() => {
    if (!isLoading) {
      setCurrent(company[0]?.metadata[0].pageCurrent);
    }
  }, [isLoading, company]);

  useEffect(() => {
    if (query.get('page') && query.get('limit')) {
      setCurrent(Number(query.get('page')));
      setPageSize(Number(query.get('limit')));
    }
  }, [query]);

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Company',
      render: (_text, record) => {
        return (
          <Popover
            placement='bottom'
            className='flex items-center'
            content={
              <div className='company-popover'>
                <div className='flex flex-col items-center company-name'>
                  <img src={CompanyLogo} alt='company' width={60} height={60} />
                  <p>{record?.name}</p>
                  <p>{record?.companyLocation}</p>
                </div>
                <div>
                  <p className='company-description'>{record?.aboutBusiness}</p>
                </div>
                <div className='company-info'>
                  <div className='flex items-center'>
                    <img src={HeadquarterLogo} alt='headquarter' />
                    <p>
                      HeadQuarters: <strong>{record?.companyLocation}</strong>
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <img src={IndustryLogo} alt='headquarter' />
                    <p>
                      Industries:{' '}
                      <strong>
                        <strong>Industries</strong>
                      </strong>
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <img src={EmployeeLogo} alt='headquarter' />
                    <p>
                      Employees: <strong>{record?.companySize}</strong>
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-x-24 company-logo'>
                  <a href={record?.linkedInURL ?? ''} target='_blank' rel='noopener noreferrer'>
                    <img src={InstagramLogo} alt='headquarter' />
                  </a>
                  <a href={record?.fbURL ?? ''} target='_blank' rel='noopener noreferrer'>
                    <img src={FacebookLogo} alt='headquarter' />
                  </a>
                  <a href={record?.websiteURL ?? ''} target='_blank' rel='noopener noreferrer'>
                    <img src={EarthLogo} alt='headquarter' />
                  </a>
                </div>
              </div>
            }
          >
            <img src={CompanyLogo} alt='company' width={40} height={40} />
            <div className='ml-10 company-info'>
              <p>{record?.name}</p>
              <p>{record?.companyLocation}</p>
            </div>
          </Popover>
        );
      },
    },
    {
      key: 'post',
      dataIndex: 'post',
      title: 'Post',
    },
    {
      key: 'recruited',
      dataIndex: 'recruited',
      title: 'Recruited',
    },
    {
      key: 'hired',
      dataIndex: 'hired',
      title: 'Hired',
    },
    {
      key: 'created',
      dataIndex: 'created',
      title: 'Date Join',
      render: (_, record) => {
        return <span>{moment(record?.created).format('DD MMM YY')}</span>;
      },
      sorter: (a, b) => moment(a.created).unix() - moment(b.created).unix(),
    },
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Action',
      render: (_text, _record) => {
        return (
          <div className='icon-button'>
            <img src={ChatIcon} alt='chat' />
          </div>
        );
      },
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <div className='w-full'>
        <Table
          dataSource={company[0]?.data}
          columns={columns}
          rowKey='_id'
          pagination={false}
          onRow={(record, rowIndex) => {
            return {
              onClick: (e) => {
                setShowChat(true);
              },
            };
          }}
          className='app-table company-table'
        />
        <div className='mt-32 company-footer'>
          <AppPagination
            total={company[0]?.metadata ? company[0]?.metadata[0].recordTotal : null}
            current={current}
            pageSize={pageSize}
            setCurrent={setCurrent}
            setPageSize={setPageSize}
          />
        </div>
      </div>
      <ChatDrawer visible={showChat} onClose={() => setShowChat(false)} />
    </Spin>
  );
};

export default CompaniesTable;
