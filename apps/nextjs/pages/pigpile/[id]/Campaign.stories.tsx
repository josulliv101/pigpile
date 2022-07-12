import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LayoutCampaign } from "../../../components/layouts";
import Campaign from "./Campaign";

export default {
  title: "Campaign",
  component: LayoutCampaign,
  argTypes: {},
} as ComponentMeta<typeof LayoutCampaign>;

const Template: ComponentStory<typeof LayoutCampaign> = (args) => {
  return (
    <LayoutCampaign {...args}>
      <Campaign />
    </LayoutCampaign>
  );
};

export const Default = Template.bind({});
