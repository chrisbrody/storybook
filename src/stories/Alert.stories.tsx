import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from 'lucide-react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../components/ui/alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
    titleText: {
      control: 'text',
      description: 'The text to display as the alert title.',
    },
    descriptionText: {
      control: 'text',
      description: 'The text to display as the alert description.',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon in the alert.',
    },
  },
  args: {
    variant: 'default',
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert variant={args.variant} className="w-[400px]">
      {args.showIcon && <Terminal className="h-4 w-4" />}
      <AlertTitle>{args.titleText}</AlertTitle>
      <AlertDescription>
        {args.descriptionText}
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert variant={args.variant} className="w-[400px]">
      {args.showIcon && <Terminal className="h-4 w-4" />}
      <AlertTitle>{args.titleText}</AlertTitle>
      <AlertDescription>
        {args.descriptionText}
      </AlertDescription>
    </Alert>
  ),
};

Default.args = { titleText: 'Heads up!', descriptionText: 'You can add components to your app using the CLI.', showIcon: true };
Destructive.args = { titleText: 'Error', descriptionText: 'Your session has expired. Please log in again.', showIcon: true };