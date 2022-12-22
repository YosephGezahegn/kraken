import React from "react";

import { Row, Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[102px] md:ml-[70px] sm:mx-[0] my-[2px] sm:px-[0] w-[10%] sm:w-[100%]">
            <Img
              src="images/img_home.svg"
              className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
              alt="home"
            />
            <Text className="flex-grow font-markoone font-normal mb-[11px] sm:mb-[5px] md:mb-[7px] ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[20px] text-orange_A700">
              Relasto
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center mb-[12px] md:ml-[44px] ml-[65px] mt-[13px] sm:mx-[0] sm:my-[6px] md:my-[8px] sm:px-[0] sm:w-[100%] w-[47%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[11%]">
              <Text className="flex-grow font-manrope font-semibold text-[16px] text-gray_900">
                Home
              </Text>
              <Img
                src="defaultNoData.png"
                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                alt="arrowdown"
              />
            </Row>
            <Text className="font-manrope font-semibold sm:ml-[21px] md:ml-[27px] ml-[40px] my-[1px] text-[16px] text-gray_900 w-[auto]">
              About
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[27px] ml-[40px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
              <Text className="flex-grow font-manrope font-semibold text-[16px] text-gray_900">
                Listing
              </Text>
              <Img
                src="defaultNoData.png"
                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                alt="arrowdown One"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[27px] ml-[40px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
              <Text className="flex-grow font-manrope font-semibold text-[16px] text-gray_900">
                Agents
              </Text>
              <Img
                src="defaultNoData.png"
                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] sm:ml-[3px] md:ml-[4px] ml-[6px] md:w-[11px] w-[16px] sm:w-[8px]"
                alt="arrowdown Two"
              />
            </Row>
            <Text className="font-manrope font-semibold sm:ml-[21px] md:ml-[27px] ml-[40px] mt-[1px] text-[16px] text-gray_900 w-[auto]">
              Property{" "}
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
              <Text className="flex-grow font-manrope font-semibold text-[16px] text-gray_900">
                Others Pages
              </Text>
              <Img
                src="defaultNoData.png"
                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
                alt="arrowdown Three"
              />
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[110px] md:ml-[75px] sm:mx-[0] my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] sm:w-[100%] w-[7%]">
            <Img
              src="images/img_search.svg"
              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="search"
            />
            <Text className="flex-grow font-bold font-manrope sm:ml-[4px] md:ml-[5px] ml-[8px] my-[3px] text-[18px] text-gray_900">
              Search
            </Text>
          </Row>
          <Button
            className="bg-gray_900 cursor-pointer font-manrope font-semibold mb-[1px] min-w-[8%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:px-[15px] md:px-[20px] px-[30px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius10 text-[16px] text-center text-white_A700 w-[max-content]"
            shape="RoundedBorder10"
            size="PaddingAll12"
            variant="FillGray900"
            fontStyle="ManropeSemiBold16"
          >
            Log in
          </Button>
        </Row>
      </header>
    </>
  );
};

export default Header;
