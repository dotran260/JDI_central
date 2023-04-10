import { Button, Col, Row } from "antd";
import {
  ComponentTitle,
  Fieldset,
  Form,
  Label,
  TableWrapper,
  TitleWrapper,
} from "./View.styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import Input from "@iso/components/uielements/input";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Modal from "@iso/components/Feedback/Modal";
import moment from "moment";

export default function View() {
  const [search, setSearch] = useState("");
  const { data, record, modalActive, isLoading, page, limit } = useSelector(
    (state) => state.Advisor
  );
  const dispatch = useDispatch();

  const handleRecord = (actionName, item) => {
    if (item.code && actionName !== "delete") actionName = "update";
  };

  const onRecordChange = (event, key) => {
    if (key) record[key] = event.target.value;
  };

  const handleChange = (pagination, filters, sorter) => {
    const page = pagination.current;
    const limit = pagination.pageSize;
    const filter = { page, limit, search };
  };

  const getData = () => {
    const filter = { page, limit, search };
  };

  const searchData = () => {
    const filter = { page: 1, limit, search };
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Info",
      dataIndex: "contactInfo",
      key: "contactInfo",
      render: (text) => {
        return (
          <div>
            {text?.others}
            <br />
            {text?.phoneNumber}
          </div>
        );
      },
    },
    {
      title: "Currently Working",
      dataIndex: "currentlyWorking",
      key: "currentlyWorking",
      render: (text) => {
        return (
          <div>
            {text?.company}
            <br />
            {text?.jobTitle}
            <br />
            {text?.experiences}
          </div>
        );
      },
    },
    {
      title: "Licenses And Certification",
      dataIndex: "licensesAndCertification",
      key: "licensesAndCertification",
      render: (text) => {
        return (
          <div>
            {text?.cpaNumber}
            <br />
            {text?.masRnfNumber}
            <br />
            {text?.cfpNumber}
          </div>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, row) => {
        return moment(text).format("DD-MM-YYYY");
      },
    },
  ];

  return (
    <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          <TitleWrapper>
            <ComponentTitle>Advisor Data</ComponentTitle>
          </TitleWrapper>
          <Row>
            <Col md={4}>
              <Input
                label="Search"
                placeholder="Search text..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            &nbsp;&nbsp;
            <Col>
              <Button onClick={() => searchData()} type="primary">
                Search
              </Button>
            </Col>
          </Row>
          <br />

          <Modal
            visible={modalActive}
            title={record.code ? "Update Record" : "Add New Record"}
            okText={record.code ? "Update Record" : "Add Record"}
            onOk={() => handleRecord("insert", record)}
          >
            <Form>
              <Fieldset>
                <Label>Name</Label>
                <Input
                  label="Name"
                  placeholder="Enter Name"
                  value={record.name}
                  onChange={(e) => onRecordChange(e, "name")}
                />
              </Fieldset>

              <Fieldset>
                <Label>Country</Label>
                <Input
                  label="Country"
                  placeholder="Enter Country"
                  value={record.countryOrigin}
                  onChange={(e) => onRecordChange(e, "countryOrigin")}
                />
              </Fieldset>

              <Fieldset>
                <Label>Registration No</Label>
                <Input
                  label="Registration No"
                  placeholder=""
                  value={record.registrationNo}
                  onChange={(e) => onRecordChange(e, "registrationNo")}
                />
              </Fieldset>

              <Fieldset>
                <Label>Phone Number</Label>
                <Input
                  label="Phone Number"
                  placeholder=""
                  value={record.phoneNumber}
                  onChange={(e) => onRecordChange(e, "phoneNumber")}
                />
              </Fieldset>

              <Fieldset>
                <Label>Website</Label>
                <Input
                  label="Website"
                  placeholder=""
                  value={record.website}
                  onChange={(e) => onRecordChange(e, "website")}
                />
              </Fieldset>

              <Fieldset>
                <Label>Year Establishment</Label>
                <Input
                  label="Year Establishment"
                  placeholder=""
                  value={record.yearEstablisment}
                  onChange={(e) => onRecordChange(e, "yearEstablisment")}
                />
              </Fieldset>
            </Form>
          </Modal>
          <TableWrapper
            columns={columns}
            bordered={true}
            dataSource={data.data}
            loading={isLoading}
            className="isoSimpleTable"
            rowKey="code"
            onChange={handleChange}
            pagination={{
              hideOnSinglePage: true,
              total: data.total,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${data.total} Results`;
              },
            }}
          />
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
