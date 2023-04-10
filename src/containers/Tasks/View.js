import SearchIcon from '@iso/assets/images/icon/search.svg';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import AllTasksTable from './AllTasksTable';
import CompletedTable from './CompletedTable';
import InProgressTable from './InProgressTable';
import { TasksContainer } from './View.style';

const Tasks = () => {
  // // const handleFilter = useCallback(
  // //   (key) => {
  // //     switch (key) {
  // //       case 'all':
  // //         dispatch(getTasks('All'));
  // //         break;
  // //       case 'active':
  // //         dispatch(getTasks('Active'));
  // //         break;
  // //       case 'expired':
  // //         dispatch(getTasks('Expired'));
  // //         break;
  // //       default:
  // //         return jobs;
  // //     }
  // //   },
  // //   [dispatch, current, pageSize, jobs]
  // // );

  const tabItem = [
    {
      key: 'all',
      label: 'All Tasks',
      children: <AllTasksTable />,
    },
    {
      key: 'inProgress',
      label: 'In Progress',
      children: <AllTasksTable />,
    },
    {
      key: 'completed',
      label: 'Completed',
      children: <AllTasksTable />,
    },
  ];

  return (
    <LayoutContentWrapper>
      <TasksContainer>
        <div className='flex items-center justify-between w-full company-header'>
          <div className='company-title'>
            <span>Task</span>
            <span> Management</span>
          </div>
          <div className='flex items-center'>
            <div className='icon-button outline mr-10'>
              <img src={SearchIcon} width={14} height={14} alt='search' />
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey={'all'} className='app-tabs'>
          {tabItem.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </TasksContainer>
    </LayoutContentWrapper>
  );
};

export default Tasks;
