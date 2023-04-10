import DislikeIcon from '@iso/assets/images/icon/opportunity/dislike.svg';
import DropDownArrowIcon from '@iso/assets/images/icon/opportunity/dropdown-arrow.svg';
import LikeIcon from '@iso/assets/images/icon/opportunity/like.svg';
import MatchMoreIcon from '@iso/assets/images/icon/opportunity/match-more.svg';
import RedHeartIcon from '@iso/assets/images/icon/opportunity/red-heart.svg';
import ThinkingIcon from '@iso/assets/images/icon/opportunity/thinking.svg';
import ViewJobIcon from '@iso/assets/images/icon/opportunity/view-job.svg';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import { Input, Popover, Tabs } from 'antd';
import moment from 'moment';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState, memo } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import DetailJobTable from './DetailJobTable';
import { DetailJobWrapper } from './View.style';
import { Link } from 'react-router-dom';
import { getJobDetail } from '../../api/jobs';
import MatchAction from '@iso/redux/match/actions';
import { getMatchCount } from '../../api/match';
const { getJobMatch } = MatchAction;

const DetailJobView = () => {
  const params = useParams();
  const jobLink = params?.id;
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { dataMatch } = useSelector((state) => state.match);
  const [activeTab, setActiveTab] = useState('freelancer');
  const [detail, setDetail] = useState(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    getJobDetail(jobLink).then((res) => setDetail(res));
    // dispatch(getJobMatch(jobLink, 'agency'));
  }, [dispatch, jobLink]);

  useEffect(() => {
    getMatchCount(jobLink).then((res) => setLength(res?.result));
  }, [jobLink]);

  const tabItem = [
    {
      title: `Candidates (${length?.freelancer ?? 0})`,
      key: 'freelancer',
      content: <DetailJobTable tab={activeTab} jobLink={jobLink} />,
    },
    {
      title: `Agency (${length?.agency ?? 0})`,
      key: 'agency',
      content: <DetailJobTable tab={activeTab} jobLink={jobLink} />,
    },
  ];

  return (
    <LayoutContentWrapper>
      <DetailJobWrapper>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-20'>
            <Link to='/admin/dashboard/opportunities' className='linkBack'>
              <ArrowLeftOutlined />
            </Link>
            <strong className='text-24'>{detail?.data?.jobName}</strong>
            <p className='text-dark-gray text-13'>
              {moment(dataMatch?.result?.data?.startDate).format('DD MMMM YYYY')} - {moment(dataMatch?.result?.data?.endDate).format('DD MMMM YYYY')}
            </p>
          </div>
          <div className='flex items-center'>
            <Link to={`/admin/dashboard/opportunities/job/${params?.id}`} className='app-button button-outline'>
              <span className='text-dark-gray mr-10'>View Job Post</span>
              <img src={ViewJobIcon} alt='view-job' />
            </Link>
            <button onClick={() => history.push(`${match.url}/match_more`)} className='app-button ml-5'>
              <img src={MatchMoreIcon} alt='match-more' width={14} height={14} />
              <span className='text-white ml-10'>Match More</span>
            </button>
          </div>
        </div>
        <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)} defaultActiveKey='candidates' className='mt-20 app-tabs'>
          {tabItem.map((item) => (
            <Tabs.TabPane tab={item.title} key={item.key}>
              {item.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DetailJobWrapper>
    </LayoutContentWrapper>
  );
};

export default memo(DetailJobView);
