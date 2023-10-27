# RESTy

RESTy is a simple React-based API client that lets users interact with RESTful services.

## Development Phases

### Phase 1: Initial Setup

- Establish a basic React environment.
- Set up an initial application state.
- Facilitate primary rendering mechanisms.

### Phase 2: User Interaction & State Management

- Transition the application to functional components.
- Integrate the `useState()` hook for state management.
- Implement mechanisms to capture and manage user input.

### Phase 3: Connecting to Live APIs

- Connect RESTy to live APIs.
- Implement fetching and displaying remote data.
- Focus on servicing GET requests.
- Allow users to enter the URL to an API and issue a GET request.
- Display the results returned from an API request in a readable format.
- Extend the application to include the ability to send HTTP requests and display response data.
- Refactor application methods to allow for browser-side HTTP requests to be sent.
- Enable users to set a URL, method, and request body.
- Ensure all relevant request and response data is displayed to the user.
- Update the Results component to use a 3rd party component to "pretty print" the JSON in a color-coded, user-friendly format.

### Phase 4: Track History

- We'll be tracking every API call and storing it in history.
- Users will see a list of their previous API calls, allowing them to view results quickly.
- Application will fetch data from the provided URL with the chosen method.
- Store the API request and returned data in state.
- Update the list of previous API calls.
- Display the response headers and results in a "pretty printed" JSON format.
- Refactor state management to use the `useReducer()` hook.

## Components

1. **App**: The main container.
2. **Header**: Displays the application's title.
3. **Form**: Input for API URLs and HTTP method selection.
4. **Results**: Showcases the API response.
5. **Footer**: Displays footer information.

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies.
4. Run the application.

![UML](uml.png)

[Deployed Netlify](https://adnan-resty.netlify.app/)
