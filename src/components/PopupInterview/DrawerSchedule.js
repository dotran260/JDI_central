import React, { useState } from 'react';
import { Drawer } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { titleFirt, DivWrap, Content } from './DrawerSchedule.style';
import DetailInterviewDrawer from '../InterviewDrawer/DetailInterviewDrawer';
import ImgUser from '@iso/assets/images/user3.png';

function DrawerSchedule({ visible, onClose }) {
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const timeToday = '17 Nov 2022';
  const menuDatas = [
    {
      title: '17 Nov 2022',
      childrenData: [
        {
          title: '10:00 - 10:30 am',
          active: true,
          major: 'Product Designer',
          img1: 'imgError.com',
          img2: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f9fc836029c6f4b?s=64&d=identicon&r=PG',
        },
        {
          title: '13:00 - 13:30 am',
          major: 'UX/UI Senior Designer',
          img1: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f2fc836029c6f4b?s=64&d=identicon&r=PG',
          img2: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f9fc836029c6f4b?s=64&d=identicon&r=PG',
        },
      ],
    },
    {
      title: '28 Nov 2022',
      childrenData: [
        {
          title: '13:00 - 13:30 am',
          major: 'UX/UI Senior Designer',
          img1: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f2fc836029c6f4b?s=64&d=identicon&r=PG',
          img2: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f9fc836029c6f4b?s=64&d=identicon&r=PG',
        },
        {
          title: '13:00 - 13:30 am',
          major: 'UX/UI Senior Designer',
          img1: '',
          img2: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f9fc836029c6f4b?s=64&d=identicon&r=PG',
        },
        {
          title: '13:00 - 13:30 am',
          major: 'UX/UI Senior Designer',
          img1: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f2fc836029c6f4b?s=64&d=identicon&r=PG',
          img2: 'https://www.gravatar.com/avatar/60ead57d0badcdca2f9fc836029c6f4b?s=64&d=identicon&r=PG',
        },
      ],
    },
  ];
  return (
    <>
      <Drawer visible={visible} title={titleFirt} width={400} placement='right' closable={true} onClose={onClose}>
        {menuDatas.map((data, index) => {
          return (
            <Content key={index}>
              <p className='desTime'>
                {timeToday === data.title ? <span className='checkTime'>Today</span> : null}
                {data.title}
              </p>
              {data?.childrenData.map((child, index) => {
                return (
                  <DivWrap key={index} type='primary' onClick={() => setChildrenDrawer(true)}>
                    <div className='interviewInfo'>
                      <div className='interviewDescription'>
                        <p className={`interviewTime ${child?.active ? 'active' : ''}`}>{child?.title}</p>
                        <p className='interviewMajor'>{child?.major}</p>
                      </div>
                      <div className='interviewIcons'>
                        <div className='imgList'>
                          <img
                            src={child?.img1}
                            onError={(e) => {
                              e.target.src = ImgUser;
                            }}
                            alt='error'
                            className='imgIcon'
                          />
                          <img
                            src={child?.img2}
                            onError={(e) => {
                              e.target.src = ImgUser;
                            }}
                            alt='error'
                            className='imgIcon absolute'
                          />

                          <DownOutlined className='downIcon' />
                        </div>
                      </div>
                    </div>
                  </DivWrap>
                );
              })}
            </Content>
          );
        })}

        {/* DRAWER ONE-TWO */}
        {childrenDrawer && <DetailInterviewDrawer visible={childrenDrawer} onClose={() => setChildrenDrawer(false)} />}
      </Drawer>
    </>
  );
}

export default React.memo(DrawerSchedule);
