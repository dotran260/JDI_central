import { Avatar, Col, Drawer, Input, Row, Tabs } from "antd";
import React from "react";
import { ChatDrawerWrapper } from "./ChatDrawer.style";
import UserAvatar from "@iso/assets/images/2.jpg";
import moment from "moment";
import SendIcon from "@iso/assets/images/icon/send.svg";

const ChatDrawer = ({ visible, onClose }) => {
  const [activeChat, setActiveChat] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "John Doe",
      industry: "IT",
      isRead: true,
      country: "USA",
      message: [
        {
          id: 1,
          message: "Hello",
          userId: 1,
          date: "2020-10-10 10:00",
        },
        {
          id: 2,
          message: "Hi",
          userId: 2,
          date: "2020-10-10 10:01",
        },
      ],
    },
    {
      id: 2,
      name: "Product Manager",
      industry: "IT",
      isRead: false,
      country: "Singapore",
      message: [
        {
          id: 1,
          message: "Hello",
          userId: 2,
          date: "2020-10-10 10:00",
        },
        {
          id: 1,
          message: "Hello",
          userId: 2,
          date: "2020-10-10 10:00",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },

        {
          id: 1,
          message:
            "m dolor sit amet, consect amet lorem. Sed euismod, nunc ut aliquam aliquam",
          userId: 2,
          date: "2020-10-10 10:00",
        },

        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 1,
          message: "Hello",
          userId: 2,
          date: "2020-10-10 10:00",
        },
        {
          id: 2,
          message:
            "Lorem ipsum dolor sit amet, consect amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, quis aliquam nisl nisl",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
        {
          id: 2,
          message: "Hi",
          userId: 1,
          date: "2020-10-10 11:01",
        },
      ],
    },
  ]);

  const tabItem = [
    {
      key: "hiring",
      tab: "Hiring",
      data: data,
    },
    {
      key: "working",
      tab: "Working",
      data: data.filter((item) => item.isRead),
    },
    {
      key: "people",
      tab: "People",
      data: data.filter((item) => item.isRead),
    },
  ];

  const handleChat = () => {
    if (message) {
      setData(
        data.map((item) => {
          if (item.id === activeChat.id) {
            return {
              ...item,
              message: [
                ...item.message,
                {
                  id: item.message.length + 1,
                  message,
                  userId: 1,
                  date: moment().format("YYYY-MM-DD HH:mm"),
                },
              ],
            };
          }
          return item;
        })
      );
      setActiveChat({
        ...activeChat,
        message: [
          ...activeChat.message,
          {
            id: activeChat.message.length + 1,
            message,
            userId: 1,
            date: moment().format("YYYY-MM-DD HH:mm"),
          },
        ],
      });

      setTimeout(() => setMessage(""), 100);
    }
  };

  return (
    <Drawer
      width={870}
      className="chat-drawer"
      visible={visible}
      onClose={onClose}
    >
      <ChatDrawerWrapper>
        <Row className="h-full">
          <Col span={9}>
            <div className="chat-list">
              <strong className="text-24 block mb-15">Chat</strong>
              <Tabs defaultActiveKey={"chat"} className="app-tabs">
                {tabItem.map((item) => (
                  <Tabs.TabPane tab={item.tab} key={item.key}>
                    {item.data &&
                      item.data.map((x) => (
                        <div
                          onClick={() => setActiveChat(x)}
                          key={x.id}
                          className={`chat-item flex justify-between ${
                            x?.id === activeChat?.id ? "active" : ""
                          }`}
                        >
                          <div className="flex">
                            <Avatar src={UserAvatar} />
                            <div className="ml-10">
                              <strong className="text-14">{x?.name}</strong>
                              <p className="text-11 text-gray">
                                {x?.industry}, {x?.country}
                              </p>
                              <p className="text-13 mt-5">
                                {x?.message[x?.message.length - 1]?.message}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center self-baseline">
                            <div className="progress-dot mr-10" />
                            {moment(
                              x?.message[x?.message.length - 1]?.time
                            ).format("MMM DD")}
                          </div>
                        </div>
                      ))}
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </div>
          </Col>
          <Col span={15}>
            {activeChat && (
              <>
                <div className="chat-active-header flex items-center">
                  <Avatar src={UserAvatar} />
                  <div className="ml-10">
                    <strong className="text-14">{activeChat?.name}</strong>
                    <p className="text-11 text-gray">
                      {activeChat?.industry}, {activeChat?.country}
                    </p>
                  </div>
                </div>
                <div className="chat-active-body">
                  {activeChat?.message.map((item) => {
                    if (item.userId === 1) {
                      return (
                        <div className="flex justify-end mb-10">
                          <div className="chat-bubble">{item.message}</div>
                        </div>
                      );
                    }
                    return (
                      <div className="flex justify-start mb-10">
                        <Avatar src={UserAvatar} className="self-end" />
                        <div className="chat-bubble other ml-10">
                          <div>{item.message}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex">
                  <Input.TextArea
                    rows={2}
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    className="chat-input"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onPressEnter={handleChat}
                  />
                  <div onClick={handleChat} className="send-icon">
                    <img src={SendIcon} alt="send" />
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </ChatDrawerWrapper>
    </Drawer>
  );
};

export default ChatDrawer;
