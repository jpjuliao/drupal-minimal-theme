// Header.stories.ts
import { Meta } from '@storybook/html';
import headerTemplate from './header.twig'; // Import the Twig template

const meta: Meta = {
  title: 'Example/Header',
  parameters: {
    layout: 'fullscreen', // Adjust as needed
  },
};

export default meta;

type Story = () => string;

// Story for the header component
export const Default: Story = () => {
  // Mock data for demonstration purposes
  const siteName = 'My Site';
  const loggedIn = true;
  const userDisplayName = 'John Doe';

  // Render the Twig template with mock data
  return headerTemplate({
    site_name: siteName,
    logged_in: loggedIn,
    user_display_name: userDisplayName,
  });
};
