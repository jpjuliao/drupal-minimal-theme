# Footer Component

This is the footer component for the Drupal theme. It includes a copyright notice with the current year.

## Files

- **footer.twig**: Twig template file for the footer component.
- **footer.css**: CSS file for styling the footer component.
- **footer.stories.yml**: YAML file containing stories for the footer component (for Storybook integration).
- **footer.component.yml**: YAML file containing metadata about the footer component.

## Usage

Include the footer component in your main HTML template (`html.twig`) using Twig's `include` statement.

```twig
{% include '@theme/components/footer/footer.twig' with {
  'year': "now"|date("Y")
} %}
