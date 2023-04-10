import React, { memo, useState, useEffect } from 'react';
import SearchIcon from '@iso/assets/images/icon/search.svg';
import DislikeIcon from '@iso/assets/images/icon/opportunity/dislike.svg';
import DropDownArrowIcon from '@iso/assets/images/icon/opportunity/dropdown-arrow.svg';
import LikeIcon from '@iso/assets/images/icon/opportunity/like.svg';
import RedHeartIcon from '@iso/assets/images/icon/opportunity/red-heart.svg';
import ThinkingIcon from '@iso/assets/images/icon/opportunity/thinking.svg';
import { ApplyStatus } from '../../components/utility/status';
import useQuery from '@iso/hooks/useQuery';
import ApplicationIcon from '@iso/assets/images/icon/opportunity/application.svg';
import LikeOutlineIcon from '@iso/assets/images/icon/opportunity/like-outline.svg';
import ChatOutlineIcon from '@iso/assets/images/icon/opportunity/chat-outline.svg';
import DropdownArrowIcon from '@iso/assets/images/icon/opportunity/dropdown-arrow.svg';
import moment from 'moment';
import { Avatar, Input, Popover, Table } from 'antd';
import UserAvatar from '@iso/assets/images/2.jpg';
import ApplyStatusTag from '../../components/ApplyStatusTag';
import AppPagination from '../../components/AppPagination/AppPagination';
import { Separator } from './View.style';
import { debounce } from 'lodash';
import UserIcon from '@iso/assets/images/icon/opportunity/user-white.svg';
import CandidateDrawer from '../../components/CandidateDrawer/CandidateDrawer';
import { useSelector, useDispatch } from 'react-redux';
import MatchAction from '@iso/redux/match/actions';
const { getJobMatch } = MatchAction;

