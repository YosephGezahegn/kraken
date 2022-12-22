import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Input,
  Stack,
  GoogleMap,
  Grid,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ListingMapViewPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/propertydetails");
  }
  function handleNavigate17() {
    navigate("/propertydetails");
  }
  function handleNavigate21() {
    navigate("/propertydetails");
  }
  function handleNavigate22() {
    navigate("/propertydetails");
  }
  function handleNavigate23() {
    navigate("/propertydetails");
  }
  function handleNavigate24() {
    navigate("/propertydetails");
  }
  function handleNavigate25() {
    navigate("/propertydetails");
  }
  function handleNavigate26() {
    navigate("/login");
  }
  function handleNavigate27() {
    navigate("/blogpage");
  }
  function handleNavigate28() {
    navigate("/agentlist");
  }
  function handleNavigate29() {
    navigate("/listing");
  }
  function handleNavigate30() {
    navigate("/aboutus");
  }
  function handleNavigate31() {
    navigate("/propertydetails");
  }
  function handleNavigate34() {
    navigate("/license");
  }
  function handleNavigate35() {
    navigate("/privacypolicy");
  }
  function handleNavigate36() {
    navigate("/faq");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-gray_51 flex flex-col items-center justify-end max-w-[1429px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[25px] p-[37px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Find Property
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                    <Input
                      className="font-semibold p-[0] text-[18px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[35%]"
                      name="TextFieldLa"
                      placeholder="Enter your address"
                      suffix={
                        <Img
                          src="images/img_search_24X24.svg"
                          className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                          alt="search"
                        />
                      }
                      size="lg"
                    ></Input>
                    <SelectBox
                      className="font-bold sm:mx-[0] text-[18px] text-gray_700 sm:w-[100%] w-[9%]"
                      placeholderClassName="text-gray_700"
                      name="DropdownLarg"
                      placeholder="Buy"
                      isSearchable={false}
                      isMulti={false}
                      shape="RoundedBorder10"
                      size="lg"
                      variant="OutlineBluegray100"
                    ></SelectBox>
                    <SelectBox
                      className="font-bold sm:mx-[0] text-[18px] text-gray_700 sm:w-[100%] w-[19%]"
                      placeholderClassName="text-gray_700"
                      name="price"
                      placeholder="$15000 - $18000"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="w-[24px] h-[24px] mr-[16px] sm:mr-[8px] sm:h-[13px] sm:w-[12px] md:mr-[11px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBluegray100"
                    ></SelectBox>
                    <SelectBox
                      className="font-bold sm:mx-[0] text-[18px] text-gray_700 sm:w-[100%] w-[11%]"
                      placeholderClassName="text-gray_700"
                      name="DropdownLarg One"
                      placeholder="Bed - 3"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="w-[24px] h-[24px] mr-[16px] sm:mr-[8px] sm:h-[13px] sm:w-[12px] md:mr-[11px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder10"
                      size="xl"
                      variant="OutlineBluegray100"
                    ></SelectBox>
                    <Button
                      className="cursor-pointer font-bold min-w-[10%] text-[18px] text-center text-gray_700 w-[max-content]"
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="OutlineBluegray100"
                    >
                      More
                    </Button>
                    <Button
                      className="flex items-center justify-center min-w-[11%] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_search_70X70.svg"
                          className="ml-[10px] sm:ml-[5px] md:ml-[6px] text-center"
                          alt="search"
                        />
                      }
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[18px] text-white_A700">
                        Search
                      </div>
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Button
                      className="flex items-center justify-center min-w-[16%] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_close_16X16.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700">
                        Bathrooms 2+
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center md:ml-[6px] min-w-[27%] ml-[10px] sm:ml-[5px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_close_16X16.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700">
                        Square Feet 750 - 2000 sq. ft
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center md:ml-[6px] min-w-[17%] ml-[10px] sm:ml-[5px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_close_16X16.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_700">
                        Year Built 5 - 15
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center md:ml-[6px] min-w-[19%] ml-[10px] sm:ml-[5px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_close_16X16.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_900">
                        For Sale By Agent
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center md:ml-[6px] min-w-[19%] ml-[10px] sm:ml-[5px] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_close_16X16.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_900">
                        New Construction
                      </div>
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Stack className="h-[428px] sm:mt-[21px] md:mt-[28px] mt-[41px] relative w-[100%]">
                <GoogleMap
                  className="absolute sm:h-[228px] md:h-[295px] h-[428px] rounded-radius10 w-[100%]"
                  showMarker={false}
                ></GoogleMap>
                <Column
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-end justify-center m-[auto] sm:mx-[0] sm:p-[15px] md:p-[52px] p-[77px] sm:w-[100%] w-[91%]"
                  style={{ backgroundImage: "url('images/img_group4625.svg')" }}
                >
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:mx-[0] my-[14px] sm:my-[7px] md:my-[9px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 sm:w-[100%] w-[32%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_eye.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="eye"
                      />
                      <Text
                        className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                        variant="body4"
                      >
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Column className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_700"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                              alt="ticket"
                            />
                            <Text
                              className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_700"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </Row>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[4px] sm:w-[10px] md:w-[13px] w-[20px]"
                              alt="icon"
                            />
                            <Text
                              className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_700"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Img
                              src="images/img_settings_14.svg"
                              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                              alt="settings"
                            />
                            <Text
                              className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] text-gray_700"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                    <Text
                      className="font-bold md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $649,900
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_260X384.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye One"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark One"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket One"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon One"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_15.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings One"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate17}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold sm:ml-[16px] md:ml-[21px] ml-[31px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_8.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Two"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Two"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Two"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Two"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_16.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Two"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[51%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate16}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold sm:ml-[15px] md:ml-[20px] ml-[30px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_9.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Three"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Three"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Three"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Three"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_17.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Three"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate25}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_10.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Three"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Four"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Four"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Four"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Four"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_18.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Four"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray700"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_11.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Four"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Five"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Five"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Five"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Five"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_19.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Five"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate24}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold sm:ml-[16px] md:ml-[21px] ml-[31px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_12.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Five"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Six"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Six"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Six"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Six"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Six"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[51%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate23}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold sm:ml-[15px] md:ml-[20px] ml-[30px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_13.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Six"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Seven"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Seven"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Seven"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Seven"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_21.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Seven"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate22}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_14.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Seven"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Eight"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Eight"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Eight"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Eight"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_22.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Eight"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate21}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_image_15.png"
                      className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image Eight"
                    />
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="eye Nine"
                          />
                          <Text
                            className="flex-grow font-semibold mb-[2px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                            variant="body3"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="bookmark Nine"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  3 Bed Room
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                                <Img
                                  src="images/img_ticket_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="ticket Nine"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-gray_700"
                                  variant="body3"
                                >
                                  1 Bath
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                <Img
                                  src="images/img_icon_20X20.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="icon Nine"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  1,032 sqft
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Img
                                  src="images/img_settings_23.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings Nine"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_700"
                                  variant="body3"
                                >
                                  Family
                                </Text>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                            onClick={handleNavigate31}
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            View Details
                          </Button>
                          <Text
                            className="font-bold sm:ml-[16px] md:ml-[21px] ml-[31px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $649,900
                          </Text>
                        </Row>
                      </Column>
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
                    variant="OutlineBluegray102"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineBluegray102"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineBluegray102"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineBluegray102"
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
                  variant="OutlineBluegray102"
                >
                  <div className="bg-transparent cursor-pointer font-semibold text-[16px] text-gray_900">
                    Next Page
                  </div>
                </Button>
              </Row>
            </Column>
          </Column>
          <Footer className="bg-white_A700 w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ListingMapViewPage;
