import Header from "./Header.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    children: <p>Header Text</p>
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
}
