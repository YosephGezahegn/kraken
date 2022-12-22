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
  Slider,
  List,
  Input,
} from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate65() {
    navigate("/propertydetails");
  }
  function handleNavigate66() {
    navigate("/propertydetails");
  }
  function handleNavigate67() {
    navigate("/listing");
  }
  function handleNavigate70() {
    navigate("/aboutus");
  }
  function handleNavigate71() {
    navigate("/listing");
  }
  function handleNavigate72() {
    navigate("/propertydetails");
  }
  function handleNavigate73() {
    navigate("/propertydetails");
  }
  function handleNavigate74() {
    navigate("/propertydetails");
  }
  function handleNavigate75() {
    navigate("/propertydetails");
  }
  function handleNavigate76() {
    navigate("/faq");
  }
  function handleNavigate77() {
    navigate("/login");
  }
  function handleNavigate78() {
    navigate("/blogpage");
  }
  function handleNavigate79() {
    navigate("/agentlist");
  }
  function handleNavigate80() {
    navigate("/listing");
  }
  function handleNavigate85() {
    navigate("/license");
  }
  function handleNavigate86() {
    navigate("/privacypolicy");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Stack className="bg-yellow_50 h-[720px] sm:pl-[15px] md:pl-[45px] pl-[66px] sm:py-[15px] md:py-[45px] py-[66px] relative w-[100%]">
              <Stack className="absolute bottom-[9%] h-[505px] sm:w-[100%] w-[92%]">
                <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] md:pt-[11px] pt-[16px] sm:pt-[8px] sm:px-[0] top-[0] sm:w-[100%] w-[56%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Text
                      className="text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Find a perfect property Where you'll love to live
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_700 w-[100%]"
                      variant="body1"
                    >
                      We helps businesses customize, automate and scale up their
                      ad production and delivery.
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[40%]">
                      <Button
                        className="cursor-pointer font-bold min-w-[33%] text-[18px] text-center text-gray_600 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="FillWhiteA700"
                      >
                        Buy
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[33%] ml-[4px] text-[18px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="FillGray300"
                      >
                        Sell
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[33%] ml-[4px] text-[18px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="FillGray300"
                      >
                        Rent
                      </Button>
                    </Row>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius14 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[80%]">
                          <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                            <Column className="flex flex-col justify-start w-[100%]">
                              <Text
                                className="font-semibold text-gray_601 w-[auto]"
                                variant="body4"
                              >
                                City/Street
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[3px] w-[100%]">
                                <Text
                                  className="flex-grow font-bold text-gray_900"
                                  variant="body2"
                                >
                                  New York City
                                </Text>
                                <Img
                                  src="images/img_location.svg"
                                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="location"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                            <Text
                              className="font-semibold text-gray_601 w-[auto]"
                              variant="body4"
                            >
                              Property Type
                            </Text>
                            <SelectBox
                              className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-[18px] text-gray_900 w-[100%]"
                              placeholderClassName="text-gray_900"
                              name="group1000001527"
                              placeholder="Duplex House"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_sort.svg"
                                  className="w-[20px] h-[20px] mr-[0] sm:h-[11px] sm:w-[10px] md:h-[14px] md:w-[13px] max-w-[100%]"
                                  alt="sort"
                                />
                              }
                              size="sm"
                            ></SelectBox>
                          </Column>
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <Text
                              className="font-semibold text-gray_601 w-[auto]"
                              variant="body4"
                            >
                              Property Type
                            </Text>
                            <SelectBox
                              className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] pb-[1px] text-[18px] text-gray_900 w-[100%]"
                              placeholderClassName="text-gray_900"
                              name="price"
                              placeholder="$15000 - $350000"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_sort.svg"
                                  className="w-[20px] h-[20px] mr-[0] sm:h-[11px] sm:w-[10px] md:h-[14px] md:w-[13px] max-w-[100%]"
                                  alt="sort"
                                />
                              }
                              size="sm"
                            ></SelectBox>
                          </Column>
                        </Row>
                        <Button
                          className="flex sm:h-[38px] md:h-[49px] h-[70px] items-center justify-center sm:w-[37px] md:w-[48px] w-[70px]"
                          shape="icbRoundedBorder16"
                          size="mdIcn"
                          variant="icbFillGray900"
                        >
                          <Img
                            src="images/img_search_70X70.svg"
                            className="h-[30px] sm:h-[16px] md:h-[21px] flex items-center justify-center"
                            alt="search One"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Stack className="absolute h-[503px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[45%]">
                  <Img
                    src="images/img_image.png"
                    className="absolute h-[503px] max-w-[100%] w-[100%]"
                    alt="image"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="bg-red_100 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[31px] p-[46px] rounded-radius20 sm:w-[100%] w-[49%]">
                <Column className="flex flex-col items-center justify-start ml-[4px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Text
                    className="leading-[140.00%] sm:mx-[0] text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[97%]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_900 w-[100%]"
                    variant="body2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </Column>
                <Button
                  className="cursor-pointer font-semibold min-w-[28%] ml-[4px] sm:mt-[26px] md:mt-[34px] mt-[50px] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder10"
                  size="xl"
                  variant="FillGray900"
                >
                  Get Started
                </Button>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column className="bg-deep_orange_50 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="refresh"
                    />
                    <Text
                      className="sm:mb-[13px] md:mb-[17px] mb-[26px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[15px] md:mt-[19px] mt-[29px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Search  your location
                    </Text>
                  </Column>
                  <Column className="bg-deep_orange_50 flex flex-col justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_instagram.svg"
                      className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] ml-[3px] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="instagram"
                    />
                    <Text
                      className="sm:mb-[10px] md:mb-[13px] mb-[20px] sm:mt-[12px] md:mt-[15px] mt-[23px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Visit  Appointment
                    </Text>
                  </Column>
                  <Column className="bg-deep_orange_50 flex flex-col justify-start sm:p-[15px] md:p-[17px] p-[25px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_camera.svg"
                      className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mt-[1px] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="camera"
                    />
                    <Text
                      className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:my-[13px] md:my-[17px] my-[26px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Get your  dream house
                    </Text>
                  </Column>
                  <Column className="bg-deep_orange_50 flex flex-col justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_instagram_30X30.svg"
                      className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="instagram One"
                    />
                    <Text
                      className="sm:mb-[13px] md:mb-[17px] mb-[26px] sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mt-[15px] md:mt-[19px] mt-[29px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Enjoy your  Appointment
                    </Text>
                  </Column>
                </Grid>
              </Column>
            </Row>
          </Column>
          <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[42px] md:mt-[55px] mt-[80px] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1184px] sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[48px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="clock"
                  />
                </Button>
                <Text
                  className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  $15.4M
                </Text>
                <Text
                  className="font-semibold leading-[140.00%] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body1"
                >
                  Owned from
                  <br />
                  <br />
                  Properties transactions
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="arrowdown One"
                  />
                </Button>
                <Text
                  className="sm:mt-[14px] md:mt-[19px] mt-[28px] text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  25K+
                </Text>
                <Text
                  className="font-semibold leading-[140.00%] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body1"
                >
                  Properties for Buy & sell Successfully
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="reply"
                  />
                </Button>
                <Text
                  className="sm:mt-[14px] md:mt-[19px] mt-[28px] text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  500
                </Text>
                <Text
                  className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-bluegray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Daily completed  transactions
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_search_orange_A700.svg"
                    className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                    alt="search Two"
                  />
                </Button>
                <Text
                  className="sm:mt-[14px] md:mt-[19px] mt-[28px] text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  600+
                </Text>
                <Text
                  className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-bluegray_600 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Reagular Clients
                </Text>
              </Column>
            </Row>
          </Row>
          <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] mt-[112px] sm:mt-[59px] md:mt-[77px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Featured Properties
                  </Text>
                  <Button
                    className="flex items-center justify-center min-w-[11%] mt-[1px] text-center w-[max-content]"
                    onClick={handleNavigate71}
                    rightIcon={
                      <Img
                        src="images/img_arrowright.svg"
                        className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                        alt="arrow_right"
                      />
                    }
                    size="sm"
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-orange_A700">
                      Explore All
                    </div>
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Button className="bg-transparent cursor-pointer font-bold mb-[1px] min-w-[21%] text-[18px] text-center text-gray_900 w-[max-content]">
                    Resident Property
                  </Button>
                  <Button className="bg-transparent cursor-pointer font-bold mb-[1px] min-w-[24%] sm:ml-[15px] md:ml-[20px] ml-[30px] text-[18px] text-center text-gray_400 w-[max-content]">
                    Commercial Property
                  </Button>
                  <Button className="bg-transparent cursor-pointer font-bold mb-[1px] min-w-[22%] sm:ml-[15px] md:ml-[20px] ml-[30px] text-[18px] text-center text-gray_400 w-[max-content]">
                    Industrial Property
                  </Button>
                  <Button className="bg-transparent cursor-pointer font-bold min-w-[24%] sm:ml-[15px] md:ml-[20px] ml-[30px] text-[18px] text-center text-gray_400 w-[max-content]">
                    Agriculture Property
                  </Button>
                </Row>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[30px] md:mt-[39px] mt-[57px] w-[100%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_260X384.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image One"
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
                                    src="images/img_ticket.svg"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                                  <Img
                                    src="images/img_icon.svg"
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
                                    src="images/img_settings.svg"
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
                              onClick={handleNavigate66}
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
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_1.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Two"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
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
                                    src="images/img_settings_20X20.svg"
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
                              onClick={handleNavigate65}
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
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_2.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Three"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
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
                                    src="images/img_settings_1.svg"
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
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                            <Button
                              className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                              onClick={handleNavigate75}
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
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_3.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Four"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
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
                                    src="images/img_settings_2.svg"
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
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                            <Button
                              className="common-pointer cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
                              onClick={handleNavigate74}
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
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Five"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
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
                                    src="images/img_settings_3.svg"
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
                              onClick={handleNavigate73}
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
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Column className="bg-gray_51 border border-red_101 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Six"
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
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
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
                                    src="images/img_settings_4.svg"
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
                              onClick={handleNavigate72}
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
                  </Column>
                </Grid>
              </Column>
            </Column>
          </Column>
          <Column className="bg-gray_51 flex flex-col items-center justify-end md:mt-[103px] mt-[150px] sm:mt-[79px] p-[120px] sm:p-[15px] md:p-[82px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between rounded-radius10 w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[38%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="leading-[140.00%] ml-[1px] sm:mx-[0] text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[92%]"
                      as="h3"
                      variant="h3"
                    >
                      Simple & easy way to find your dream Appointment
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                      variant="body2"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure is to be
                      welcomed.
                    </Text>
                  </Column>
                  <Button
                    className="cursor-pointer font-semibold min-w-[31%] ml-[1px] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Get Started
                  </Button>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Img
                        src="images/img_rectangle18.png"
                        className="max-w-[100%] rounded-radius10 w-[100%]"
                        alt="RectangleEighteen"
                      />
                      <Img
                        src="images/img_rectangle21.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius10 w-[100%]"
                        alt="RectangleTwentyOne"
                      />
                    </Column>
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Img
                        src="images/img_rectangle19.png"
                        className="max-w-[100%] rounded-radius10 w-[100%]"
                        alt="RectangleNineteen"
                      />
                      <Img
                        src="images/img_rectangle20.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius10 w-[100%]"
                        alt="RectangleTwenty"
                      />
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[103px] mt-[150px] sm:mt-[79px] sm:px-[0] w-[100%]">
                <Stack className="h-[645px] relative rounded-radius10 sm:w-[100%] w-[49%]">
                  <div className="absolute bg-orange_A700 bottom-[0] sm:h-[317px] md:h-[410px] h-[595px] left-[0] rounded-radius10 sm:w-[100%] w-[88%]"></div>
                  <Img
                    src="images/img_rectangle20_589X537.png"
                    className="absolute h-[589px] max-w-[100%] right-[0] rounded-radius10 top-[0] sm:w-[100%] w-[92%]"
                    alt="RectangleTwenty One"
                  />
                </Stack>
                <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[42px] mt-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="leading-[140.00%] ml-[1px] sm:mx-[0] text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[92%]"
                      as="h3"
                      variant="h3"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                      variant="body2"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-end ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[61%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[3px] text-gray_900"
                        variant="body2"
                      >
                        Find excellent deals
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                        variant="body2"
                      >
                        Friendly host & Fast support
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900"
                        variant="body2"
                      >
                        Secure payment system
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="cursor-pointer font-semibold min-w-[30%] ml-[1px] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Learn more
                  </Button>
                </Column>
              </Row>
            </Column>
          </Column>
          <Stack className="h-[402px] max-w-[1009px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <Row className="absolute bottom-[3%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] right-[33%] sm:w-[100%] w-[22%]">
              <div className="sm:w-[100%] w-[52%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[46px] md:mr-[59px] mr-[87px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="arrowleft"
                />
                <Text
                  className="font-bold sm:ml-[17px] md:ml-[22px] ml-[32px] text-gray_602 w-[auto]"
                  variant="body2"
                >
                  Previews
                </Text>
              </div>
              <div className="sm:ml-[15px] md:ml-[20px] ml-[30px] w-[35%]">
                <Text
                  className="font-bold sm:mr-[17px] md:mr-[22px] mr-[32px] mt-[3px] text-orange_A700 w-[auto]"
                  variant="body2"
                >
                  Next
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="arrowright"
                />
              </div>
            </Row>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={2}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-[100%]"
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
                          <Img
                            src="images/img_shape.svg"
                            className="max-w-[100%] sm:ml-[38px] md:ml-[50px] ml-[73px] w-[17%]"
                            alt="shape"
                          />
                        </Row>
                        <Text
                          className="font-semibold leading-[165.00%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_700 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </Column>
                    </Column>
                    <div className="sm:h-[13px] md:h-[17px] h-[24px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:w-[100%] w-[40%]"></div>
                  </Column>
                </React.Fragment>
              ))}
            />
          </Stack>
          <Column className="bg-gray_900 flex flex-col items-center justify-end md:mt-[103px] mt-[150px] sm:mt-[79px] p-[120px] sm:p-[15px] md:p-[82px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="text-white_A700 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      News & Consult
                    </Text>
                    <Button
                      className="flex items-center justify-center min-w-[11%] mt-[4px] text-center w-[max-content]"
                      onClick={handleNavigate67}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="arrow_right"
                        />
                      }
                      size="sm"
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-orange_A700">
                        Explore All
                      </div>
                    </Button>
                  </Row>
                  <List
                    className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_350X384.png"
                        className="max-w-[100%] rounded-radius10 w-[100%]"
                        alt="image Thirteen"
                      />
                      <Text
                        className="font-bold leading-[135.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        9 Easy-to-Ambitious DIY Projects to Improve Your Home
                      </Text>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[45%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_24X24.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-deep_orange_400">
                          Read the Article
                        </div>
                      </Button>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_6.png"
                        className="max-w-[100%] rounded-radius10 w-[100%]"
                        alt="image Fourteen"
                      />
                      <Text
                        className="font-bold leading-[135.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Serie Shophouse Launch In July, Opportunity For
                        Investors
                      </Text>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[45%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_24X24.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-deep_orange_400">
                          Read the Article
                        </div>
                      </Button>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="max-w-[100%] rounded-radius10 w-[100%]"
                        alt="image Fifteen"
                      />
                      <Text
                        className="font-bold leading-[135.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Looking for a New Place? Use This Time to Create Your
                        Wishlist
                      </Text>
                      <Button
                        className="flex items-center justify-center md:mt-[16px] min-w-[45%] mt-[24px] sm:mt-[12px] text-center w-[max-content]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_24X24.svg"
                            className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                            alt="arrow_right"
                          />
                        }
                        size="sm"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-deep_orange_400">
                          Read the Article
                        </div>
                      </Button>
                    </Column>
                  </List>
                </Column>
              </Column>
              <Column className="bg-gray_401 flex flex-col items-center justify-end mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-radius10 sm:w-[100%] w-[59%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                  <Text
                    className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_900 w-[100%]"
                    variant="body2"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[65%]">
                  <Input
                    className="font-semibold p-[0] text-[14px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[66%]"
                    type="email"
                    name="input"
                    placeholder="Enter your Email"
                    size="sm"
                    variant="FillGray52"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold min-w-[32%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Subscribe
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
          <footer className="bg-white_A700 w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1194px] sm:mb-[41px] md:mb-[52px] mb-[77px] md:ml-[82px] ml-[auto] md:mr-[86px] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-markoone items-start w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_home.svg"
                      className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="home One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[11px] sm:ml-[5px] md:ml-[7px] not-italic text-orange_A700"
                      variant="body1"
                    >
                      Relasto
                    </Text>
                  </Row>
                  <Column className="flex flex-col font-manrope justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-semibold text-gray_900"
                          variant="body3"
                        >
                          59 Bervely Hill Ave, Brooklyn Town,  New York, NY
                          5630, CA, US
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[28px] sm:mt-[14px] md:mt-[19px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          +056 686 56 56 98 info@staticmania.com
                        </a>
                      </li>
                      <li className="w-[77%] mt-[45px] sm:mt-[23px] sm:w-[100%] md:mt-[30px] max-w-[100%]">
                        <Img
                          src="images/img_socialmedia.svg"
                          className="cursor-pointer max-w-[100%]"
                          alt="socialmedia"
                        />
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col font-manrope items-center justify-start md:ml-[161px] ml-[235px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[7%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Features
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-semibold text-gray_900"
                          variant="body3"
                        >
                          Home v1
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[21px] sm:mt-[11px] md:mt-[14px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Home v2
                        </a>
                      </li>
                      <li className="w-[auto] mt-[22px] sm:mt-[11px] md:mt-[15px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          About
                        </a>
                      </li>
                      <li className="w-[auto] mt-[21px] sm:mt-[11px] md:mt-[14px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="w-[auto] mt-[22px] sm:mt-[11px] md:mt-[15px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Search
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col font-manrope justify-start md:ml-[52px] ml-[77px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Information
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-semibold text-gray_900"
                          variant="body3"
                        >
                          Listing v1
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[20px] sm:mt-[10px] md:mt-[13px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Listing v2
                        </a>
                      </li>
                      <li className="w-[auto] mt-[20px] sm:mt-[10px] md:mt-[13px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Property Details
                        </a>
                      </li>
                      <li className="w-[auto] mt-[20px] sm:mt-[10px] md:mt-[13px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Agent List
                          <br />
                        </a>
                      </li>
                      <li className="w-[auto] mt-[20px] sm:mt-[10px] md:mt-[13px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Agent Profile
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col font-manrope justify-start md:ml-[52px] ml-[77px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Documentation{" "}
                  </Text>
                  <Column className="flex flex-col justify-end sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[84%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto] mt-[2px]">
                        <Text
                          className="cursor-pointer font-semibold text-gray_900"
                          variant="body3"
                        >
                          Blog
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer font-semibold text-[16px] text-gray_900"
                          onClick={handleNavigate76}
                          rel="noreferrer"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="w-[auto] mt-[23px] sm:mt-[12px] md:mt-[15px]">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer font-semibold text-[16px] text-gray_900"
                          onClick={handleNavigate86}
                          rel="noreferrer"
                        >
                          Privacy Policy
                          <br />
                        </a>
                      </li>
                      <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer font-semibold text-[16px] text-gray_900"
                          onClick={handleNavigate85}
                          rel="noreferrer"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col font-manrope justify-start md:ml-[52px] ml-[77px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    Others
                  </Text>
                  <Column className="flex flex-col justify-start md:ml-[3px] ml-[5px] sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-semibold text-gray_900"
                          variant="body3"
                        >
                          Log in
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[18px] sm:mt-[9px] md:mt-[12px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Enter OTP
                        </a>
                      </li>
                      <li className="w-[auto] mt-[22px] sm:mt-[11px] md:mt-[15px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          New Password
                        </a>
                      </li>
                      <li className="w-[auto] mt-[22px] sm:mt-[11px] md:mt-[15px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Reset Password
                        </a>
                      </li>
                      <li className="w-[auto] mt-[21px] sm:mt-[11px] md:mt-[14px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-semibold text-[16px] text-gray_900"
                          rel="noreferrer"
                        >
                          Create Account
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
              </Row>
              <Text
                className="font-manrope font-semibold ml-[4px] mt-[120px] sm:mt-[63px] md:mt-[82px] text-gray_900 w-[auto]"
                variant="body3"
              >
                © Static Mania 2022. All rights reserved. / Template
                Documentation
              </Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default LandingPagePage;
