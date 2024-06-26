# Rn-Assignment5-11125864

**Shopex** is a React Native application designed to provide users with an intuitive and streamlined interface for managing financial transactions and settings. This project showcases the use of modern navigation techniques and best practices in React Native development.

# Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Screenshots](#screenshots)

# Description

# Concept and Component Structure

Shopex was built with a component-based architecture to ensure modularity, reusability, and maintainability. Here's a brief overview of how the main components were conceptualized and built:

1. **App Component:**
   - The entry point of the application. It sets up the navigation structure using React Navigation's bottom tab navigator.
   - Integrates the Home and Settings screens into the tab navigator to provide easy access to different parts of the app.

2. **Home Component:**
   - Designed to display an overview of the user's financial status and recent transactions.
   - Utilizes basic React Native components to create a clean and informative user interface.

3. **Settings Component:**
   - Allows users to customize their app settings.
   - Provides options for users to toggle between different themes and manage their preferences.

4. **Context and Theme Management:**
   - Uses React's Context API to manage global state, particularly for theming.
   - The ThemeContext component allows for easy toggling between light and dark themes across the application.

By breaking down the application into these components, we ensured that each part of the app is focused on a single responsibility, making the codebase easier to manage and extend in the future.


## Usage

Once you have the app running, you can navigate through the Home and Settings screens using the bottom tab navigator. The Home screen provides an overview of your financial transactions and statistics, while the Settings screen allows you to customize various aspects of the app.

## Screenshots

![Home-dark screenshot]()
![Home-ight screenshot]()
![Settings-dark screenshot]()
![Settings-light screenshot]()


