# Airline Management API Gateway Service

## Overview

The Airline Management API Gateway Service is a central component in the microservices architecture for handling communication between various microservices, including Flight Search Service, Flight Auth Service, Flight Reminder Service, and Flight Booking Service. It serves as a single entry point for managing requests and responses, incorporating essential features such as rate limiting, auto scaling, load balancing, logging, and HTTP proxying.

## Microservices Architecture

The API Gateway orchestrates communication among the following microservices:

1. **Flight Search Service**: Handles flight search functionality. [Click here](https://github.com/vishnu-mouli-102408/Flight-Search-Service)
2. **Flight Auth Service**: Manages user authentication for flight-related operations. [Click here](https://github.com/vishnu-mouli-102408/Flight-Auth-Service)
3. **Flight Reminder Service**: Sends reminders related to flights. [Click here](https://github.com/vishnu-mouli-102408/Flight-Reminder-Service)
4. **Flight Booking Service**: Manages flight booking operations. [Click here](https://github.com/vishnu-mouli-102408/Flight-Booking-Service)

## Features

- **Rate Limiting**: Controls the number of requests allowed within a specific time frame.
- **Auto Scaling**: Dynamically adjusts the number of instances based on demand.
- **Load Balancing**: Distributes incoming requests across multiple instances to ensure optimal performance.
- **Logging with Morgan**: Utilizes the Morgan library for HTTP request/response logging.
- **HTTP Proxy Middleware**: Routes requests to the appropriate microservices using HTTP proxying.

## Dependencies

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Express**: Web application framework for Node.js.
- **http-proxy-middleware**: Middleware for proxying HTTP requests.
- **Morgan**: HTTP request logger middleware for Node.js.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Flight-API-Gateway.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        PORT=your_preferred_port
        RATE_LIMIT=your_rate_limit_value
        ```
        
4. **Run the API Gateway service:**
    ```bash
    npm start
    ```

5. **Access the API Gateway:**
    - The API Gateway will be running on the specified port (default is 3000).

6. **Explore the Microservices Architecture!**

## Configuration

Ensure to set the appropriate environment variables in your `.env` file for configuring the API Gateway:

- `PORT`: Port on which the API Gateway will run.
- `RATE_LIMIT`: Rate limit value for controlling the number of requests.

## License

This project is licensed under the [MIT License](LICENSE).
