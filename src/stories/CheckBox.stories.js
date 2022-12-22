import { CheckBox } from "components";
export default {
  title: "byad_s_application7/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder4",
  variant: "OutlineGray900",
  inputClassName: "mr-1",
};