const DetailJobTable = ({ jobLink, tab }) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [candidateDrawer, setCandidateDrawer] = useState(false);
  const [candidateID, setCandidateID] = useState(null);
  const [filterPopover, setFilterPopover] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [search, setSearch] = useState('');
  const { dataMatch, isLoading } = useSelector((state) => state.match);

  const handleSearchDebounced = debounce((value) => {
    setSearch(value);
  }, 500);
  const handleSearch = (e) => {
    handleSearchDebounced(e.target.value);
  };

  useEffect(() => {
    if (query.get('page') && query.get('limit')) {
      setPage(Number(query.get('page')));
      setPageSize(Number(query.get('limit')));
    }
    dispatch(getJobMatch(jobLink, tab, filterStatus, search, page, pageSize));
  }, [dispatch, candidateDrawer, jobLink, filterStatus, search, query, page, pageSize, tab]);

  // Hover
  const DetailUserPopover = ({ record }) => {
    return (
      <div className=''>
        <div className='flex justify-center'>
          <img src={UserAvatar} className='job-popover-avatar' alt='avatar' />
        </div>
        <div className='mt-15'>
          <strong className='text-16'>{record?.freelancer?.fullname}</strong>
          <p className='text-11 text-light-gray'>{record?.freelancer?.professional}</p>
        </div>
        <div className='mt-15'>
          {record?.skillTags &&
            record.skillTags.slice(0, 3).map((item, i) => (
              <span key={i} className='skill-tag mr-5'>
                {item}
              </span>
            ))}
        </div>
        <div className='mt-15 flex items-center'>
          <button className='icon-button flex-none bg-black'>
            <img src={UserIcon} alt='profile' />
          </button>
          <button className='app-button button-outline w-full ml-5'>Message</button>
        </div>
      </div>
    );
  };

  const columns = [
    {
      title: 'Freelancer',
      dataIndex: 'freelancer',
      key: 'name',
      render: (_, record) => (
        <Popover className='app-popover' content={<DetailUserPopover record={record} />}>
          <div className='flex items-center'>
            <Avatar src={UserAvatar} size={40} />
            <div className='ml-15'>
              <strong className='text-14'>{record?.freelancer?.fullname}</strong>
              <p className='text-11 text-light-gray'>{record?.freelancer?.professional}</p>
            </div>
          </div>
        </Popover>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <ApplyStatusTag type={text} selected={dataMatch?.result?.data[0]?.interviewDate && dataMatch?.result?.data[0]?.interviewDate} />
      ),
    },

    {
      title: 'Application',
      dataIndex: 'application',
      key: 'application',
      render: () => (
        <button className='app-button button-outline'>
          <img src={ApplicationIcon} alt='application' />
          <span className='ml-10 text-12'>View</span>
        </button>
      ),
    },
    {
      title: 'Date applied',
      dataIndex: 'dateApplied',
      key: 'dateApplied',
      render: (_, record) => moment(record?.created).format('DD MMM YYYY'),
      sorter: (a, b) => moment(a.created) - moment(b.created),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div className='flex items-center gap-x-10'>
          <button className='icon-button outline'>
            <img src={LikeOutlineIcon} alt='like' />
          </button>
          <button className='icon-button outline'>
            <img src={ChatOutlineIcon} alt='chat' />
          </button>
          <button className='app-button button-outline'>
            <span className='mr-10 text-12'>Action</span>
            <img src={DropdownArrowIcon} alt='dropdown' />
          </button>
        </div>
      ),
    },
  ];

  const handleChooseFilterStatus = (value) => {
    setFilterStatus(value);
    setFilterPopover(!filterPopover);
  };

  const renderFilterStatus = () => {
    return (
      <ul>
        {Object.keys(ApplyStatus).map((item, index) => (
          <li key={index} onClick={() => handleChooseFilterStatus(ApplyStatus[item]?.value)}>
            <div style={{ '--color': ApplyStatus[item]?.color }} />
            {ApplyStatus[item]?.label} ({dataMatch?.result?.data?.candidate?.filter((item) => item.status === ApplyStatus[item]?.value).length})
          </li>
        ))}
      </ul>
    );
  };
  if (tab === 'freelancer') {
    columns.splice(2, 0, {
      title: 'Exp. Level',
      dataIndex: 'level',
      key: 'expLevel',
      render: (_, record) => <p>{record?.freelancer?.experienceLevel}</p>,
      sorter: (a, b) =>
        a?.freelancer?.experienceLevel &&
        b?.freelancer?.experienceLevel &&
        a?.freelancer?.experienceLevel.length - b?.freelancer?.experienceLevel.length,
      sortDirections: ['ascend'],
    });
    columns.splice(2, 0, {
      title: 'Expected Salary',
      dataIndex: 'expectedSalary',
      key: 'expectedSalary',
      render: (_, record) => (
        <p>
          <strong>{`$ ${record?.expectedSalary}`}</strong> ({record?.payType})
        </p>
      ),
      sorter: (a, b) => a.expectedSalary - b.expectedSalary,
    });
  }

  return (
    <>
      <div className='flex items-center justify-between mb-20'>
        <div className='flex items-center gap-x-12'>
          <div>
            <Input
              prefix={<img src={SearchIcon} alt='search' />}
              className='app-input search-filter'
              placeholder='Top matches'
              width={250}
              onChange={handleSearch}
            />
          </div>
          <Popover
            trigger={['click']}
            visible={filterPopover}
            onVisibleChange={(visible) => setFilterPopover(visible)}
            placement='bottomLeft'
            overlayClassName='status-filter-popover'
            content={renderFilterStatus}
          >
            <div className='status-select'>
              <div className='flex items-center justify-between w-full'>
                <div className={filterStatus === 'all' ? 'text-placeholder' : ''}>
                  {filterStatus === '' ? 'All Stages' : <ApplyStatusTag type={filterStatus} />}
                </div>
                <img src={DropDownArrowIcon} alt='drop-down-arrow' />
              </div>
            </div>
          </Popover>
          <div className='filter-icon'>
            <img src={LikeIcon} alt='like' className='cursor-pointer' />
            <img src={DislikeIcon} alt='dislike' className='cursor-pointer' />
            <img src={RedHeartIcon} alt='red-heart' className='cursor-pointer' />
            <img src={ThinkingIcon} alt='thinking' className='cursor-pointer' />
          </div>
        </div>
      </div>

      <Table
        className='app-table'
        dataSource={dataMatch?.result?.data}
        columns={columns}
        rowKey='code'
        pagination={false}
        loading={isLoading}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              setCandidateDrawer(true);
              setCandidateID(record?.code);
            },
          };
        }}
      />
      <Separator className='mt-20 mb-30' />
      <AppPagination
        total={dataMatch?.result?.data ? dataMatch?.result?.data.length : 0}
        current={page}
        pageSize={pageSize}
        setCurrent={setPage}
        setPageSize={setPageSize}
      />
      {candidateDrawer && (
        <CandidateDrawer
          visible={candidateDrawer}
          onClose={() => setCandidateDrawer(false)}
          candidateId={candidateID}
          dataJob={dataMatch?.result?.data}
        />
      )}
    </>
  );
};

export default memo(DetailJobTable);
