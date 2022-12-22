import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Input,
  Line,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const navigate = useNavigate();

  function handleNavigate59() {
    navigate("/agentlist");
  }
  function handleNavigate60() {
    navigate("/listing");
  }
  function handleNavigate61() {
    navigate("/aboutus");
  }
  function handleNavigate68() {
    navigate("/login");
  }
  function handleNavigate69() {
    navigate("/blogpage");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_51 flex flex-col font-manrope items-center justify-start mx-[auto] md:pb-[145px] sm:pb-[15px] pb-[211px] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start max-w-[792px] ml-[auto] mr-[auto] sm:mt-[44px] md:mt-[57px] mt-[83px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="text-gray_900 tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h2"
            variant="h2"
          >
            Search Property / Anything
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="flex w-[100%]"
              name="search One"
              placeholder="Search Property / Anything"
              prefix={
                <Img
                  src="images/img_search_1.svg"
                  className="cursor-pointer ml-[12px] mr-[14px] sm:mr-[7px] sm:ml-[6px] md:mr-[9px] md:ml-[8px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#6e6e6e"
                  />
                ) : inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#6e6e6e"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder10"
              size="smSrc"
              variant="srcOutlineBluegray100"
            ></Input>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:p-[15px] md:p-[19px] p-[28px] rounded-radius10 w-[100%]">
              <Column className="flex flex-col justify-start mb-[4px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    You're viewing sample results.
                  </Text>
                  <a
                    href={"https://staticmania.com"}
                    target="_blank"
                    className="font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-[16px] text-gray_600 w-[auto]"
                    rel="noreferrer"
                  >
                    https://staticmania.com
                  </a>
                  <Text
                    className="font-normal leading-[150.00%] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_600 w-[100%]"
                    variant="body4"
                  >
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                    quibusdam autem suscipit culpa perspiciatis. Exercitationem
                    dolorum dolore perferendis praesen…
                  </Text>
                </Column>
                <Line className="bg-bluegray_100 h-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Add CMS or Business Hosting and index your site to see real
                    search results!
                  </Text>
                  <Text
                    className="font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_600 w-[auto]"
                    variant="body3"
                  >
                    https://staticmania.com
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_600 w-[100%]"
                    variant="body4"
                  >
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                    quibusdam autem suscipit culpa perspiciatis. Exercitationem
                    dolorum dolore perferendis praesen…
                  </Text>
                </Column>
                <Line className="bg-bluegray_100 h-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-semibold text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    You're viewing sample results.
                  </Text>
                  <Text
                    className="font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_600 w-[auto]"
                    variant="body3"
                  >
                    https://staticmania.com
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_600 w-[100%]"
                    variant="body4"
                  >
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                    quibusdam autem suscipit culpa perspiciatis. Exercitationem
                    dolorum dolore perferendis praesen…
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FAQPage;
