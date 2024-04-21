import {StoryObj, Meta} from "@storybook/react";
import Link from "@/UI/Link";
import {themeColor} from "@/constants/themeColors.ts";
import {MemoryRouter} from "react-router-dom";
import {theme} from "@/constants/theme.ts";


const meta = {
  title: 'UI/Link',
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    theme: {
      options: [undefined, ...Object.values(theme)],
    },
    themeColor: {
      options: [undefined, ...Object.values(themeColor)],
    }
  },
  args: {
    children: "I'm a link",
    to: '/'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}

export const Flat: Story = {
  args: {
    theme: theme.Flat,
    themeColor: themeColor.Primary,
  }
}

export const Pill: Story = {
  args: {
    theme: theme.Pill,
    themeColor: themeColor.Primary,
  }
}

export const Outline: Story = {
  args: {
    theme: theme.Outline,
  }
}

