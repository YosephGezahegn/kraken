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

const CreateAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[48%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-center max-w-[680px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[18px] p-[27px] sm:pl-[15px] sm:pr-[15px] rounded-radius10 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                as="h3"
                variant="h3"
              >
                Create Account
              </Text>
              <Img
                src="images/img_close.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="close"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[49%]"
                type="text"
                name="TextFieldLa"
                placeholder="Full Name"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="user"
                  />
                }
              ></Input>
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex md:ml-[13px] ml-[20px] sm:mx-[0] sm:w-[100%] w-[49%]"
                type="email"
                name="TextFieldLa One"
                placeholder="Email Address"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="mail"
                  />
                }
              ></Input>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[49%]"
                type="number"
                name="TextFieldLa Two"
                placeholder="Phone Number"
                prefix={
                  <Img
                    src="images/img_call.svg"
                    className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="call"
                  />
                }
              ></Input>
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex md:ml-[13px] ml-[20px] sm:mx-[0] sm:w-[100%] w-[49%]"
                name="TextFieldLa Three"
                placeholder="Address"
                prefix={
                  <Img
                    src="images/img_location_24X24.svg"
                    className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="location"
                  />
                }
              ></Input>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[49%]"
                type="password"
                name="Group100000150"
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
                    className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="airplane"
                  />
                }
              ></Input>
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex md:ml-[13px] ml-[20px] sm:mx-[0] sm:w-[100%] w-[49%]"
                type="password"
                name="Group100000150 One"
                placeholder="Re-Password"
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
                    className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                    alt="airplane"
                  />
                }
              ></Input>
            </Row>
            <CheckBox
              className="font-bold ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[18px] text-gray_900"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="Iagreetoall"
              label="I agree to all Terms & Conditions"
            ></CheckBox>
            <Button
              className="cursor-pointer font-bold min-w-[100%] ml-[3px] sm:mt-[14px] md:mt-[18px] mt-[27px] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder10"
              size="2xl"
              variant="FillGray900"
            >
              Create Account
            </Button>
            <Button
              className="flex items-center justify-center md:mt-[12px] min-w-[100%] ml-[3px] mt-[18px] sm:mt-[9px] text-center w-[max-content]"
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
                Create Account with Google
              </div>
            </Button>
            <Column className="flex flex-col items-center justify-start sm:mb-[12px] md:mb-[15px] mb-[23px] sm:mt-[20px] md:mt-[26px] mt-[38px] sm:px-[0] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Text
                className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                <span className="text-gray_600 text-[20px] font-manrope">
                  H
                </span>
                <span className="text-gray_600 text-[20px] font-manrope">
                  ave an account?{" "}
                </span>
                <span className="text-gray_900 text-[20px] font-manrope">
                  Log in
                </span>
              </Text>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CreateAccountModal;
