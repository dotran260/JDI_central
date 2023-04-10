import React from "react";
import PlusIcon from "@iso/assets/images/icon/plus.svg";
import { Avatar } from "antd";
import CompanyLogo from "@iso/assets/images/company-logo.png";
import moment from "moment";
import { Separator } from "./CandidateDrawer.style";

const NoteTab = () => {
  const data = [
    {
      id: 1,
      name: "Robert Fox",
      role: "Employer",
      createdDate: "2020-10-10",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 2,
      name: "Robert Fox",
      role: "Employer",
      createdDate: "2020-10-10",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem , em ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem , em ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ,em ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem  ",
    },
  ];

  return (
    <div>
      <button className="app-button mb-20">
        <img src={PlusIcon} alt="plus" width={9} height={9} />
        <span className="ml-5 text-white text-11">Add Note</span>
      </button>
      {data.map((item, index) => (
        <div className="flex w-full">
          <Avatar
            src={CompanyLogo}
            size={42}
            className="flex-none self-baseline"
          />
          <div className="w-full ml-15">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <strong className="text-14">{item?.name}</strong>
                <p className="text-13 ml-10">{item?.role}</p>
              </div>
              <p className="text-gray text-11">
                {moment(item?.createdDate).format("DD MMM YYYY, hh:mm A")}
              </p>
            </div>
            <p className="text-14 mt-5">{item?.note}</p>
            {index !== data.length - 1 && <Separator className="mt-15 mb-15" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteTab;
