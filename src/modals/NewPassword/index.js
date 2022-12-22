import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button, Line } from "components";

const NewPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-end max-w-[480px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[20px] p-[30px] sm:pl-[15px] sm:pr-[15px] rounded-radius10 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                as="h3"
                variant="h3"
              >
                New Password
              </Text>
              <Img
                src="images/img_close.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="close"
              />
            </Row>
            <Text
              className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-gray_900 w-[auto]"
              variant="body2"
            >
              Enter your new password
            </Text>
            <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[100%]"
                type="password"
                name="TextFieldLa"
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
            <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Input
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[100%]"
                type="password"
                name="TextFieldLa One"
                placeholder="Re-New Password"
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
            <Button
              className="cursor-pointer font-bold min-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder10"
              size="2xl"
              variant="FillGray900"
            >
              Update Password
            </Button>
            <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] sm:px-[0] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Text
                className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[36px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                <span className="text-gray_600 text-[20px] font-manrope">
                  Remember the Password?{" "}
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

export default NewPasswordModal;
