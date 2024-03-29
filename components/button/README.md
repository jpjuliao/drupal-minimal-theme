# Button Component

This is the button component for the Drupal theme. It includes a copyright notice with the current year.

## Files

- **button.twig**: Twig template file for the button component.
- **button.css**: CSS file for styling the button component.
- **button.stories.yml**: YAML file containing stories for the button component (for Storybook integration).
- **button.component.yml**: YAML file containing metadata about the button component.

## Usage

Include the button component in your main HTML template (`html.twig`) using Twig's `include` statement.

```twig
{% include '@theme/components/button/button.twig' with {
  'year': "now"|date("Y")
} %}
