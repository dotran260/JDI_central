import { Col, Row } from "antd";
import React from "react";
import TestUploadIcon from "@iso/assets/images/icon/opportunity/test-upload.svg";
import { formatMoney } from "@iso/lib/helpers/money";

const ApplicationTab = () => {
  const data = {
    testName: "Test Name",
    attachmentName: "CyndyProposal_2022.pdf",
    expectedSalary: "1000",
    expectedPayType: "hourly",
    expectedSchedule: "40 hours a week, in 1 month",
    experienceAndSkill: [
      "I have more than 10 years of experience in BA major",
      "I have used to do the same with other project before",
      "I can use fluently tools: Figma, Miro, Lucidchart,...",
    ],
    projectPlan: [
      "Firstly, I will...",
      "After that, I will...",
      "I believe that I can complete this project as I planned",
      "Please contact me via JDI Central platform to talk more about this project",
    ],
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <p className="text-13 text-dark-gray">Test Submission</p>
          <div className="flex items-center cursor-pointer mt-10">
            <img src={TestUploadIcon} alt="Test Upload Icon" />
            <p className="text-14 ml-5 upload-text">{data?.testName}</p>
          </div>
          <p className="text-13 text-dark-gray mt-15">Expected Salary</p>
          <p>
            <strong className="text-14 mt-10">
              {formatMoney(data?.expectedSalary)}
            </strong>{" "}
            <span>({data?.expectedPayType})</span>
          </p>
          <p className="text-13 text-dark-gray mt-15">
            Expected Working Schedule
          </p>
          <strong className="text-14 mt-10">{data?.expectedSchedule}</strong>
        </Col>
        <Col span={12}>
          <p className="text-13 text-dark-gray">Test Submission</p>
          <ul className="mt-15">
            {data?.experienceAndSkill.map((item, index) => (
              <li key={index}>
                <strong className="text-14 mt-10">{item}</strong>
              </li>
            ))}
          </ul>
          <p className="text-13 text-dark-gray mt-15">Project plan</p>
          <ul className="mt-15">
            {data?.projectPlan.map((item, index) => (
              <li key={index}>
                <strong className="text-14 mt-10">{item}</strong>
              </li>
            ))}
          </ul>
          <p className="text-13 text-dark-gray mt-15">Attachment</p>
          <div className="flex items-center cursor-pointer mt-10">
            <img src={TestUploadIcon} alt="Test Upload Icon" />
            <p className="text-14 ml-5 upload-text">{data?.attachmentName}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ApplicationTab;
