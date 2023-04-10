import React from "react";
import ConversationIcon from "@iso/assets/images/icon/opportunity/conversation-white.svg";
import DropdownArrowIcon from "@iso/assets/images/icon/opportunity/dropdown-arrow-white.svg";
import { Avatar } from "antd";
import UserAvatar from "@iso/assets/images/2.jpg";

const ConversationTab = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      message: "Hello",
      date: "2020-10-10 10:00",
      userId: 1,
    },
    {
      id: 2,
      name: "Product Manager",
      message: "Hi",
      date: "2020-10-10 10:01",
      userId: 2,
    },

    {
      id: 1,
      name: "John Doe",
      message: "Nice to meet you",
      date: "2020-10-10 10:00",
      userId: 1,
    },
  ];
  return (
    <div>
      <button className="app-button">
        <img src={ConversationIcon} alt="conversation" />
        <span className="ml-5 mr-10 text-11 text-white">Direct Message</span>
        <img src={DropdownArrowIcon} alt="dropdown" />
      </button>
      <div className="mt-20">
        {data.map((item) => {
          if (item.userId === 1) {
            return (
              <div className="flex justify-end mb-10" key={item?.id}>
                <div className="chat-bubble">{item.message}</div>
              </div>
            );
          }
          return (
            <div className="flex justify-start mb-10" key={item?.id}>
              <Avatar src={UserAvatar} className="self-end" />
              <div className="chat-bubble other ml-10">
                <div>{item.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationTab;
