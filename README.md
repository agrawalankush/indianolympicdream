# Indian Olympic Dream

## Overview

The `indianolympicdream` application is a comprehensive platform dedicated to tracking and showcasing India's journey in the Olympic Games. It provides up-to-date information on athletes, event schedules, results, and inspiring stories related to India's participation in various Olympic sports.

## Features

*   **Athlete Profiles:** Detailed information on Indian athletes, their achievements, and upcoming events.
*   **Event Calendar & Schedule:** A comprehensive calendar of Olympic events with specific schedules for Indian participants.
*   **Sports Details:** Information on various Olympic sports, including rules, history, and Indian representation.
*   **Countdown:** A live countdown to major Olympic events.
*   **News & Stories:** Curated articles and stories highlighting India's Olympic journey and athlete achievements.
*   **Feedback Mechanism:** A way for users to provide feedback on the application.

## Technologies Used

This project is built using the following key technologies:

*   **Frontend:**
    *   [Angular](https://angular.io/) (v10.0.0) - A powerful framework for building single-page applications.
    *   [Angular Material](https://material.angular.io/) - UI component library implementing Material Design.
    *   [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript for type-safe development.
    *   [SCSS](https://sass-lang.com/) - CSS preprocessor for enhanced styling capabilities.
    *   [Angular Service Worker](https://angular.io/guide/service-worker-intro) - For progressive web app (PWA) features and offline capabilities.
*   **Containerization:**
    *   [Docker](https://www.docker.com/) - For containerizing the application and its environment.
    *   [Docker Compose](https://docs.docker.com/compose/) - For defining and running multi-container Docker applications.
    *   [Nginx](https://www.nginx.com/) - Used as a web server to serve the Angular application in production.

## Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [Angular CLI](https://angular.io/cli) (v10.0.0 or compatible)
    ```bash
    npm install -g @angular/cli@10.0.0
    ```
*   [Docker](https://docs.docker.com/get-docker/) (for production build and deployment)
*   [Docker Compose](https://docs.docker.com/compose/install/) (for production build and deployment)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/indianolympicdream.git
    cd indianolympicdream
    ```
    *(Note: Replace `https://github.com/your-username/indianolympicdream.git` with the actual repository URL if different.)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
ng serve
```

### Code Scaffolding

You can use Angular CLI to generate new components, directives, pipes, services, etc.:

```bash
ng generate component component-name
# or
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Building for Production

### Angular Production Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration=production` flag for a production-optimized build.

```bash
ng build --configuration=production
```

### Docker Production Build and Run

This project includes Docker configurations for building and running the application in a production environment.

1.  **Build the Docker image:**
    ```bash
    docker build -t indianolympicdream .
    ```
    *(Note: The `-t indianolympicdream` tags the image with a name.)*

2.  **Run with Docker Compose:**
    The `docker-compose.yml` file is set up to build the Angular application, create a Docker image, and serve it using Nginx.

    ```bash
    docker-compose up --build -d
    ```
    This command will:
    *   Build the Angular application inside a Docker container.
    *   Build the Nginx Docker image.
    *   Start the Nginx container in detached mode (`-d`).

    The application will typically be accessible at `http://localhost` (or the port configured in `nginx/default.conf.template`).

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.
