import { SelectBox } from "components";
export default {
  title: "byad_s_application7/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder10",
  variant: "OutlineBluegray100",
  size: "xl",
  className: "w-[300px]",
};
