import React from "react";

import { Column, Row, Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[52px] p-[77px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[28px] ml-[42px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[165px] pr-[240px] sm:w-[100%] w-[42%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Img
                  src="images/img_home.svg"
                  className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                  alt="home Two"
                />
                <Text className="flex-grow font-markoone font-normal mb-[11px] sm:mb-[5px] md:mb-[7px] ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[20px] text-orange_A700">
                  Relasto
                </Text>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] sm:px-[0] w-[100%]">
                <Text className="font-manrope font-semibold text-[16px] text-gray_900 w-[auto]">
                  59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA, US
                </Text>
                <Text className="font-manrope font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-[16px] text-gray_900 w-[auto]">
                  +056 686 56 56 98 info@staticmania.com
                </Text>
                <Img
                  src="images/img_socialmedia_10.svg"
                  className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:w-[100%] w-[78%]"
                  alt="socialmedia"
                />
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] py-[1px] sm:w-[100%] w-[7%]">
              <Text className="font-bold font-manrope text-[18px] text-gray_900 w-[auto]">
                Features
              </Text>
              <Text className="font-manrope font-semibold leading-[270.00%] mb-[13px] sm:mb-[6px] md:mb-[8px] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] text-[16px] text-gray_900 sm:w-[100%] w-[85%]">
                Home v1
                <br />
                <br />
                Home v2
                <br />
                <br />
                About
                <br />
                Contact
                <br />
                Search
              </Text>
            </Column>
            <Column className="bg-white_A700 flex flex-col justify-start md:ml-[57px] ml-[83px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[10px] sm:pb-[5px] md:pb-[6px] sm:w-[100%] w-[11%]">
              <Text className="font-bold font-manrope text-[18px] text-gray_900 w-[auto]">
                Informations
              </Text>
              <Text className="font-manrope font-semibold leading-[270.00%] sm:mt-[19px] md:mt-[24px] mt-[36px] text-[16px] text-gray_900 w-[100%]">
                Listing v1
                <br />
                <br />
                Listing v2
                <br />
                <br />
                Property Details
                <br />
                Agent List
                <br />
                <br />
                Agent Profile
                <br />
              </Text>
            </Column>
            <Column className="bg-white_A700 flex flex-col justify-start md:ml-[57px] ml-[83px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[10px] sm:pb-[5px] md:pb-[6px] w-[10%] sm:w-[100%]">
              <Text className="font-bold font-manrope text-[18px] text-gray_900 w-[auto]">
                Documention
              </Text>
              <Text className="font-manrope font-semibold leading-[270.00%] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] text-[16px] text-gray_900 sm:w-[100%] w-[88%]">
                Blog
                <br />
                <br />
                Blog - single
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                License
                <br />
                404 Page
              </Text>
            </Column>
            <Column className="bg-white_A700 flex flex-col justify-start md:ml-[57px] ml-[83px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[11px] sm:pb-[5px] md:pb-[7px] pr-[11px] sm:pr-[5px] md:pr-[7px] sm:w-[100%] w-[12%]">
              <Text className="font-bold font-manrope text-[18px] text-gray_900 w-[auto]">
                Others
              </Text>
              <Text className="font-manrope font-semibold leading-[270.00%] mb-[3px] sm:mt-[19px] md:mt-[24px] mt-[36px] text-[16px] text-gray_900 w-[100%]">
                Log in
                <br />
                <br />
                Enter OTP
                <br />
                <br />
                New Password
                <br />
                <br />
                Reset Password
                <br />
                <br />
                Create Account
                <br />
              </Text>
            </Column>
          </Row>
          <Text className="font-manrope font-semibold sm:ml-[24px] md:ml-[31px] ml-[46px] mt-[120px] sm:mt-[63px] md:mt-[82px] text-[16px] text-gray_900 w-[auto]">
            © Static Mania 2022. All rights reserved. / Template Documentation
          </Text>
        </Column>
      </footer>
    </>
  );
};

export default Footer1;
