import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Input,
  TextArea,
  Line,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ContactPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate103() {
    navigate("/agentlist");
  }
  function handleNavigate104() {
    navigate("/listing");
  }
  function handleNavigate105() {
    navigate("/aboutus");
  }
  function handleNavigate108() {
    navigate("/license");
  }
  function handleNavigate109() {
    navigate("/privacypolicy");
  }
  function handleNavigate110() {
    navigate("/faq");
  }
  function handleNavigate111() {
    navigate("/login");
  }
  function handleNavigate112() {
    navigate("/blogpage");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_51 flex flex-col items-center justify-start pb-[120px] sm:pb-[15px] md:pb-[82px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="flex flex-col items-center justify-start max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                <Text
                  className="text-gray_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls108 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Get in touch
                </Text>
                <Text
                  className="font-normal leading-[180.00%] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-center text-gray_600 w-[100%]"
                  variant="body2"
                >
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </Text>
              </Column>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[23px] md:mt-[30px] mt-[44px] sm:p-[15px] md:p-[26px] p-[38px] rounded-radius10 w-[100%]">
                <Column className="flex flex-col justify-start ml-[12px] md:ml-[8px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Text
                    className="text-gray_900 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Send a message
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
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
                    <TextArea
                      className="font-semibold mt-[12px] sm:mt-[6px] md:mt-[8px] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                      name="inputbox"
                      placeholder="Message"
                    ></TextArea>
                  </Column>
                  <Button
                    className="cursor-pointer font-bold min-w-[32%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="FillGray900"
                  >
                    Send Message
                  </Button>
                </Column>
                <Line className="bg-bluegray_100 sm:h-[285px] md:h-[368px] h-[534px] mb-[2px] ml-[100px] sm:ml-[53px] md:ml-[68px] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[1px]" />
                <Column className="flex flex-col justify-start sm:mb-[127px] md:mb-[164px] mb-[239px] md:ml-[33px] ml-[49px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Office Address
                    </Text>
                    <Text
                      className="font-semibold leading-[180.00%] mt-[4px] text-gray_600 w-[100%]"
                      variant="body2"
                    >
                      1421 San Pedro St, Los Angeles, CA 90015
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_call.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="call One"
                    />
                    <Text
                      className="flex-grow font-semibold ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_600"
                      variant="body2"
                    >
                      (302) 555-0107
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Img
                      src="images/img_mail.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="mail One"
                    />
                    <a
                      href={"mailto:floyd_miles@email.com"}
                      target="_blank"
                      className="font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[18px] text-gray_600 w-[auto]"
                      rel="noreferrer"
                    >
                      staticmania@gmail.com
                    </a>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <Text
                      className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Social
                    </Text>
                    <Img
                      src="images/img_socailicons_30X214.svg"
                      className="max-w-[100%] mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]"
                      alt="Socailicons"
                    />
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default ContactPagePage;
