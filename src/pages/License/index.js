import React from "react";

import { Column, Row, Img, Text, SelectBox, Button } from "components";
import Header from "components/Header";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const LicensePage = () => {
  const navigate = useNavigate();

  function handleNavigate113() {
    navigate("/faq");
  }
  function handleNavigate119() {
    navigate("/login");
  }
  function handleNavigate120() {
    navigate("/blogpage");
  }
  function handleNavigate121() {
    navigate("/agentlist");
  }
  function handleNavigate122() {
    navigate("/listing");
  }
  function handleNavigate123() {
    navigate("/aboutus");
  }
  function handleNavigate132() {
    navigate("/privacypolicy");
  }

  return (
    <>
      <Column className="bg-gray_51 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col justify-start sm:mt-[41px] md:mt-[53px] mt-[78px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[996px] md:ml-[82px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              License
            </Text>
            <Text
              className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_600 w-[auto]"
              variant="body2"
            >
              Last updated: January 2020
            </Text>
            <Text
              className="font-normal leading-[180.00%] sm:mt-[21px] md:mt-[27px] mt-[40px] not-italic text-gray_600 w-[100%]"
              variant="body2"
            >
              Your content remains yours, which means that you retain any
              intellectual property rights that you have in your content. For
              example, you have intellectual property rights in the creative
              content you make, such as reviews you write. Or you may have the
              right to share someone else’s creative content if they’ve given
              you their permission.
              <br />
              <br />
              We need your permission if your intellectual property rights
              restrict our use of your content. You provide Google with that
              permission through this license.
            </Text>
            <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
              <Column className="flex flex-col justify-start pr-[4px] pt-[4px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  What’s covered
                </Text>
                <Text
                  className="font-normal sm:mt-[17px] md:mt-[22px] mt-[33px] not-italic text-gray_600 w-[auto]"
                  variant="body2"
                >
                  This license covers your content if that content is protected
                  by intellectual property rights.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  What’s not covered
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  We use cookies to recognize and monitor users, their on-site
                  behavior, and their preferences for accessing their website.
                  These cookies include the IP and time of visits by visitors.
                  Visitors to StaticMania that do not want cookies put on their
                  browsers should configure their browsers to reject cookies
                  before using the StaticMania website.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Price Updates
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  We will need to update this policy from time to time to ensure
                  that it remains up-to-date with the latest legal requirements
                  and any improvements to our privacy management practices.
                  <br />
                  When we change the policy, we will make sure that we inform
                  you, if any, of such changes. A copy of this policy’s latest
                  version will always be available at this page.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Refund Policy
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                  <div className="bg-gray_600 h-[10px] sm:h-[6px] md:h-[7px] sm:mb-[21px] md:mb-[28px] mb-[41px] mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal leading-[180.00%] ml-[12px] md:ml-[8px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[97%]"
                    variant="body2"
                  >
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                  <div className="bg-gray_600 h-[10px] sm:h-[6px] md:h-[7px] sm:mb-[38px] md:mb-[50px] mb-[73px] mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal leading-[180.00%] ml-[12px] md:ml-[8px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[97%]"
                    variant="body2"
                  >
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                  <div className="bg-gray_600 h-[10px] sm:h-[6px] md:h-[7px] sm:mb-[21px] md:mb-[28px] mb-[41px] mt-[13px] sm:mt-[6px] md:mt-[8px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal leading-[180.00%] ml-[12px] md:ml-[8px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[97%]"
                    variant="body2"
                  >
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Footer1 className="bg-white_A700 sm:mt-[45px] md:mt-[58px] mt-[85px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default LicensePage;
