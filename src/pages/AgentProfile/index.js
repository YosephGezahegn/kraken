import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Stack,
  Grid,
  Line,
  List,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AgentProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate37() {
    navigate("/aboutus");
  }
  function handleNavigate43() {
    navigate("/propertydetails");
  }
  function handleNavigate44() {
    navigate("/login");
  }
  function handleNavigate45() {
    navigate("/blogpage");
  }
  function handleNavigate46() {
    navigate("/agentlist");
  }
  function handleNavigate47() {
    navigate("/listing");
  }
  function handleNavigate48() {
    navigate("/privacypolicy");
  }
  function handleNavigate49() {
    navigate("/faq");
  }
  function handleNavigate50() {
    navigate("/propertydetails");
  }
  function handleNavigate51() {
    navigate("/propertydetails");
  }
  function handleNavigate52() {
    navigate("/propertydetails");
  }
  function handleNavigate53() {
    navigate("/propertydetails");
  }
  function handleNavigate58() {
    navigate("/license");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Stack className="h-[4040px] relative w-[100%]">
              <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Img
                    src="images/img_coverimage.png"
                    className="max-w-[100%] w-[100%]"
                    alt="CoverImage"
                  />
                  <Column className="bg-gray_51 flex flex-col items-center justify-end sm:p-[15px] md:p-[46px] p-[67px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start mt-[109px] sm:mt-[58px] md:mt-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                            <Button
                              className="cursor-pointer font-semibold min-w-[25%] text-[16px] text-center text-white_A700 w-[max-content]"
                              shape="RoundedBorder10"
                              size="xl"
                              variant="FillGray900"
                            >
                              For rent
                            </Button>
                            <Button
                              className="cursor-pointer font-semibold min-w-[24%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-gray_900 w-[max-content]"
                              shape="RoundedBorder10"
                              size="xl"
                              variant="OutlineGray600"
                            >
                              For sale
                            </Button>
                            <Button
                              className="cursor-pointer font-semibold min-w-[22%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-gray_900 w-[max-content]"
                              shape="RoundedBorder10"
                              size="xl"
                              variant="OutlineGray600"
                            >
                              About
                            </Button>
                            <Button
                              className="cursor-pointer font-semibold min-w-[24%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-gray_900 w-[max-content]"
                              shape="RoundedBorder10"
                              size="xl"
                              variant="OutlineGray600"
                            >
                              Review
                            </Button>
                          </Row>
                          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
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
                                        alt="eye"
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
                                              alt="bookmark"
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
                                              alt="ticket"
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
                                              alt="icon"
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
                                              src="images/img_settings_27.svg"
                                              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                              alt="settings"
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
                                        onClick={handleNavigate43}
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
                                              src="images/img_settings_28.svg"
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
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                                      <Button
                                        className="common-pointer cursor-pointer font-semibold min-w-[51%] text-[16px] text-center text-white_A700 w-[max-content]"
                                        onClick={handleNavigate53}
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
                                              src="images/img_settings_29.svg"
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
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                                      <Button
                                        className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                                        onClick={handleNavigate52}
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
                                              src="images/img_settings_30.svg"
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
                                              src="images/img_settings_31.svg"
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
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                                      <Button
                                        className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                                        onClick={handleNavigate51}
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
                                              src="images/img_settings_32.svg"
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
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[2px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                                      <Button
                                        className="common-pointer cursor-pointer font-semibold min-w-[51%] text-[16px] text-center text-white_A700 w-[max-content]"
                                        onClick={handleNavigate50}
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
                            </Grid>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] sm:px-[0] w-[100%]">
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
                      <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[27px] p-[40px] rounded-radius10 w-[100%]">
                        <Column className="flex flex-col sm:mb-[10px] md:mb-[13px] mb-[20px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                            <Img
                              src="images/img_rectangle5599.png"
                              className="md:h-[126px] h-[182px] sm:h-[97px] max-w-[100%] rounded-radius10 md:w-[125px] w-[182px] sm:w-[96px]"
                              alt="Rectangle5616"
                            />
                            <Column className="flex flex-col justify-start md:ml-[20px] ml-[30px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                              <Text
                                className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Bruno Fernandes
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                    alt="star"
                                  />
                                  <Img
                                    src="images/img_star.svg"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                    alt="star One"
                                  />
                                  <Img
                                    src="images/img_star.svg"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                    alt="star Two"
                                  />
                                  <Img
                                    src="images/img_star.svg"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                    alt="star Three"
                                  />
                                  <Img
                                    src="images/img_star_16X16.svg"
                                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                    alt="star Four"
                                  />
                                </Row>
                                <Text
                                  className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                                  variant="body3"
                                >
                                  4.5 review
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                                <Img
                                  src="images/img_call_24X24.svg"
                                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="call"
                                />
                                <Text
                                  className="flex-grow font-semibold ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_900"
                                  variant="body2"
                                >
                                  (302) 555-0107
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]">
                                <Img
                                  src="images/img_mail_1.svg"
                                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="mail"
                                />
                                <a
                                  href={"mailto:floyd_miles@email.com"}
                                  target="_blank"
                                  className="font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[18px] text-gray_900 w-[auto]"
                                  rel="noreferrer"
                                >
                                  staticmania@gmail.com
                                </a>
                              </Row>
                            </Column>
                          </Row>
                          <Text
                            className="font-normal leading-[180.00%] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_600 w-[100%]"
                            variant="body2"
                          >
                            A slider is great way to display a slideshow
                            featuring images or videos, usually on your
                            homepage.
                            <br />
                            Adding sliders to your site is no longer difficult.
                            You don’t have to know coding anymore. Just use a
                            slider widget and it will automatically insert the
                            slider on your web page.
                            <br />
                            One of the best ways to add beautiful sliders with
                            excellent responsiveness and advanced options.{" "}
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[20%] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder10"
                            size="xl"
                            variant="FillGray900"
                          >
                            Contact
                          </Button>
                        </Column>
                        <Line className="bg-bluegray_100 sm:h-[273px] md:h-[352px] h-[511px] sm:ml-[42px] md:ml-[55px] ml-[80px] sm:my-[10px] md:my-[13px] my-[20px] w-[1px]" />
                        <Column className="flex flex-col items-center md:ml-[33px] ml-[49px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[34%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Experiences
                              </Text>
                              <Text
                                className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_600 w-[auto]"
                                variant="body2"
                              >
                                15+ years experience
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                              <Text
                                className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Property Types
                              </Text>
                              <Text
                                className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_600 w-[auto]"
                                variant="body2"
                              >
                                Private House, Villa, Townhouse, Apartment
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                              <Text
                                className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Area
                              </Text>
                              <Text
                                className="font-semibold mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_600 w-[auto]"
                                variant="body2"
                              >
                                <span className="text-gray_900 text-[18px] font-manrope">
                                  California
                                </span>
                                <span className="text-gray_600 text-[18px] font-manrope">
                                  ,{" "}
                                </span>
                                <span className="text-gray_600 text-[18px] font-manrope">
                                  San Jose
                                </span>
                                <span className="text-gray_600 text-[18px] font-manrope">
                                  , Miami
                                </span>
                              </Text>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                              <Text
                                className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Address
                              </Text>
                              <Text
                                className="font-semibold mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_600 w-[auto]"
                                variant="body2"
                              >
                                59 Orchard, NY 5005, US
                              </Text>
                            </Column>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                              <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                                <Text
                                  className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  License No
                                </Text>
                                <Text
                                  className="font-semibold mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_600 w-[auto]"
                                  variant="body2"
                                >
                                  BF-0535
                                </Text>
                              </Column>
                              <Column className="flex flex-col md:ml-[41px] ml-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                                <Text
                                  className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  Website
                                </Text>
                                <a
                                  href={"javascript:"}
                                  className="font-semibold mt-[11px] sm:mt-[5px] md:mt-[7px] text-[18px] text-gray_600 underline w-[auto]"
                                  rel="noreferrer"
                                >
                                  www.staticmania.com
                                </a>
                              </Column>
                            </Row>
                            <Column className="flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                              <Text
                                className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Social
                              </Text>
                              <Img
                                src="images/img_socailicons.svg"
                                className="max-w-[100%] mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]"
                                alt="Socailicons"
                              />
                            </Column>
                          </Column>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start mt-[124px] sm:mt-[66px] md:mt-[85px] sm:py-[15px] md:py-[20px] py-[30px] rounded-radius10 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[94%]">
                          <Text
                            className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Clients Review
                          </Text>
                          <Button
                            className="flex items-center justify-center min-w-[18%] text-center w-[max-content]"
                            rightIcon={
                              <Img
                                src="images/img_plus.svg"
                                className="ml-[10px] sm:ml-[5px] md:ml-[6px] text-center"
                                alt="plus"
                              />
                            }
                            shape="RoundedBorder10"
                            size="2xl"
                            variant="FillGray900"
                          >
                            <div className="bg-transparent cursor-pointer font-bold text-[18px] text-white_A700">
                              Write a Reveiw
                            </div>
                          </Button>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]" />
                        <Column className="flex flex-col justify-start mb-[10px] sm:mb-[5px] md:mb-[6px] sm:mt-[20px] md:mt-[26px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                          <List
                            className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] w-[100%]"
                            orientation="vertical"
                          >
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start my-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 w-[100%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] sm:w-[100%] w-[91%]">
                                <Text
                                  className="font-semibold leading-[165.00%] text-gray_600 w-[100%]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Eget eu massa et consectetur. Mauris donec.
                                  Leo a, id sed duis proin sodales. Turpis
                                  viverra diam porttitor mattis morbi ac amet.
                                  Euismod commodo. We get you customer
                                  relationships that last.{" "}
                                </Text>
                                <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[42%]">
                                  <Column className="flex flex-col justify-start w-[100%]">
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Five"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star One"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Two"
                                          />
                                          <Img
                                            src="images/img_star_1.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Three"
                                          />
                                        </Row>
                                        <Text
                                          className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          variant="body1"
                                        >
                                          4.5 review
                                        </Text>
                                      </Row>
                                      <Text
                                        className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body1"
                                      >
                                        02 June 2022
                                      </Text>
                                    </Row>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[4px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                                      <Img
                                        src="images/img_rectangle5615.png"
                                        className="sm:h-[43px] md:h-[56px] h-[80px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                                        alt="Ellipse2695"
                                      />
                                      <Column className="flex flex-col justify-start mb-[3px] md:ml-[11px] ml-[16px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                                        <Text
                                          className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          as="h4"
                                          variant="h4"
                                        >
                                          Taylor Wilson
                                        </Text>
                                        <Text
                                          className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_900 w-[auto]"
                                          variant="body2"
                                        >
                                          Product Manager - Static Mania
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start my-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 w-[100%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] sm:w-[100%] w-[91%]">
                                <Text
                                  className="font-semibold leading-[165.00%] text-gray_600 w-[100%]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Eget eu massa et consectetur. Mauris donec.
                                  Leo a, id sed duis proin sodales. Turpis
                                  viverra diam porttitor mattis morbi ac amet.
                                  Euismod commodo. We get you customer
                                  relationships that last.{" "}
                                </Text>
                                <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[42%]">
                                  <Column className="flex flex-col justify-start w-[100%]">
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Six"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star One One"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Two One"
                                          />
                                          <Img
                                            src="images/img_star_1.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Three One"
                                          />
                                        </Row>
                                        <Text
                                          className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          variant="body1"
                                        >
                                          4.5 review
                                        </Text>
                                      </Row>
                                      <Text
                                        className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body1"
                                      >
                                        02 June 2022
                                      </Text>
                                    </Row>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[4px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                                      <Img
                                        src="images/img_rectangle5615.png"
                                        className="sm:h-[43px] md:h-[56px] h-[80px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                                        alt="Ellipse2696"
                                      />
                                      <Column className="flex flex-col justify-start mb-[3px] md:ml-[11px] ml-[16px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                                        <Text
                                          className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          as="h4"
                                          variant="h4"
                                        >
                                          Taylor Wilson
                                        </Text>
                                        <Text
                                          className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_900 w-[auto]"
                                          variant="body2"
                                        >
                                          Product Manager - Static Mania
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start my-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 w-[100%]">
                              <Column className="flex flex-col justify-start sm:mx-[0] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] sm:w-[100%] w-[91%]">
                                <Text
                                  className="font-semibold leading-[165.00%] text-gray_600 w-[100%]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Eget eu massa et consectetur. Mauris donec.
                                  Leo a, id sed duis proin sodales. Turpis
                                  viverra diam porttitor mattis morbi ac amet.
                                  Euismod commodo. We get you customer
                                  relationships that last.{" "}
                                </Text>
                                <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[42%]">
                                  <Column className="flex flex-col justify-start w-[100%]">
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Seven"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star One Two"
                                          />
                                          <Img
                                            src="images/img_star_24X24.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Two Two"
                                          />
                                          <Img
                                            src="images/img_star_1.svg"
                                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                            alt="star Three Two"
                                          />
                                        </Row>
                                        <Text
                                          className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          variant="body1"
                                        >
                                          4.5 review
                                        </Text>
                                      </Row>
                                      <Text
                                        className="font-semibold mt-[2px] text-gray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body1"
                                      >
                                        02 June 2022
                                      </Text>
                                    </Row>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[4px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                                      <Img
                                        src="images/img_rectangle5615.png"
                                        className="sm:h-[43px] md:h-[56px] h-[80px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                                        alt="Ellipse2697"
                                      />
                                      <Column className="flex flex-col justify-start mb-[3px] md:ml-[11px] ml-[16px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                                        <Text
                                          className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                          as="h4"
                                          variant="h4"
                                        >
                                          Taylor Wilson
                                        </Text>
                                        <Text
                                          className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_900 w-[auto]"
                                          variant="body2"
                                        >
                                          Product Manager - Static Mania
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Column>
                            </Column>
                          </List>
                          <SelectBox
                            className="font-semibold sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] text-[16px] text-gray_900 sm:w-[100%] w-[13%]"
                            placeholderClassName="text-gray_900"
                            name="ButtonMedium"
                            placeholder="See more"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_gray_900.svg"
                                className="w-[16px] h-[16px] mr-[18px] sm:mr-[9px] sm:h-[9px] sm:w-[8px] md:mr-[12px] md:h-[12px] md:w-[11px] max-w-[100%]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder10"
                            size="md"
                            variant="OutlineGray600"
                          ></SelectBox>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start sm:mx-[0] mx-[auto] sm:px-[0] top-[5%] sm:w-[100%] w-[81%]">
                <Img
                  src="images/img_rectangle5599.png"
                  className="md:h-[104px] h-[150px] sm:h-[80px] max-w-[100%] rounded-radius10 md:w-[103px] w-[150px] sm:w-[79px]"
                  alt="Rectangle5599"
                />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[20px] ml-[30px] sm:mt-[31px] md:mt-[40px] mt-[59px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[53%]">
                    <Column className="flex flex-col justify-start mt-[1px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                        <Text
                          className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Bruno Fernandes
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[55px] ml-[80px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                          <Img
                            src="images/img_call_24X24.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="call One"
                          />
                          <Text
                            className="flex-grow font-semibold ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_900"
                            variant="body2"
                          >
                            (302) 555-0107
                          </Text>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                            <Img
                              src="images/img_star.svg"
                              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Eight"
                            />
                            <Img
                              src="images/img_star.svg"
                              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Nine"
                            />
                            <Img
                              src="images/img_star.svg"
                              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Ten"
                            />
                            <Img
                              src="images/img_star.svg"
                              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Eleven"
                            />
                            <Img
                              src="images/img_star_16X16.svg"
                              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Twelve"
                            />
                          </Row>
                          <Text
                            className="font-semibold mt-[1px] text-gray_900 w-[auto]"
                            variant="body3"
                          >
                            4.5 review
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                          <Img
                            src="images/img_mail_1.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="mail One"
                          />
                          <a
                            href={"mailto:floyd_miles@email.com"}
                            target="_blank"
                            className="font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[18px] text-gray_900 w-[auto]"
                            rel="noreferrer"
                          >
                            staticmania@gmail.com
                          </a>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                  <Button
                    className="cursor-pointer font-semibold mb-[11px] sm:mb-[5px] md:mb-[7px] min-w-[12%] sm:mt-[3px] md:mt-[4px] mt-[7px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Contact
                  </Button>
                </Row>
              </Row>
            </Stack>
          </Column>
          <Footer className="bg-white_A700 w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default AgentProfilePage;
