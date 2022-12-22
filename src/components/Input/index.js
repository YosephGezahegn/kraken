import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  FillGray52: "bg-gray_52",
  srcOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
};
const shapes = {
  RoundedBorder10: "rounded-radius10",
  srcRoundedBorder10: "rounded-radius10",
};
const sizes = {
  sm: "pb-[12px] sm:pb-[6px] md:pb-[8px] md:pt-[12px] pt-[18px] sm:pt-[9px] px-[12px] sm:px-[6px] md:px-[8px]",
  md: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
  lg: "pb-[14px] sm:pb-[7px] md:pb-[9px] sm:pt-[12px] md:pt-[15px] pt-[23px] px-[14px] sm:px-[7px] md:px-[9px]",
  smSrc:
    "pb-[14px] sm:pb-[7px] md:pb-[9px] sm:pt-[12px] md:pt-[15px] pt-[23px] px-[14px] sm:px-[7px] md:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10", "srcRoundedBorder10"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillGray52",
    "srcOutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder10",
  variant: "OutlineBluegray100",
  size: "md",
};

export { Input };
