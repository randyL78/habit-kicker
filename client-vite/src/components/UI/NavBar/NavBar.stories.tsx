import NavBar from "./NavBar.tsx";
import {MemoryRouter} from "react-router-dom";
import {Meta, StoryObj} from "@storybook/react";
import Link from "@/components/UI/Link";
import {theme} from "@/constants/theme.ts";

const meta = {
  title: "UI/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    title: 'NavBar',
    children: (
      <>
        <Link to='/'>Link 1</Link>
        <Link to='/'>Link 2</Link>
        <Link theme={theme.Outline} to='/'>Link 3</Link>
      </>
    )
  }
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
