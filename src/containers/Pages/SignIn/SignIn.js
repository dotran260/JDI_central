import { notification } from "@iso/components";
import Checkbox from "@iso/components/uielements/checkbox";
import Input from "@iso/components/uielements/input";
import IntlMessages from "@iso/components/utility/intlMessages";
import appAction from "@iso/redux/app/actions";
import authAction from "@iso/redux/auth/actions";
import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import axiosClient from "../../../api/axios";
import SignInStyleWrapper from "./SignIn.styles";

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  let { from } = { pathname: "/admin/sigin" } || {
    from: { pathname: "/admin/dashboard/" },
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  const onFinish = async (values) => {
    const result = await axiosClient.post("/v1/user/login", {
      email: values.email,
      password: values.password,
    });
    const { statusCode, data } = result;
    const { message } = result.data;
    if (!statusCode && data && data?.user?.userRole === "admin") {
      const accessToken = data.user.token;
      dispatch(login(accessToken));
      dispatch(clearMenu());
      history.push("/admin/dashboard/");
      return notification('success', 'Login Success');  
    } else {
      return notification("error", message);
    }
  };

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <Form form={form} onFinish={onFinish}>
              <div className="isoInputWrapper">
                <Form.Item name="email" rules={[{ required: true }]}>
                  <Input
                    size="large"
                    type="email"
                    placeholder="Email"
                    autoComplete="true"
                  />
                </Form.Item>
              </div>

              <div className="isoInputWrapper">
                <Form.Item name="password" rules={[{ required: true }]}>
                  <Input
                    size="large"
                    type="password"
                    placeholder="Password"
                    autoComplete="false"
                  />
                </Form.Item>
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
              </div>
              <div className="isoInputWrapper isoOtherLogin">
                <button type="submit" className="btnAuthZero">
                  <IntlMessages id="page.signInButton" />
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
