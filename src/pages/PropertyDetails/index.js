import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Stack,
  GoogleMap,
  Input,
  TextArea,
  List,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const PropertyDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate81() {
    navigate("/blogpage");
  }
  function handleNavigate82() {
    navigate("/agentlist");
  }
  function handleNavigate83() {
    navigate("/listing");
  }
  function handleNavigate84() {
    navigate("/aboutus");
  }
  function handleNavigate88() {
    navigate("/license");
  }
  function handleNavigate89() {
    navigate("/privacypolicy");
  }
  function handleNavigate90() {
    navigate("/faq");
  }
  function handleNavigate91() {
    navigate("/login");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-gray_51 flex flex-col items-center justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1200px] sm:mb-[42px] md:mb-[55px] mb-[80px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[161px] p-[235px] rounded-radius10 sm:w-[100%] w-[66%]"
                    style={{
                      backgroundImage: "url('images/img_group100000142.png')",
                    }}
                  >
                    <Button
                      className="flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      size="lgIcn"
                      variant="icbFillWhiteA700ab"
                    >
                      <Img
                        src="images/img_search_gray_900.svg"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="search One"
                      />
                    </Button>
                  </Column>
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_rectangle5611.png"
                      className="max-w-[100%] rounded-radius10 w-[100%]"
                      alt="Rectangle5611"
                    />
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-end sm:mt-[12px] md:mt-[16px] mt-[24px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius10 w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group100000142_263X384.png')",
                      }}
                    >
                      <Button
                        className="flex items-center justify-center md:mt-[109px] min-w-[38%] mt-[159px] sm:mt-[84px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_mail_24X24.svg"
                            className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                            alt="mail"
                          />
                        }
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillWhiteA700ab"
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900">
                          3 more
                        </div>
                      </Button>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-radius10 sm:w-[100%] w-[66%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="leading-[135.00%] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Trovilla Plan in Sereno Canyon - Estate Collection by
                        Toll Brothers
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid flex flex-col sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] rounded-radius10 sm:w-[100%] w-[49%]">
                        <Text
                          className="font-bold md:ml-[11px] ml-[17px] sm:ml-[9px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                        <Text
                          className="md:ml-[11px] ml-[17px] sm:ml-[9px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_600 w-[auto]"
                          variant="body5"
                        >
                          Online / Cash Payment
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 sm:w-[100%] w-[49%]">
                        <Text
                          className="font-bold ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $850 / month
                        </Text>
                        <Text
                          className="ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_600 w-[auto]"
                          variant="body5"
                        >
                          0% EMI for 6 Months
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold leading-[140.00%] sm:mx-[0] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[68%]"
                      variant="body1"
                    >
                      Well-constructed 1562 Sq Ft Home Is Now Offering To You In
                      Uttara For Sale
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-gray_600 w-[100%]"
                      variant="body2"
                    >
                      A slider is great way to display a slideshow featuring
                      images or videos, usually on your homepage.
                      <br />
                      Adding sliders to your site is no longer difficult. You
                      don’t have to know coding anymore. Just use a slider
                      widget and it will automatically insert the slider on your
                      web page.
                      <br />
                      So, the Elementor slider would be a great tool to work
                      with when building a WordPress site.
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start mb-[4px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Local Information
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Map
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[25%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="FillGray900"
                      >
                        Schools
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[22%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        Crime
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[29%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Shop & Eat
                      </Button>
                    </Row>
                    <Stack className="h-[400px] sm:mt-[12px] md:mt-[16px] mt-[24px] relative w-[100%]">
                      <GoogleMap
                        className="absolute sm:h-[214px] md:h-[276px] h-[400px] rounded-radius10 w-[100%]"
                        showMarker={false}
                      ></GoogleMap>
                      <Img
                        src="images/img_group100000142_deep_orange_300.svg"
                        className="absolute h-[153px] left-[19%] max-w-[100%] top-[21%] sm:w-[100%] w-[55%]"
                        alt="Group100000142"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-end sm:mb-[257px] md:mb-[333px] mb-[484px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius10 sm:w-[100%] w-[32%]">
                  <Text
                    className="sm:mt-[12px] md:mt-[16px] mt-[24px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Request for Visit
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
                    <Input
                      className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="flex w-[100%]"
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
                      wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
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
                    <Input
                      className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
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
                      wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      name="TextFieldLa Three"
                      placeholder="Date"
                      prefix={
                        <Img
                          src="images/img_calendar.svg"
                          className="ml-[4px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                          alt="calendar"
                        />
                      }
                    ></Input>
                    <TextArea
                      className="font-semibold mt-[12px] sm:mt-[6px] md:mt-[8px] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      name="inputbox"
                      placeholder="Message"
                    ></TextArea>
                  </Column>
                  <Button
                    className="cursor-pointer font-semibold min-w-[100%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Send Request
                  </Button>
                </Column>
              </Row>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-radius10 sm:w-[100%] w-[66%]">
                <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Text
                    className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Home Highlights
                  </Text>
                  <List
                    className="md:gap-[12px] gap-[17.51px] sm:gap-[9px] grid min-h-[auto] sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] mb-[12px] sm:mb-[6px] md:mb-[8px] mt-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          Parking
                        </Text>
                        <Text
                          className="font-semibold sm:ml-[29px] md:ml-[37px] ml-[55px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          No Info
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] my-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          HOA
                        </Text>
                        <Text
                          className="font-semibold sm:ml-[42px] md:ml-[55px] ml-[80px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          None
                        </Text>
                      </Row>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] my-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[1px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          Outdoor
                        </Text>
                        <Text
                          className="font-semibold mb-[1px] sm:ml-[25px] md:ml-[32px] ml-[47px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          No Info
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] mb-[11px] sm:mb-[5px] md:mb-[7px] mt-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          Price/Sqft
                        </Text>
                        <Text
                          className="font-semibold sm:ml-[17px] md:ml-[22px] ml-[32px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          $560
                        </Text>
                      </Row>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] my-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[1px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          A/C
                        </Text>
                        <Text
                          className="font-semibold mb-[1px] sm:ml-[45px] md:ml-[58px] ml-[85px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          No Info
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                        <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] my-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[1px] not-italic text-gray_600 w-[auto]"
                          variant="body2"
                        >
                          Listed
                        </Text>
                        <Text
                          className="font-semibold mb-[1px] sm:ml-[35px] md:ml-[45px] ml-[66px] text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          No Info
                        </Text>
                      </Row>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                    <div className="bg-gray_600 sm:h-[5px] md:h-[6px] h-[8px] my-[4px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[1px] not-italic text-gray_600 w-[auto]"
                      variant="body2"
                    >
                      Year Built
                    </Text>
                    <Text
                      className="font-semibold mb-[1px] sm:ml-[21px] md:ml-[27px] ml-[40px] text-gray_900 w-[auto]"
                      variant="body2"
                    >
                      2021
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-end sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:p-[15px] md:p-[26px] p-[38px] rounded-radius10 sm:w-[100%] w-[66%]">
                <Column className="flex flex-col justify-start ml-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Text
                    className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Agent Information
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                    <Img
                      src="images/img_rectangle5599.png"
                      className="md:h-[104px] h-[150px] sm:h-[80px] max-w-[100%] rounded-radius10 md:w-[103px] w-[150px] sm:w-[79px]"
                      alt="Rectangle5599"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[52%]">
                      <Text
                        className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
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
                          4 review
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                        <Img
                          src="images/img_mail_20X20.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="mail One"
                        />
                        <a
                          href={"mailto:bruno@finderland.com"}
                          target="_blank"
                          className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] text-[16px] text-gray_600 w-[auto]"
                          rel="noreferrer"
                        >
                          bruno@relasto .com
                        </a>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_call.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="call One"
                        />
                        <Text
                          className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] text-gray_600"
                          variant="body3"
                        >
                          +65 0231 965 965
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[36px] md:mt-[47px] mt-[69px] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="mt-[1px] text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Latest Property Listings
                    </Text>
                    <Button
                      className="flex items-center justify-center min-w-[11%] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="ml-[8px] sm:ml-[4px] md:ml-[5px] text-center"
                          alt="arrow_right"
                        />
                      }
                      size="sm"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[18px] text-orange_A700">
                        Explore All
                      </div>
                    </Button>
                  </Row>
                  <List
                    className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_260X384.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Eight"
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
                                    src="images/img_settings_24.svg"
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
                              className="cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
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
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_8.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Nine"
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
                                    src="images/img_settings_25.svg"
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
                              className="cursor-pointer font-semibold min-w-[51%] text-[16px] text-center text-white_A700 w-[max-content]"
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
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start sm:pb-[15px] md:pb-[20px] pb-[30px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_9.png"
                        className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        alt="image Ten"
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
                                    src="images/img_settings_26.svg"
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
                              className="cursor-pointer font-semibold min-w-[50%] text-[16px] text-center text-white_A700 w-[max-content]"
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
                  </List>
                </Column>
              </Column>
            </Column>
          </Column>
          <Footer className="bg-white_A700 w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsPage;
