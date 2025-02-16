# Smart Form

## Overview

Smart Form is a WordPress plugin designed to manage contact forms using ReactJS. It provides a user-friendly interface for creating, managing, and analyzing contact forms, all while leveraging modern web technologies like Chakra UI and React Router. The plugin allows users to build forms dynamically, collect data, and view statistics, making it an essential tool for any WordPress site that requires user interaction.

## Features

- **Dynamic Form Builder**: Create and customize forms using a simple and intuitive interface.
- **ReactJS Integration**: The plugin is built with ReactJS, providing a smooth and responsive user experience.
- **Chakra UI**: Utilizes Chakra UI for a modern and accessible design.
- **React Router**: Supports navigation between different screens (e.g., form list, contact list, statistics) without full page reloads.
- **AJAX Submission**: Forms are submitted via AJAX, allowing for seamless data handling without refreshing the page.
- **Data Storage**: Form data is stored in JSON format, making it easy to extend and manage.
- **Anti-Spam Features**: Built-in support to prevent spam submissions.
- **Statistics Dashboard**: View statistics and analytics for submitted contacts.

## Installation

1. Download the plugin and place it in the `wp-content/plugins` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Ensure that you have Node.js and npm installed to manage the frontend dependencies.

## Usage

### Creating a Form

1. Navigate to the Smart Form section in the WordPress admin panel.
2. Use the form builder to create a new form by adding fields as needed.
3. Save the form to make it available for users.

### Viewing Contacts

- Access the contact list to view all submissions made through the forms.
- Filter and search through the contacts for easier management.

### Analyzing Statistics

- Navigate to the statistics section to view insights about form submissions, including trends and user engagement.

## Frontend Structure

The frontend is structured using React Router, allowing for easy navigation between different components:

- **ContactForm**: Component for rendering the contact form.
- **FormList**: Displays a list of all available forms.
- **ContactList**: Shows all contacts submitted through the forms.
- **Statistics**: Provides analytics and statistics about the submissions.

## Development

### Prerequisites

- Node.js
- npm
- WordPress environment

### Building the Frontend

1. Navigate to the plugin directory.
2. Run `npm install` to install the necessary dependencies.
3. Use `npx webpack --config webpack.config.js` to build the frontend assets.

### Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the plugin.

## License

This plugin is licensed under the MIT License. See the [LICENSE](vendor/composer/LICENSE) file for more details.

## Contact

For any inquiries or support, please contact the author:

- **Name**: Puleeno Nguyen
- **Email**: puleeno@gmail.com
