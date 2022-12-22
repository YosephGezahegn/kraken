import { TextArea } from "components";
export default {
  title: "byad_s_application7/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder10",
  variant: "OutlineBluegray100",
  size: "sm",
  placeholder: "placeholder",
};
