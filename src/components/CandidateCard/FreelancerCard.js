import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, styleIcon, styleButton } from './FreelancerCard.style';
import { StarFilled } from '@ant-design/icons';
import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { isEmpty } from 'lodash';
const FreelanceCard = ({ content }) => {
  const skills = content?.skills ? content.skills : [];
  return (
    <Link to={`/admin/dashboard/freelancers/${content?.code}`}>
      <CardWrapper>
        <div className='freelanceCard'>
          <div className='freelanceImg'>
            <img
              src={
                isEmpty(content?.avatar)
                  ? ''
                  : `https://jdi-central-staging.s3.ap-southeast-1.amazonaws.com/${content.avatar[content.avatar.length - 1].path.origin}`
              }
              onError={(e) => {
                e.target.src = 'https://jdi-central-staging.s3.ap-southeast-1.amazonaws.com/profile-placeholder.png';
              }}
              alt='freelance'
            />
          </div>
          <div className='freelanceDescription'>
            <span className='name'>{content?.fullname}</span>
            <span className='rating'>
              <StarFilled style={{ color: '#FFDE54' }} /> 4.5
            </span>
            <p className='occupation'>{content?.professional}</p>
          </div>
          <div className='freelanceSalary'>
            <p className='salaryTo'>{`S$${content?.monthlyRate || 0} (Monthly)`}</p>
            <span className='salarySeparate'>|</span>
            <p className='salaryFrom'>{`S$${content?.hourlyRate || 0} (Hourly)`}</p>
          </div>
          <div className='tag'>{skills && skills.map((value, i) => <p key={i}>{value}</p>)}</div>
          <div className='viewProfile'>
            <UserAddOutlined style={styleIcon} />
            <Button style={styleButton}>View Profile</Button>
          </div>
        </div>
      </CardWrapper>
    </Link>
  );
};

export default FreelanceCard;
