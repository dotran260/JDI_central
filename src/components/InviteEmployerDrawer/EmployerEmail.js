import { Form, Input } from "antd";
import React from "react";
import PlusIcon from "@iso/assets/images/icon/plus.svg";

const EmployerEmail = ({ value, onChange }) => {
  const handleAdd = () => {
    onChange([...value, ""]);
  };

  const handleChangeValue = (e, index) => {
    const newValue = [...value];
    newValue[index] = e.target.value;
    onChange(newValue);
  };

  return (
    <>
      {value &&
        value.map((item, index) => (
          <div className="mb-20" key={index}>
            <p>Email {index + 1}</p>
            <Form.Item
              name={`email${index}`}
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please input valid email!" },
              ]}
            >
              <Input
                className="app-input"
                value={item}
                onChange={(e) => handleChangeValue(e, index)}
                placeholder="Enter employer's email"
                type="email"
              />
            </Form.Item>
          </div>
        ))}
      <button type="button" className="app-button" onClick={handleAdd}>
        <div className="flex items-center justify-center">
          <img
            className="mr-10"
            src={PlusIcon}
            width={14}
            height={14}
            alt="plus"
          />
          <div className="text-11">Add More Email</div>
        </div>
      </button>
    </>
  );
};

export default EmployerEmail;
