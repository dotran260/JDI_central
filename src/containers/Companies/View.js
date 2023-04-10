import PlusIcon from "@iso/assets/images/icon/plus.svg";
import SearchIcon from "@iso/assets/images/icon/search.svg";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import React from "react";
import InviteEmployerDrawer from "../../components/InviteEmployerDrawer/InviteEmployerDrawer";
import CompaniesTable from "./CompaniesTable";
import { CompaniesContainer } from "./View.style";

const Companies = () => {
  const [showInvite, setShowInvite] = React.useState(false);

  return (
    <LayoutContentWrapper>
      <CompaniesContainer>
        <div className="flex items-center justify-between w-full company-header">
          <div className="company-title">
            <span>Employer</span>
            <span> List</span>
          </div>
          <div className="flex items-center">
            <div className="icon-button outline mr-10">
              <img src={SearchIcon} width={14} height={14} alt="search" />
            </div>
            <button className="app-button" onClick={() => setShowInvite(true)}>
              <div className="flex items-center justify-center">
                <img
                  className="mr-10"
                  src={PlusIcon}
                  width={14}
                  height={14}
                  alt="plus"
                />
                <div>Invite</div>
              </div>
            </button>
          </div>
        </div>
        <CompaniesTable />
        <InviteEmployerDrawer
          visible={showInvite}
          onClose={() => setShowInvite(false)}
        />
      </CompaniesContainer>
    </LayoutContentWrapper>
  );
};

export default Companies;
