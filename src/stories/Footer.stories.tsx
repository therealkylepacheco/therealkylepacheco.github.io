import Typography from "@material-ui/core/Typography";
import { Story } from "@storybook/react";
import React from "react";
import { Footer, FooterProps } from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
};

const DefaultTemplate: Story<FooterProps> = (args) => <Footer {...args} />;
export const Default = DefaultTemplate.bind({});
Default.args = {};

const ContentTemplate: Story<FooterProps> = (args) => (
  <>
    <div>
      <Typography variant="h6">
        It really matters and then like it really doesn’t matter. What matters
        is the people who are sparked by it. And the people who are like
        offended by it, it doesn’t matter. Because it's about motivating the
        doers. Because I’m here to follow my dreams and inspire other people to
        follow their dreams, too.
      </Typography>
      <Typography variant="h6">
        The time is now for it to be okay to be great. People in this world shun
        people for being great. For being a bright color. For standing out. But
        the time is now to be okay to be the greatest you. Would you believe in
        what you believe in, if you were the only one who believed it?
      </Typography>
      <Typography variant="h6">
        I always felt like I could do anything. That’s the main thing people are
        controlled by! Thoughts- their perception of themselves! They're slowed
        down by their perception of themselves. If you're taught you can’t do
        anything, you won’t do anything. I was taught I could do everything.
      </Typography>
    </div>
    <Footer {...args} />
  </>
);
export const WithContent = ContentTemplate.bind({});
WithContent.args = {};
