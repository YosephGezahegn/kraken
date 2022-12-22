import React from "react";

import { Column, Row, Img, Text, SelectBox, Button } from "components";
import Header from "components/Header";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  function handleNavigate32() {
    navigate("/listing");
  }
  function handleNavigate33() {
    navigate("/aboutus");
  }
  function handleNavigate38() {
    navigate("/license");
  }
  function handleNavigate39() {
    navigate("/faq");
  }
  function handleNavigate40() {
    navigate("/login");
  }
  function handleNavigate41() {
    navigate("/blogpage");
  }
  function handleNavigate42() {
    navigate("/agentlist");
  }

  return (
    <>
      <Column className="bg-gray_51 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col justify-start sm:mt-[44px] md:mt-[57px] mt-[83px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[1054px] md:ml-[82px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              Privacy Policy
            </Text>
            <Text
              className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_600 w-[auto]"
              variant="body2"
            >
              Last updated: January 2020
            </Text>
            <Text
              className="font-normal leading-[180.00%] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] not-italic text-gray_600 sm:w-[100%] w-[95%]"
              variant="body2"
            >
              Hi, welcome to our privacy policy which applies to our customers.
              This policy sets out how if you are a StaticMania.com user or
              visitor to our site, we treat your personal information.
              <br />
              <br />
              Last updated on March 01, 2020.
            </Text>
            <Column className="flex flex-col justify-end sm:mt-[31px] md:mt-[41px] mt-[60px] sm:pt-[3px] md:pt-[4px] pt-[7px] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1. The type of personal information we collect
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  Hi, welcome to our privacy policy which applies to our
                  customers. This policy sets out how if you are a
                  StaticMania.com user or visitor to our site, we treat your
                  personal information.
                  <br />
                  <br />
                  Last updated on March 01, 2020.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  2. Cookies and web analytics
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
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  3. When do we need to update this policy?
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
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  4. Registration
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  To use our Service you will need to create an account and
                  complete the registration process at
                  https://staticmania.com/signup (Registration). 
                  <br />
                  At Registration, you will select logon credentials for each
                  user of the Service, which may be an employee of the
                  Subscriber or other individuals authorised by the Subscriber
                  to use the Service (Authorised User). Logon details should
                  only be used by the Authorised User to whom they are assigned
                  and cannot be shared with any third parties (including another
                  Authorised User). You are solely responsible for the
                  confidentiality and use of all logon details for your account
                  and those assigned to Authorised Users, as well as for any use
                  or misuse of the Service using Subscriber’s or any Authorised
                  Users’ logon details. You shall notify us immediately if you
                  become aware of any loss, theft or unauthorised use of any
                  logon details, and we reserve the right to delete or change
                  them at any time and for any reason.
                  <br /> <br />
                  You warrant and represent to us that the details you provide
                  to us during Registration are accurate, complete and
                  up-to-date. We will hold and treat such information in
                  accordance with the terms of our Privacy Policy.
                  <br />
                  <br />
                  If you or your Participants use a mobile telephone to access
                  our Service, we may need to send SMS messages. You may opt out
                  of this service by replying STOP to the SMS message or by
                  contacting us at support@staticmania.com.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  5. Marketing Choices regarding your personal data
                </Text>
                <Text
                  className="font-normal leading-[180.00%] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  Where we have your permission to do so (e.g. if you subscribed
                  to one of our email lists or indicated that you are interested
                  in receiving deals or information from us), we will send you
                  email marketing messages about products and services which we
                  feel may be of interest to you. You can ‘opt-out’ of such
                  communications if you would prefer not to receive them in the
                  future by using the “unsubscribe” facility provided in the
                  communication itself.
                </Text>
              </Column>
            </Column>
          </Column>
          <Footer1 className="bg-white_A700 sm:mt-[45px] md:mt-[58px] mt-[85px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default PrivacyPolicyPage;
