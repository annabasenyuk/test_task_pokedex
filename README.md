# test_task_pokedex

[DEMO LINK](https://annabasenyuk.github.io/test_task_pokedex/)

# Overview


The Pokedex is a dynamic web application built with React and TypeScript, featuring an intuitive interface for exploring Pokemon cards. The application incorporates a loader for efficient card loading and a dropdown filter for sorting cards by Pokemon types. Additionally, detailed card views are easily accessible by clicking on individual cards.


# Features


Card Display: The main page showcases Pokemon cards in a grid layout, each represented as a clickable card containing preview images and basic information about the Pokemon.

Loader: Implemented using Axios, the loader efficiently fetches and loads Pokemon cards, ensuring smooth browsing without disruptions. This asynchronous loading approach enhances the user experience.

Dropdown Filter: A user-friendly dropdown filter, powered by Headless UI, allows users to sort and view Pokemon cards based on their types. This feature provides a convenient way to explore specific categories of Pokemon.

Card Expansion: Clicking on a Pokemon card triggers an animated expansion effect, revealing a detailed card view on the side of the page. This expanded view provides comprehensive information about the selected Pokemon, including its stats, abilities, and other relevant details.


# How to Use


Browsing Cards: Scroll through the main page to explore various Pokemon cards. The loader ensures that new cards are loaded dynamically, providing an extensive collection to explore.

Filtering by Type: Use the dropdown filter to select a specific Pokemon type and view cards belonging to that category. This feature simplifies navigation for users interested in particular types of Pokemon.

Detailed View: Click on any Pokemon card to expand it and reveal additional information. The detailed view offers an in-depth look at the selected Pokemon's attributes, allowing users to delve into the specifics of each card.


# Technologies Used


React and TypeScript: The application is developed using React for building interactive user interfaces, and TypeScript for enhanced code clarity and type safety.

Headless UI: The dropdown filter is implemented using the Headless UI library, providing accessible and customizable UI components.

Axios: Asynchronous loading of Pokemon cards is achieved using Axios, ensuring a responsive and efficient card-fetching mechanism.

Pokemon API: Data for the Pokemon cards is fetched from a Pokemon API, ensuring that the card collection is up-to-date and comprehensive.
