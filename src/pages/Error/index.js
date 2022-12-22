import React from "react";

import { Column, Row, Img, Text, SelectBox, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  function handleNavigate114() {
    navigate("/login");
  }
  function handleNavigate115() {
    navigate("/blogpage");
  }
  function handleNavigate116() {
    navigate("/agentlist");
  }
  function handleNavigate117() {
    navigate("/listing");
  }
  function handleNavigate118() {
    navigate("/aboutus");
  }

  return (
    <>
      <Column className="bg-gray_51 flex flex-col font-manrope items-center justify-start mx-[auto] md:pb-[134px] sm:pb-[15px] pb-[196px] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col justify-start max-w-[464px] ml-[auto] mr-[auto] mt-[116px] sm:mt-[61px] md:mt-[79px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_illustration.svg"
            className="max-w-[100%] w-[100%]"
            alt="illustration"
          />
          <Text
            className="ml-[125px] sm:ml-[66px] md:ml-[86px] sm:mt-[20px] md:mt-[26px] mt-[39px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h4"
            variant="h4"
          >
            Something wrong!
          </Text>
          <Button
            className="flex items-center justify-center md:ml-[116px] md:mt-[16px] min-w-[35%] ml-[169px] mt-[24px] sm:ml-[90px] sm:mt-[12px] text-center w-[max-content]"
            rightIcon={
              <Img
                src="images/img_arrowright_16X16.svg"
                className="ml-[10px] sm:ml-[5px] md:ml-[6px] text-center"
                alt="arrow_right"
              />
            }
            shape="RoundedBorder10"
            size="2xl"
            variant="OutlineGray600"
          >
            <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900">
              Homepage
            </div>
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default ErrorPage;
