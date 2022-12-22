import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Input,
  Grid,
} from "components";
import Header from "components/Header";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const BlogPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate54() {
    navigate("/login");
  }
  function handleNavigate55() {
    navigate("/agentlist");
  }
  function handleNavigate56() {
    navigate("/listing");
  }
  function handleNavigate57() {
    navigate("/aboutus");
  }
  function handleNavigate62() {
    navigate("/license");
  }
  function handleNavigate63() {
    navigate("/privacypolicy");
  }
  function handleNavigate64() {
    navigate("/faq");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_51 flex flex-col items-center justify-start pb-[124px] sm:pb-[15px] md:pb-[85px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="flex flex-col justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Text
                  className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Real Estate News & Blogs
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Input
                    className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[57%]"
                    name="TextFieldLa"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_1.svg"
                        className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="search"
                      />
                    }
                    size="lg"
                  ></Input>
                  <SelectBox
                    className="font-bold sm:mx-[0] text-[18px] text-gray_600 sm:w-[100%] w-[21%]"
                    placeholderClassName="text-gray_600"
                    name="DropdownLarg"
                    placeholder="Category"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_600.svg"
                        className="w-[24px] h-[24px] mr-[16px] sm:mr-[8px] sm:h-[13px] sm:w-[12px] md:mr-[11px] md:h-[17px] md:w-[16px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray100"
                  ></SelectBox>
                  <SelectBox
                    className="font-bold sm:mx-[0] text-[18px] text-gray_600 sm:w-[100%] w-[19%]"
                    placeholderClassName="text-gray_600"
                    name="DropdownLarg One"
                    placeholder="Popular"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_600.svg"
                        className="w-[24px] h-[24px] mr-[16px] sm:mr-[8px] sm:h-[13px] sm:w-[12px] md:mr-[11px] md:h-[17px] md:w-[16px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineBluegray100"
                  ></SelectBox>
                </Row>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 One"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Two"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Three"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Four"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Five"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Six"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Seven"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617_350X384.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Rectangle5617 Eight"
                    />
                    <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[24%] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Business
                      </Button>
                      <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold leading-[135.00%] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          10 Delightful Dining Room Decor Trends for Spring
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] sm:mb-[3px] md:mb-[4px] mb-[7px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              July 20, 2022
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                            <div className="bg-bluegray_100 sm:h-[3px] md:h-[4px] h-[5px] my-[3px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[5px]"></div>
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_600 w-[auto]"
                              variant="body5"
                            >
                              7 min read
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[50%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_1.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_600">
                          Continue Reading
                        </div>
                      </Button>
                    </Column>
                  </Column>
                </Grid>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[42px] md:mt-[55px] mt-[80px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[18%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray600"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    5
                  </Button>
                </Row>
                <Button
                  className="flex items-center justify-center min-w-[12%] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright_16X16.svg"
                      className="ml-[4px] text-center"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder10"
                  size="xl"
                  variant="OutlineGray600"
                >
                  <div className="bg-transparent cursor-pointer font-semibold text-[16px] text-gray_900">
                    Next Page
                  </div>
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
        <Footer1 className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default BlogPagePage;
