import { Pagination, Select } from "antd";
import React from "react";
import { useHistory } from "react-router";

const AppPagination = ({
  total,
  current,
  setCurrent,
  pageSize,
  setPageSize,
}) => {
  const history = useHistory();

  const onChange = (page) => {
    setCurrent(page);
    history.push(`?page=${page}&limit=${pageSize}`);
  };

  const handleChangePageSize = (value) => {
    setCurrent(1);
    if (value > total) {
      setPageSize(total);
      history.push(`?page=1&limit=${value}`);
      return;
    }
    setPageSize(value);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="pagination-label">
        {`Showing ${current * pageSize - pageSize + 1} - ${
          current * pageSize > total ? total : current * pageSize
        } of ${total} results`}
      </p>
      <Pagination
        current={current}
        total={total}
        onChange={onChange}
        pageSize={pageSize}
        showSizeChanger={false}
        className="app-pagination"
      />
      <div>
        <span className="pagination-label mr-10">Items per page</span>
        <Select
          className="app-select"
          defaultActiveFirstOption
          defaultValue={"10"}
          onChange={handleChangePageSize}
        >
          {[10, 20, 30, 40, 50].map((item) => (
            <Select.Option value={item} key={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default AppPagination;
