# My London Diary

## Table of Contents

- [Project Description](#project-description)
- [Preview](#preview)
- [Tech Stack](#Tech-stack)
- [Running the Project Locally](#running-the-project-locally)

## Project Description
A full-stack app that helps me record and store my memories of London. It allows me to save my photos along with written reflections. Users can leave local tips on recommended places by selecting a location on the integrated Google Maps API, adding descriptions, and uploading photos of recommended spots.

## Preview
![cover image](https://github.com/Elyzavetka/my_london_diary/blob/main/frontend/public/images/my-london-diary.png)

## Tech Stack:

- **JavaScript**: The primary language for both frontend and backend development.
- **TypeScript**: A programming language based on JavaScript that adds static typing, allowing me to define variable and function types to catch errors early and improve code quality.
- **React**: Used to build the user interface. Components are implemented to display and interact with data.
- **Node.js**: A JavaScript runtime on the server-side, enabling communication between the client and the database.
- **Express**: A framework for building RESTful APIs on the server side, handling routing and request processing.
- **AWS S3**: Used for cloud storage and management of uploaded images.
- **Google Maps API**: Integration of interactive maps, displaying locations and routes.
- **PostgreSQL**: A relational database used to store user information and text content associated with photo posts, such as titles and descriptions.
- **dotenv**: A module used to manage environment variables, allowing me to hide API keys and other sensitive information from the codebase.

## Running the Project Locally

To run the project on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: (v14 or later recommended) [Install Node.js](https://nodejs.org/)
- **npm**: npm comes with Node.js.
- **PostgreSQL**: Make sure PostgreSQL is installed and running. [Install PostgreSQL](https://www.postgresql.org/download/)
- **AWS S3 credentials**: For cloud storage of images.
- **Google Maps API key**: For maps integration.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Elyzavetka/my_london_diary
   cd your-repo-name

2. **Install dependencies**:

   To install the necessary dependencies for the project, run the following command in your terminal:
   
   ```bash
   npm install

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory of your project. This file will contain sensitive information that your application needs to function correctly. Add the          following    environment variables to your `.env` file:

   For **frontend**:

   ```bash
   # .env file for frontend
   REACT_APP_AWS_S3_KEY_ID=your_aws_key_id
   REACT_APP_AWS_S3_ACCESS_KEY=your_aws_access_key
   REACT_APP_GOOGLE_MAP_API_KEY=your_google_maps_api_key


   For **backend**:

   ```bash
   # .env file for backend
   REACT_APP_GOOGLE_MAP_API_KEY=your_google_maps_api_key
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_jwt_secret_key


5. **Set Up PostgreSQL**:

   Ensure that PostgreSQL is running on your machine. You will need to create a new database for your application. You can do this by running the following command:

   ```bash
   createdb your_db_name
   
6. **Run the Project**:

   To start both the frontend and backend of your application, use the following command:
   
   ```bash
   npm start

  This command will initiate both the backend server and the frontend development server simultaneously. After running this command, you should see the frontend running at       
   http://localhost:3000, while the backend API will be available at the appropriate port (for example, http://localhost:3001).

### Additional Notes:

Make sure to configure your AWS S3 and Google Maps API keys correctly in the .env file. 
