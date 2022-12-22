import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  List,
  Stack,
  Grid,
  Input,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/agentlist");
  }
  function handleNavigate1() {
    navigate("/listing");
  }
  function handleNavigate2() {
    navigate("/privacypolicy");
  }
  function handleNavigate3() {
    navigate("/faq");
  }
  function handleNavigate4() {
    navigate("/listing");
  }
  function handleNavigate5() {
    navigate("/login");
  }
  function handleNavigate6() {
    navigate("/blogpage");
  }
  function handleNavigate9() {
    navigate("/license");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[759px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="leading-[140.00%] sm:mx-[0] text-center text-gray_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls108 sm:w-[100%] w-[94%]"
              as="h1"
              variant="h1"
            >
              Reimagining real estate to make it easier to unlock.
            </Text>
            <Text
              className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-center text-gray_700 w-[100%]"
              variant="body2"
            >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble.
            </Text>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius10 w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle5592.png"
                  className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[66%]"
                  alt="Rectangle5592"
                />
                <Img
                  src="images/img_rectangle5593.png"
                  className="max-w-[100%] rounded-radius10 w-[32%]"
                  alt="Rectangle5593"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                <Img
                  src="images/img_rectangle5595.png"
                  className="max-w-[100%] rounded-radius10 w-[32%]"
                  alt="Rectangle5595"
                />
                <Img
                  src="images/img_rectangle5594.png"
                  className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[66%]"
                  alt="Rectangle5594"
                />
              </Row>
            </Column>
          </Column>
          <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
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
                    alt="search One"
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1200px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="leading-[140.00%] sm:mx-[0] text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[92%]"
                  as="h3"
                  variant="h3"
                >
                  A note from our founders.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                  variant="body2"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </Column>
              <List
                className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[29px] md:mt-[38px] mt-[56px] w-[100%]"
                orientation="vertical"
              >
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                    <Text
                      className="border-2 border-gray_900 border-solid flex font-extrabold items-center px-[13px] sm:px-[6px] md:px-[8px] rounded-radius50 text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      1
                    </Text>
                    <Text
                      className="mb-[2px] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_900 tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      It all started in 1995
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[180.00%] md:ml-[41px] ml-[61px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-gray_700 sm:w-[100%] w-[89%]"
                    variant="body2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="border-2 border-gray_900 border-solid flex font-extrabold items-center px-[11px] sm:px-[5px] md:px-[7px] rounded-radius50 text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      2
                    </Text>
                    <Text
                      className="mb-[2px] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_900 tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Donate launches in 2007
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[180.00%] md:ml-[41px] ml-[61px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-gray_700 sm:w-[100%] w-[89%]"
                    variant="body2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                    <Text
                      className="border-2 border-gray_900 border-solid flex font-extrabold items-center px-[11px] sm:px-[5px] md:px-[7px] rounded-radius50 text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      3
                    </Text>
                    <Text
                      className="mb-[2px] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_900 tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Relasto holds its initial public offering in 2008
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[180.00%] md:ml-[41px] ml-[61px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] not-italic text-gray_700 sm:w-[100%] w-[87%]"
                    variant="body2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                  </Text>
                </Column>
              </List>
            </Column>
            <Stack className="h-[645px] sm:ml-[44px] md:ml-[57px] ml-[84px] relative rounded-radius10 sm:w-[100%] w-[50%]">
              <div className="absolute bg-orange_A700 sm:h-[317px] md:h-[410px] h-[595px] right-[0] rounded-radius10 top-[0] sm:w-[100%] w-[88%]"></div>
              <Img
                src="images/img_rectangle20_1.png"
                className="absolute bottom-[0] h-[589px] left-[0] max-w-[100%] rounded-radius10 sm:w-[100%] w-[92%]"
                alt="RectangleTwenty"
              />
            </Stack>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1200px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius10 w-[100%]">
            <Stack className="h-[645px] relative rounded-radius10 sm:w-[100%] w-[49%]">
              <div className="absolute bg-orange_A700 bottom-[0] sm:h-[317px] md:h-[410px] h-[595px] left-[0] rounded-radius10 sm:w-[100%] w-[88%]"></div>
              <Img
                src="images/img_rectangle20_2.png"
                className="absolute h-[589px] max-w-[100%] right-[0] rounded-radius10 top-[0] sm:w-[100%] w-[92%]"
                alt="RectangleTwenty One"
              />
            </Stack>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[38%]">
              <Column className="flex flex-col justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] w-[100%]">
                <Text
                  className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                  variant="body2"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                  <br />
                  In a free hour, On the other hand, we denounce with righteous
                  indignation and dislike men .
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                <Text
                  className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-gray_700 w-[auto]"
                  variant="body2"
                >
                  CEO at Static Mania
                </Text>
              </Column>
            </Column>
          </Row>
          <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] mt-[108px] sm:mt-[57px] md:mt-[74px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius10 w-[100%]">
            <Text
              className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Relasto Team members
            </Text>
            <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] rounded-radius10 w-[100%]">
              <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                <Column className="flex flex-col justify-start sm:pb-[3px] md:pb-[4px] pb-[6px] sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5596.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5596"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Kausar Pial
                    </Text>
                    <Text
                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      CEO
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:pb-[3px] md:pb-[4px] pb-[6px] sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5597.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5597"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      President of Sales
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5598.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5598"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5599.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5599"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5600.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5600"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Jerome Bell
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5601.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5601"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5602.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5602"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5603.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5603"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Devon Lane
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5604.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5604"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5605.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5605"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Bessie Cooper
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5606.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5606"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_rectangle5607.png"
                    className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-radius10 sm:w-[150px] md:w-[194px] w-[282px]"
                    alt="Rectangle5607"
                  />
                  <Column className="flex flex-col justify-start ml-[13px] md:ml-[8px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[auto]"
                      variant="body2"
                    >
                      Marketing Coordinator
                    </Text>
                  </Column>
                </Column>
              </Grid>
            </Column>
          </Column>
          <Column className="bg-gray_900 flex flex-col items-center justify-end mt-[100px] sm:mt-[53px] md:mt-[68px] p-[120px] sm:p-[15px] md:p-[82px] w-[100%]">
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
                      onClick={handleNavigate4}
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
                        alt="image Eighteen"
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
                        alt="image Nineteen"
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
                        alt="image Twenty"
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
          <Footer className="bg-white_A700 w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default AboutUsPage;
