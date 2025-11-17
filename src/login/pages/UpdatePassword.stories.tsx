import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-update-password.ftl" });

const meta = {
  title: "login/login-update-password.ftl",
  component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <KcPageStory />
};

export const WithFieldErrors: Story = {
  render: () => (
    <KcPageStory
      kcContext={{
        messagesPerField: {
          existsError: (fieldName: string) =>
            fieldName === "password-new" || fieldName === "password-confirm",
          get: (fieldName: string) =>
            fieldName === "password-new"
              ? "Password does not meet policy requirements."
              : fieldName === "password-confirm"
              ? "Passwords do not match."
              : ""
        }
      }}
    />
  )
};

export const WithGlobalError: Story = {
  render: () => (
    <KcPageStory
      kcContext={{
        message: {
          type: "error",
          summary: "An unexpected error occurred while changing the password."
        }
      }}
    />
  )
};