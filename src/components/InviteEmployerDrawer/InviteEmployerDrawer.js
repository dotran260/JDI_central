import { Drawer, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect } from "react";
import EmployerEmail from "./EmployerEmail";
import { DrawerContentWrapper, Separator } from "./InviteEmployerDrawer.style";

const InviteEmployerDrawer = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    console.log(form.getFieldsValue());
  };

  useEffect(() => {
    form.setFieldsValue({
      email: ["", "", ""],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer width={600} visible={visible} onClose={onClose}>
      <DrawerContentWrapper>
        <p className="title">Invite New Employer</p>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="app-form"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <EmployerEmail />
          </Form.Item>
          <Separator className="mt-20 mb-20" />
          <Form.Item label="Message" name="message">
            <TextArea
              className="app-input"
              placeholder="Enter message to your Employers here"
              rows={3}
            />
          </Form.Item>

          <Form.Item>
            <button type="submit" className="app-button w-full mt-40">
              <div className="p-6">Send Invitation Email</div>
            </button>
          </Form.Item>
        </Form>
      </DrawerContentWrapper>
    </Drawer>
  );
};

export default InviteEmployerDrawer;
