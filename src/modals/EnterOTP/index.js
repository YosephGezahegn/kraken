import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const EnterOTPModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/newpassword");
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
          <Column className="bg-white_A700 flex flex-col justify-end max-w-[480px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[20px] p-[30px] sm:pl-[15px] sm:pr-[15px] rounded-radius10 w-[100%]">
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Text
                  className="flex-grow text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                  as="h3"
                  variant="h3"
                >
                  Enter OTP
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
                Please check your mail, We sent an OTP code
              </Text>
            </Column>
            <div className="sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[100%] w-[66%]"></div>
            <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:px-[0] rounded-radius10 w-[100%]">
              <Button
                className="common-pointer cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                onClick={handleNavigate10}
                shape="RoundedBorder10"
                size="2xl"
                variant="FillGray900"
              >
                Confirm
              </Button>
              <Button
                className="cursor-pointer font-bold md:mt-[12px] mt-[18px] sm:mt-[9px] text-[18px] text-center text-gray_900 w-[100%]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineGray600"
              >
                Request OTP Again
              </Button>
            </Column>
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

export default EnterOTPModal;
