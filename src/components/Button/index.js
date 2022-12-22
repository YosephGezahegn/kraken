import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbCircleBorder30: "rounded-radius30",
  icbRoundedBorder16: "rounded-radius16",
  icbCircleBorder40: "rounded-radius40",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_600",
  FillGray300: "bg-gray_300 text-gray_900",
  OutlineGray600: "border border-gray_600 border-solid text-gray_900",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-gray_700",
  OutlineBluegray101: "border border-bluegray_101 border-solid",
  FillGray700: "bg-gray_700 text-white_A700",
  OutlineGray700: "border border-gray_700 border-solid text-gray_900",
  OutlineBluegray102: "border border-bluegray_102 border-solid text-gray_900",
  FillWhiteA700ab: "bg-white_A700_ab text-gray_900",
  OutlineBluegray100_1: "border border-bluegray_100 border-solid text-gray_900",
  OutlineGray52: "border border-gray_52 border-solid text-gray_900",
  icbOutlineBluegray30033: "bg-white_A700 shadow-bs",
  icbFillGray900: "bg-gray_900",
  icbFillWhiteA700ab: "bg-white_A700_ab",
};
const sizes = {
  sm: "p-[1px]",
  md: "sm:p-[4px] md:p-[6px] p-[9px]",
  lg: "p-[12px] sm:p-[6px] md:p-[8px]",
  xl: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  "2xl": "md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px]",
  smIcn: "p-[14px] sm:p-[7px] md:p-[9px]",
  mdIcn: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
  lgIcn: "md:p-[19px] p-[28px] sm:px-[15px] sm:py-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "icbCircleBorder30",
    "icbRoundedBorder16",
    "icbCircleBorder40",
  ]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "FillWhiteA700",
    "FillGray300",
    "OutlineGray600",
    "OutlineBluegray100",
    "OutlineBluegray101",
    "FillGray700",
    "OutlineGray700",
    "OutlineBluegray102",
    "FillWhiteA700ab",
    "OutlineBluegray100_1",
    "OutlineGray52",
    "icbOutlineBluegray30033",
    "icbFillGray900",
    "icbFillWhiteA700ab",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
