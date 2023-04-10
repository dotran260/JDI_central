import SalaryIcon from '@iso/assets/images/icon/Salary.svg';
import ExperienceIcon from '@iso/assets/images/icon/YearsOfExperience.svg';
import ModeIcon from '@iso/assets/images/icon/WorkingMode.svg';
import { Checkbox, Radio } from 'antd';

export const filterOptions = [
  {
    header: {
      title: 'EXPERTISE',
      icon: ExperienceIcon,
    },
    type: Checkbox,
    items: [
      {
        label: 'Developer',
        value: 'Developer',
      },
      {
        label: 'Designer',
        value: 'Designer',
      },
      {
        label: 'Quality Control',
        value: 'Quality Controller',
      },
    ],
  },
  {
    header: {
      title: 'YEARS OF EXPERIENCE',
      icon: ExperienceIcon,
    },
    type: Radio,
    items: [
      {
        label: 'All',
        value: '',
      },
      {
        label: 'Fresher (<1 year)',
        value: 'Fresher',
      },
      {
        label: 'Junior (1 - 3 years)',
        value: 'Junior',
      },
      {
        label: 'Mid-Senior (3 - 5 years)',
        value: 'Mid-Senior',
      },
      {
        label: 'Senior (5 - 10 years)',
        value: 'Senior',
      },
      {
        label: 'Expert (>10 years)',
        value: 'Expert',
      },
    ],
  },
  {
    header: {
      title: 'WORKING MODE',
      icon: ModeIcon,
    },
    type: Checkbox,
    items: [
      {
        label: 'Remote',
        value: 'remote',
      },
      {
        label: 'In Office',
        value: 'inOffice',
      },
      {
        label: 'Hybrid',
        value: 'hybrid',
      },
    ],
  },
  // {
  //   header: {
  //     title: 'SALARY',
  //     icon: SalaryIcon,
  //   },
  //   type: Checkbox,
  //   items: [
  //     {
  //       label: 'Hourly',
  //       value: 'hourly',
  //     },
  //     {
  //       label: 'Monthly',
  //       value: 'monthly',
  //     },
  //     {
  //       label: 'Project Package',
  //       value: 'projectPackage',
  //     },
  //   ],
  // },
];
