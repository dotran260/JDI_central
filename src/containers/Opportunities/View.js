import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { Tabs } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';
import OpportunitiesTabs from './OpportunitiesTabs';
import { OpportunitiesWrapper } from './View.style';
import { useSelector, useDispatch } from 'react-redux';
import JobsAction from '@iso/redux/jobs/actions';
import useQuery from '@iso/hooks/useQuery';
import AppPagination from '../../components/AppPagination/AppPagination';
import { getJobsLength } from '../../api/jobs';

const { getJobs } = JobsAction;

const Opportunities = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeSubTab, setActiveSubTab] = useState('Job');
  const [length, setLength] = useState({ active: 0, expired: 0, all: 0 });
  const [status, setStatus] = useState('All');
  useEffect(() => {
    getJobsLength().then((resLength) => setLength(resLength?.data));
  }, []);

  const handleFilter = useCallback(
    (key) => {
      switch (key) {
        case 'all':
          setStatus('All');
          break;
        case 'active':
          setStatus('Active');
          break;
        case 'expired':
          setStatus('Expired');
          break;
        default:
          return jobs;
      }
    },
    [jobs]
  );

  useEffect(() => {
    if (query.get('page') && query.get('limit')) {
      setCurrent(Number(query.get('page')));
      setPageSize(Number(query.get('limit')));
    }

    dispatch(getJobs(status, current, pageSize, activeSubTab));
  }, [dispatch, query, current, pageSize, activeSubTab, status]);

  const tabItem = [
    {
      title: `All (${length?.all || 0})`,
      key: 'all',
      content: <OpportunitiesTabs data={jobs} activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} loading={isLoading} />,
    },
    {
      title: `Active  (${length?.active || 0})`,
      key: 'active',
      content: <OpportunitiesTabs data={jobs} activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} loading={isLoading} />,
    },
    {
      title: `Expired  (${length?.expired || 0})`,
      key: 'expired',
      content: <OpportunitiesTabs data={jobs} activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} loading={isLoading} />,
    },
  ];

  return (
    <LayoutContentWrapper>
      <OpportunitiesWrapper>
        <div className='flex items-center w-full opportunity-header'>
          <div className='opportunity-title'>
            <span>Opportunity</span>
            <span> List</span>
          </div>
        </div>
        <Tabs defaultActiveKey='all' className='app-tabs' onChange={handleFilter}>
          {tabItem.map((item) => (
            <Tabs.TabPane tab={item.title} key={item.key}>
              {item.content}
            </Tabs.TabPane>
          ))}
        </Tabs>

        {jobs[0]?.metadata[0]?.recordTotal > 0 && (
          <div className='mt-32 company-footer'>
            <AppPagination
              total={jobs[0]?.metadata[0]?.recordTotal ?? jobs[0]?.metadata[0]?.recordTotal}
              current={current}
              pageSize={pageSize}
              setCurrent={setCurrent}
              setPageSize={setPageSize}
            />
          </div>
        )}
      </OpportunitiesWrapper>
    </LayoutContentWrapper>
  );
};

export default Opportunities;
