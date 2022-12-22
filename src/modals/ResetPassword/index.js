import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const ResetPasswordModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/enterotp");
  }
  function handleNavigate19() {
    navigate("/login");
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                as="h3"
                variant="h3"
              >
                Reset Password
              </Text>
              <Img
                src="images/img_close.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="close"
              />
            </Row>
            <Text
              className="font-normal leading-[180.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[96%]"
              variant="body2"
            >
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </Text>
            <Input
              className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="flex md:mt-[20px] mt-[30px] sm:mt-[15px] w-[100%]"
              type="email"
              name="TextFieldLa"
              placeholder="email address"
              prefix={
                <Img
                  src="images/img_mail.svg"
                  className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                  alt="mail"
                />
              }
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[18px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate18}
              shape="RoundedBorder10"
              size="2xl"
              variant="FillGray900"
            >
              Get OTP
            </Button>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[100%] md:mt-[12px] mt-[18px] sm:mt-[9px] text-[18px] text-center text-gray_900 w-[max-content]"
              onClick={handleNavigate19}
              shape="RoundedBorder10"
              size="2xl"
              variant="OutlineGray600"
            >
              Return to sign in
            </Button>
            <Line className="bg-bluegray_100 h-[1px] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]" />
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

export default ResetPasswordModal;
