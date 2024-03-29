import { Meta } from '@storybook/html';
import footerTemplate from './footer.twig'; // Import the Twig template

const meta: Meta = {
  title: 'Example/Footer',
  parameters: {
    layout: 'fullscreen', // Adjust as needed
  },
};

export default meta;

type Story = () => string;

// Story for the footer component
export const Default: Story = () => {
  // Mock data for demonstration purposes
  const siteName = 'My Site';
  const loggedIn = true;
  const userDisplayName = 'John Doe';

  // Render the Twig template with mock data
  return footerTemplate({
    site_name: siteName,
    logged_in: loggedIn,
    user_display_name: userDisplayName,
  });
};
