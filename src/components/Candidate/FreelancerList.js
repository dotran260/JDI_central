import React, { useState, useEffect } from 'react';
import { FreelancerWrapper, styleColBySort } from './FreelancerList.style';
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col, Input, Slider, Spin, Collapse } from 'antd';
import { debounce } from 'lodash';
import SortIcon from '@iso/assets/images/icon/sort.svg';
import { filterOptions } from './Filter';
import AppPagination from '@iso/components/AppPagination/AppPagination';
import FreelanceCard from '../CandidateCard/FreelancerCard';
import FreelanceActions from '@iso/redux/freelance/actions';
import useQuery from '@iso/hooks/useQuery';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Radio } from 'antd';

const formatter = (value) => `$${value}`;
const { Panel } = Collapse;
const { getListFreelancer } = FreelanceActions;

const FreelanceList = ({ tab }) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { freelancer, isLoading } = useSelector((state) => state.freelance);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [expertise, setExpertise] = useState('');
  const [working, setWorking] = useState('');
  const [experience, setExperience] = useState('');
  // const [salary, setSalary] = useState('');
  // const [minSalary, setMinSalary] = useState(0);
  // const [maxSalary, setMaxSalary] = useState(5000);
  const [sort, setSort] = useState('asc');
  useEffect(() => {
    if (query.get('page') && query.get('limit')) {
      setCurrent(Number(query.get('page')));
      setPageSize(Number(query.get('limit')));
    }
    if (tab === 'freelancer') {
      dispatch(
        getListFreelancer({
          professional: expertise,
          userRole: tab,
          working: working,
          search: search,
          experienceLevel: experience,
          page: current,
          recordPerPage: pageSize,
          sort: sort,
        })
      );
    } else if (tab === 'agency') {
      dispatch(
        getListFreelancer({
          professional: expertise,
          userRole: tab,
          search: search,
          sort: sort,
        })
      );
    }
  }, [dispatch, query, current, pageSize, expertise, experience, search, working, sort, tab]);

  const { recordTotal } = freelancer?.data?.metadata[0] || {};
  const handleSort = () => {
    setSort(sort === 'asc' ? 'des' : 'asc');
  };

  // const onAfterChange = (values) => {
  //   setMinSalary(values[0]);
  //   setMaxSalary(values[1]);
  // };

  const handleFilter = (checkedValues, filterType) => {
    if (filterType === 'WORKING MODE') {
      setWorking(checkedValues.join(','));
    } else if (filterType === 'EXPERTISE') {
      setExpertise(checkedValues.join(','));
    } else if (filterType === 'YEARS OF EXPERIENCE') {
      setExperience(checkedValues.target.value);
    }
    // else if (filterType === 'SALARY') {
    //   setSalary(checkedValues.join(','));
    // }
  };

  const handleSearchDebounced = debounce((value) => {
    setSearch(value);
  }, 500);
  const handleSearch = (e) => {
    handleSearchDebounced(e.target.value);
  };

  return (
    <Spin spinning={isLoading}>
      <FreelancerWrapper>
        <Row gutter={24}>
          {/* Filter */}
          <Col xs={0} sm={0} md={6}>
            <Input
              size='large'
              onChange={handleSearch}
              placeholder='Search by keywords...'
              prefix={<SearchOutlined />}
              style={{ borderRadius: '12px', width: '80%' }}
            />
            {tab !== 'agency' && tab !== 'hiring' && (
              <Collapse defaultActiveKey={[1, 2, 3, 4]} ghost>
                {filterOptions.map((option, i) => {
                  return (
                    <Panel
                      showArrow={false}
                      header={
                        <div>
                          <img src={option.header.icon} className='icon' alt='error' />
                          <span className='filterHeader'>{option.header.title}</span>
                        </div>
                      }
                      key={++i}
                    >
                      <option.type.Group style={{ width: '100%' }} onChange={(checkedValues) => handleFilter(checkedValues, option.header.title)}>
                        <Row gutter={[24, 24]}>
                          {option.items.map((value, i) => (
                            <Col key={i} span={24}>
                              <option.type value={value.value} className='filterTitle'>
                                {value.label}
                              </option.type>
                            </Col>
                          ))}
                        </Row>
                      </option.type.Group>
                    </Panel>
                  );
                })}
              </Collapse>
            )}

            {/* <Slider range min={0} max={5000} defaultValue={[0, 5000]} tooltip={{ formatter }} onAfterChange={onAfterChange} />
            <div className='salaryRange'>
              <p>$0</p>
              <p>over $5000</p>
            </div> */}
          </Col>

          {/* Freelance */}
          {
            <Col span={18}>
              <Row>
                <Col span={12} style={{ marginBottom: '30px' }}>
                  <h3 className='candidatesText'>{`${recordTotal || 0}`} candidates found</h3>
                </Col>
                <Col span={12} style={styleColBySort}>
                  <button className='btn-sort' onClick={handleSort}>
                    <img className='mr-10' src={SortIcon} width={14} height={14} alt='plus' />
                    Sort by date
                  </button>
                </Col>
              </Row>
              <Row gutter={[40, 24]}>
                {freelancer?.data?.data.map((data, i) => (
                  <Col key={i} xs={24} sm={12} md={8}>
                    <FreelanceCard content={data && data} />
                  </Col>
                ))}
              </Row>
              <Row>
                <div className='w-full'>
                  <AppPagination total={recordTotal || 0} current={current} pageSize={pageSize} setCurrent={setCurrent} setPageSize={setPageSize} />
                </div>
              </Row>
            </Col>
          }
        </Row>
      </FreelancerWrapper>
    </Spin>
  );
};

export default FreelanceList;
