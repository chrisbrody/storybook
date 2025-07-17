import type { Meta, StoryObj } from '@storybook/react';

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
      options: ['default', 'destructive', 'success', 'warning', 'info', 'secondary', 'outline'],
      description: 'The color variant of the alert.',
    },
    icon: {
      control: { type: 'select' },
      options: [null, 'info', 'warning', 'error', 'success', 'close'],
      description: 'The icon to display in the alert.',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Custom background color (overrides variant styling)',
    },
    textColor: {
      control: { type: 'color' },
      description: 'Custom text color (overrides variant styling)',
    },
    borderColor: {
      control: { type: 'color' },
      description: 'Custom border color (overrides variant styling)',
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Custom icon color (overrides variant styling)',
    },
    titleText: {
      control: 'text',
      description: 'The text to display as the alert title.',
    },
    descriptionText: {
      control: 'text',
      description: 'The text to display as the alert description.',
    },
  },
  args: {
    variant: 'default',
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert 
        variant={args.variant} 
        icon={args.icon}
        iconColor={args.iconColor}
        className="w-[400px]" 
        style={customStyles}
      >
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithInfoIcon: Story = {
  args: {
    variant: 'default',
    icon: 'info',
    titleText: 'Information',
    descriptionText: 'This is an informational alert with an info icon.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithWarningIcon: Story = {
  args: {
    variant: 'default',
    icon: 'warning',
    titleText: 'Warning',
    descriptionText: 'This is a warning alert with a warning icon.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithErrorIcon: Story = {
  args: {
    variant: 'destructive',
    icon: 'error',
    titleText: 'Error',
    descriptionText: 'This is an error alert with an error icon.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithSuccessIcon: Story = {
  args: {
    variant: 'default',
    icon: 'success',
    titleText: 'Success',
    descriptionText: 'This is a success alert with a success icon.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithCloseIcon: Story = {
  args: {
    variant: 'default',
    icon: 'close',
    titleText: 'Dismissible',
    descriptionText: 'This alert has a close icon for dismissal.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    icon: 'success',
    titleText: 'Success!',
    descriptionText: 'Your changes have been saved successfully.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    icon: 'warning',
    titleText: 'Warning',
    descriptionText: 'Please review your settings before continuing.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    icon: 'info',
    titleText: 'Information',
    descriptionText: 'Here is some helpful information for you.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    icon: 'info',
    titleText: 'Secondary Alert',
    descriptionText: 'This is a secondary styled alert.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    icon: 'info',
    titleText: 'Outline Alert',
    descriptionText: 'This is an outline styled alert with transparent background.',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert variant={args.variant} icon={args.icon} iconColor={args.iconColor} className="w-[400px]" style={customStyles}>
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

export const CustomColors: Story = {
  args: {
    variant: 'default',
    icon: 'info',
    titleText: 'Custom Colored Alert',
    descriptionText: 'Use the color picker controls to customize this alert\'s appearance.',
    backgroundColor: '#f0f9ff',
    textColor: '#0c4a6e',
    borderColor: '#0ea5e9',
    iconColor: '#0369a1',
  },
  render: (args) => {
    const customStyles = {
      backgroundColor: args.backgroundColor,
      color: args.textColor,
      borderColor: args.borderColor,
    };

    return (
      <Alert 
        variant={args.variant} 
        icon={args.icon}
        iconColor={args.iconColor}
        className="w-[400px]" 
        style={customStyles}
      >
        <AlertTitle>{args.titleText}</AlertTitle>
        <AlertDescription>
          {args.descriptionText}
        </AlertDescription>
      </Alert>
    );
  },
};

Default.args = { titleText: 'Heads up!', descriptionText: 'You can add components to your app using the CLI.', icon: 'info' };