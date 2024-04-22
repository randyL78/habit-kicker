import Modal from "./Modal.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'UI/Modal',
  component: Modal,
  args: {
    title: "My Modal"
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {}
