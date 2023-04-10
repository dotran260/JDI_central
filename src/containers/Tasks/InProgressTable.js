import CompanyLogo from "@iso/assets/images/company-logo.png";
import ChatIcon from "@iso/assets/images/icon/chat.svg";
import { Table } from "antd";
import moment from "moment";
import React, { useState } from "react";
import AppPagination from "../../components/AppPagination/AppPagination";
import PaymentStatusTag from "../../components/PaymentStatusTag";
import TaskStatusTag from "../../components/TaskStatusTag";

const InProgressTable = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Task",
      render: (_text, record) => {
        return (
          <div className="flex items-center">
            <img src={CompanyLogo} alt="company" width={40} height={40} />
            <div className="ml-10 company-info">
              <p>{record?.name}</p>
              <p>
                <strong>{record?.companyName}, </strong>
                {record?.country}
              </p>
            </div>
          </div>
        );
      },
      width: 300,
    },
    {
      key: "employee",
      dataIndex: "employee",
      title: "Employee",
      render: (text) => <strong className="text-13">{text}</strong>,
      width: 150,
    },
    {
      key: "taskStatus",
      dataIndex: "taskStatus",
      title: "Task Status",
      render: (text) => <TaskStatusTag type={text} />,
      width: 150,
    },
    {
      key: "payType",
      dataIndex: "payType",
      title: "Pay Type",
      width: 100,
    },
    {
      key: "paymentStatus",
      dataIndex: "paymentStatus",
      title: "Payment Status",
      render: (text) => <PaymentStatusTag type={text} />,
      width: 150,
    },
    {
      key: "paymentPeriod",
      dataIndex: "paymentPeriod",
      title: "Payment Period",
      render: (text) => {
        return (
          <div>
            {text ? (
              <>
                <p>{moment(text).format("MMMM")}</p>
                <p>{moment(text).format("YYYY")}</p>
              </>
            ) : (
              <span>--</span>
            )}
          </div>
        );
      },
      width: 150,
    },
    {
      key: "date",
      dataIndex: "date",
      title: "Date",
      render: (text) => <span>{moment(text).format("DD MMM YYYY")}</span>,
      width: 150,
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      render: (_text, _record) => {
        return (
          <div className="icon-button outline">
            <img src={ChatIcon} alt="chat" />
          </div>
        );
      },
      width: 80,
    },
  ];

  const dataSource = [
    {
      id: "1",
      name: "Project Management",
      employee: "John Doe",
      taskStatus: "inProgress",
      payType: "Hourly",
      paymentStatus: "requested",
      paymentPeriod: "2021-05-01",
      date: "2021-05-01",
      companyName: "ICON WORKSHOP",
      country: "United States",
    },
    {
      id: "2",
      name: "Project Management",
      employee: "John Doe",
      taskStatus: "completed",
      payType: "Hourly",
      paymentStatus: "declined",
      paymentPeriod: "2021-05-01",
      date: "2021-05-01",
      companyName: "ICON WORKSHOP",
      country: "United States",
    },
  ];

  return (
    <div className="w-full">
      <Table
        scroll={{ x: 1000 }}
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        pagination={false}
        className="app-table company-table"
      />
      <div className="mt-32 company-footer">
        <AppPagination
          total={70}
          current={current}
          pageSize={pageSize}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default InProgressTable;
