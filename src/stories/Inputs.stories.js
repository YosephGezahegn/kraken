import { Input } from "components";
export default {
  title: "byad_s_application7/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder10",
  variant: "OutlineBluegray100",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
