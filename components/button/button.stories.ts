import { Meta } from '@storybook/html';
import buttonTemplate from './button.twig'; // Import the Twig template

const meta: Meta = {
  title: 'Example/Button',
  parameters: {
    layout: 'fullscreen', // Adjust as needed
  },
};

export default meta;

type Story = () => string;

// Story for the button component
export const Default: Story = () => {
  // Mock data for demonstration purposes
  const size = 'medium'; // Set the desired size ('small', 'medium', 'large')
  const buttonClass = 'bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600';
  const buttonLabel = 'Click Me';

  // Render the Twig template with mock data
  return buttonTemplate({
    size,
    buttonClass,
    buttonAttributes: '', // Add any additional attributes as needed
    buttonLabel,
  });
};
