import CompanyLogo from '@iso/assets/images/company-logo.png';
import AgencyIcon from '@iso/assets/images/icon/opportunity/agency.svg';
import ExpertIcon from '@iso/assets/images/icon/opportunity/expert.svg';
import FreelancerIcon from '@iso/assets/images/icon/opportunity/freelancer.svg';
import HeartIcon from '@iso/assets/images/icon/opportunity/heart.svg';
import ProposalIcon from '@iso/assets/images/icon/opportunity/proposal.svg';
import RemoteIcon from '@iso/assets/images/icon/opportunity/remote.svg';
import SalaryIcon from '@iso/assets/images/icon/opportunity/salary.svg';
import TickIcon from '@iso/assets/images/icon/opportunity/tick.svg';
import moment from 'moment';
import React, { memo } from 'react';
import { useHistory } from 'react-router';
import { JobItemWrapper, ProjectItemWrapper, Separator } from './View.style';

const OpportunityItem = ({ data, job = false }) => {
  const history = useHistory();

  if (job) {
    return (
      <JobItemWrapper onClick={() => history.push(`opportunities/match/${data?.code}`)}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <strong className='text-16'>{data?.jobName}</strong>
            <p className='text-13 text-gray ml-15'>
              {moment(data?.created).format('DD MMM YYYY')} - {moment(data?.lastApplyDatedata).format('DD MMM YYYY')}
            </p>
          </div>
          <div className='flex items-center'>
            {data?.freelanceType?.includes('Full-time') && data?.freelanceType?.includes('Part-time') ? (
              <>
                <div className='full-time-tag mr-5'>FULL-TIME</div>
                <div className='part-time-tag'>PART-TIME</div>
              </>
            ) : data?.freelanceType?.includes('Part-time') ? (
              <div className='part-time-tag'>PART-TIME</div>
            ) : (
              <div className='full-time-tag mr-5'>FULL-TIME</div>
            )}
          </div>
        </div>
        <div className='mt-15 flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={CompanyLogo} width={60} height={60} alt='company-logo' />
            <div className='ml-20'>
              <strong className='text-dark-gray text-14'>{data?.companyName}</strong>
              <p className='text-11 text-dark-gray'>{data?.country || 'country'}</p>
            </div>
          </div>
          <div className='flex items-center gap-x-20'>
            <div className='flex items-center'>
              <img src={SalaryIcon} alt='salary-icon' />
              <p className='text-13 text-dark-gray ml-10'>
                <strong>{`$ ${data?.salaryFrom} - ${data?.salaryTo}` ?? 0}</strong> ({data?.jobDuration})
              </p>
            </div>
            <div className='flex items-center'>
              <img src={ExpertIcon} alt='remote-icon' />
              {data?.experienceLevel ? (
                <p className='text-13 text-dark-gray ml-10'>
                  <strong>Expert</strong> ({data?.experienceLevel})
                </p>
              ) : (
                <p className='text-13 text-gray ml-10'>No Required</p>
              )}
            </div>
            {console.log(data)}
            {data?.workingMode && (
              <div className='flex items-center'>
                <img src={RemoteIcon} alt='remote-icon' />
                <strong className='text-13 text-dark-gray ml-10'>{data?.workingMode}</strong>
              </div>
            )}
          </div>
        </div>
        <Separator className='mt-15 mb-15' />
        <div className='flex items-center justify-between'>
          <div>
            {data?.requiredSkills?.map((item, index) => (
              <span key={index} className='skill-tag mr-5'>
                {item}
              </span>
            ))}
          </div>
          <div className='flex items-center gap-x-20'>
            <div className='flex items-center'>
              <img src={FreelancerIcon} alt='freelancer-icon' />
              <p className='text-13 ml-10'>
                <strong>{data?.freelancer || 0}</strong> freelancers
              </p>
            </div>
            <div className='flex items-center'>
              <img src={AgencyIcon} alt='freelancer-icon' />
              <p className='text-13 ml-10'>
                <strong>{data?.agency || 0}</strong> agencies
              </p>
            </div>
          </div>
        </div>
      </JobItemWrapper>
    );
  }

  // Projects
  return (
    <ProjectItemWrapper onClick={() => history.push(`opportunities/job/${data?.code}`)}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={CompanyLogo} width={60} height={60} alt='company-logo' />
          <div className='ml-20'>
            <p>
              <strong className='text-16'>{data?.jobName}</strong>
              <span className='ml-15 text-13'>
                {moment(data?.created).format('DD MMM YYYY')} - {moment(data?.lastApplyDatedata).format('DD MMM YYYY')}
              </span>
            </p>
            <p className='text-11 text-dark-gray'>
              <strong>{data?.companyName}</strong> in {data?.country || 'country'}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-x-20'>
          <div className='project-tag'>PROJECT</div>
        </div>
      </div>
      <div className='flex items-center justify-between mt-30'>
        <div className='grid grid-cols-3 flex-1 gap-y-16'>
          {data?.requiredSkills &&
            (Array.isArray(data.requiredSkills) ? data?.requiredSkills : [data?.requiredSkills]).slice(0, 5).map((item, index) => (
              <div key={index} className='flex items-center'>
                <img src={TickIcon} alt='check-icon' />
                <strong className='ml-10 text-13'>{item}</strong>
              </div>
            ))}
          {data?.requiredSkills && data?.requiredSkills.length > 5 && (
            <button className='more-require'>
              <p className='text-13'>
                <strong>+{data?.requiredSkills.length - 5}</strong> required outputs
              </p>
            </button>
          )}
        </div>

        <strong className='text-dark-gray text-16 ml-40'>{`$ ${data?.salaryFrom} - ${data?.salaryTo}` ?? 0}</strong>
      </div>
      <Separator className='mt-15 mb-15' />
      <div className='flex items-center justify-between'>
        <div>
          {data?.expertiseTags?.slice(0, 4).map((item, index) => (
            <span key={index} className='skill-tag mr-5'>
              {item}
            </span>
          ))}
        </div>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <img src={ProposalIcon} alt='proposal-icon' />
            <p className='text-13 ml-10'>
              <strong>{data?.freelancer || 0}</strong> proposals
            </p>
          </div>
          <div className='ml-15 cursor-pointer'>
            <img src={HeartIcon} alt='heart-icon' />
          </div>
        </div>
      </div>
    </ProjectItemWrapper>
  );
};

export default memo(OpportunityItem);
