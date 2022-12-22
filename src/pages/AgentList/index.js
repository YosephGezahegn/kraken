import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Input,
  Grid,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AgentListPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/listing");
  }
  function handleNavigate8() {
    navigate("/aboutus");
  }
  function handleNavigate11() {
    navigate("/license");
  }
  function handleNavigate12() {
    navigate("/privacypolicy");
  }
  function handleNavigate13() {
    navigate("/faq");
  }
  function handleNavigate14() {
    navigate("/login");
  }
  function handleNavigate15() {
    navigate("/blogpage");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="bg-white_A700 w-[100%]" />
        <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
          <Column className="bg-gray_51 flex flex-col items-center justify-start sm:p-[15px] md:p-[49px] p-[72px] w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1200px] sm:mb-[25px] md:mb-[32px] mb-[47px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Text
                  className="text-gray_900 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Some Nearby Good Agents
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Input
                    className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[59%]"
                    name="TextFieldLa"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_1.svg"
                        className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="search"
                      />
                    }
                    size="lg"
                  ></Input>
                  <SelectBox
                    className="font-bold sm:mx-[0] text-[18px] text-gray_600 sm:w-[100%] w-[20%]"
                    placeholderClassName="text-gray_600"
                    name="DropdownLarg"
                    placeholder="Review"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_600.svg"
                        className="w-[24px] h-[24px] mr-[16px] sm:mr-[8px] sm:h-[13px] sm:w-[12px] md:mr-[11px] md:h-[17px] md:w-[16px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineBluegray100"
                  ></SelectBox>
                  <Button
                    className="flex items-center justify-center min-w-[19%] text-center w-[max-content]"
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
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5615.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5615"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
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
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5616.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5616"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three One"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four One"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5614.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5614"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Two"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Two"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5614_282X282.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5614 One"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Three"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Three"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Three"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Three"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5617.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5617"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Four"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Four"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Four"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Four"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5618.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5618"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Five"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Five"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Five"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Five"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Five"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5619.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5619"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Six"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Six"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Six"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Six"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Six"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5620.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5620"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Seven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Seven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Seven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Seven"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Seven"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5621.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5621"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Eight"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Eight"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Eight"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Eight"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Eight"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5622.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5622"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Nine"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Nine"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Nine"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Nine"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Nine"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5623.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5623"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Ten"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Ten"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Ten"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Ten"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Ten"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_rectangle5615_282X282.png"
                      className="sm:h-[151px] md:h-[195px] h-[282px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] sm:w-[150px] md:w-[194px] w-[282px]"
                      alt="Rectangle5615 One"
                    />
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text
                        className="font-semibold ml-[1px] text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Eleven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star One Eleven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Two Eleven"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Three Eleven"
                          />
                          <Img
                            src="images/img_star_16X16.svg"
                            className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="star Four Eleven"
                          />
                        </Row>
                        <Text
                          className="font-semibold ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[1px] text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          4.5 review
                        </Text>
                      </Row>
                      <Button
                        className="cursor-pointer font-semibold mb-[1px] min-w-[57%] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[21px] text-[16px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100_1"
                      >
                        View Profile
                      </Button>
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
                    variant="OutlineGray52"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[19%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineGray52"
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
                  variant="OutlineBluegray100_1"
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

export default AgentListPage;
