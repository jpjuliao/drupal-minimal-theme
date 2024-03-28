# Header Component

This is the header component for the Drupal theme. It includes the site name and a welcome message for logged-in users.

## Files

- **header.twig**: Twig template file for the header component.
- **header.css**: CSS file for styling the header component.
- **header.stories.yml**: YAML file containing stories for the header component (for Storybook integration).
- **header.component.yml**: YAML file containing metadata about the header component.

## Usage

Include the header component in your main HTML template (`html.twig`) using Twig's `include` statement.

```twig
{% include '@theme/components/header/header.twig' with {
  'site_name': site_name,
  'logged_in': logged_in,
  'user_display_name': user_display_name,
} %}
