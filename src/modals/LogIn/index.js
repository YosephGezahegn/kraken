import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  CheckBox,
  Button,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const LogInModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/resetpassword");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-end max-w-[480px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[20px] p-[30px] sm:pl-[15px] sm:pr-[15px] rounded-radius10 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow mt-[2px] text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                as="h3"
                variant="h3"
              >
                Log in
              </Text>
              <Img
                src="images/img_close.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="close"
              />
            </Row>
            <Input
              className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="flex md:mt-[20px] mt-[30px] sm:mt-[15px] w-[100%]"
              type="email"
              name="TextFieldLa"
              placeholder="user / email address"
              prefix={
                <Img
                  src="images/img_user.svg"
                  className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                  alt="user"
                />
              }
            ></Input>
            <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[100%]"
                type="password"
                name="TextFieldLa One"
                placeholder="Password"
                prefix={
                  <Img
                    src="images/img_user_24X24.svg"
                    className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="user"
                  />
                }
                suffix={
                  <Img
                    src="images/img_airplane.svg"
                    className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="airplane"
                  />
                }
              ></Input>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
              <CheckBox
                className="font-bold mt-[2px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[18px] text-gray_900"
                inputClassName="h-[18px] mr-[5px] w-[18px]"
                name="Remember"
                label="Remember"
              ></CheckBox>
              <Text
                className="common-pointer font-bold text-gray_900 w-[auto]"
                variant="body2"
                onClick={handleNavigate20}
              >
                Forgot Password
              </Text>
            </Row>
            <Button
              className="cursor-pointer font-bold min-w-[100%] sm:mt-[15px] md:mt-[19px] mt-[29px] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder10"
              size="2xl"
              variant="FillGray900"
            >
              Log in
            </Button>
            <Button
              className="flex items-center justify-center md:mt-[12px] min-w-[100%] mt-[18px] sm:mt-[9px] text-center w-[max-content]"
              leftIcon={
                <Img
                  src="images/img_refresh_20X20.svg"
                  className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                  alt="refresh"
                />
              }
              shape="RoundedBorder10"
              size="2xl"
              variant="OutlineGray600"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900">
                Log in with Google
              </div>
            </Button>
            <Line className="bg-bluegray_100 h-[1px] sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]" />
            <Text
              className="font-semibold sm:mt-[17px] md:mt-[22px] mt-[33px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body1"
            >
              <span className="text-gray_600 text-[20px] font-manrope">
                Don’t have an account?{" "}
              </span>
              <span className="text-gray_900 text-[20px] font-manrope">
                Create Account
              </span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default LogInModal;
