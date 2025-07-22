import type { Meta, StoryObj } from '@storybook/react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../../components/ui/alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info', 'secondary', 'outline'],
      description: 'The color variant of the alert.',
    },
    icon: {
      control: { type: 'select' },
      options: [null, 'info', 'warning', 'error', 'success', 'close'],
      description: 'The icon to display in the alert.',
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['Inter', 'Roboto', 'Open Sans', 'Playfair Display', 'Source Code Pro'],
      description: 'Font family for alert text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Inter' },
      },
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Custom icon color (overrides variant styling)',
    },
  },
  args: {
    variant: 'default',
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
    icon: 'info',
  },
  render: (args) => (
    <Alert 
      variant={args.variant} 
      icon={args.icon}
      iconColor={args.iconColor}
      fontFamily={args.fontFamily}
      className="w-[400px]"
    >
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const WithInfoIcon: Story = {
  args: {
    variant: 'default',
    icon: 'info',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert with an info icon.
      </AlertDescription>
    </Alert>
  ),
};

export const WithWarningIcon: Story = {
  args: {
    variant: 'default',
    icon: 'warning',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This is a warning alert with a warning icon.
      </AlertDescription>
    </Alert>
  ),
};

export const WithErrorIcon: Story = {
  args: {
    variant: 'destructive',
    icon: 'error',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        This is an error alert with an error icon.
      </AlertDescription>
    </Alert>
  ),
};

export const WithSuccessIcon: Story = {
  args: {
    variant: 'default',
    icon: 'success',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        This is a success alert with a success icon.
      </AlertDescription>
    </Alert>
  ),
};

export const WithCloseIcon: Story = {
  args: {
    variant: 'default',
    icon: 'close',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Dismissible</AlertTitle>
      <AlertDescription>
        This alert has a close icon for dismissal.
      </AlertDescription>
    </Alert>
  ),
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    icon: 'success',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    icon: 'warning',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your settings before continuing.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    icon: 'info',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here is some helpful information for you.
      </AlertDescription>
    </Alert>
  ),
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    icon: 'info',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Secondary Alert</AlertTitle>
      <AlertDescription>
        This is a secondary styled alert.
      </AlertDescription>
    </Alert>
  ),
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    icon: 'info',
  },
  render: (args) => (
    <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} fontFamily={args.fontFamily} className="w-[400px]">
      <AlertTitle>Outline Alert</AlertTitle>
      <AlertDescription>
        This is an outline styled alert with transparent background.
      </AlertDescription>
    </Alert>
  ),
};

export const CustomColors: Story = {
  args: {
    variant: 'default',
    icon: 'info',
    iconColor: '#0369a1',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: '#f0f9ff',
      color: '#0c4a6e',
      borderColor: '#0ea5e9',
    };

    return (
      <Alert 
        variant={args.variant} 
        icon={args.icon}
        iconColor={args.iconColor}
        fontFamily={args.fontFamily}
        className="w-[400px]" 
        style={customStyles}
      >
        <AlertTitle>Custom Colored Alert</AlertTitle>
        <AlertDescription>
          Use the color picker controls to customize this alert's appearance.
        </AlertDescription>
      </Alert>
    );
  },
};

