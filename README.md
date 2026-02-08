🌦️ Weather Forecast Web Application (Full Stack)



A full-stack Weather Forecast application built with React (Vite) on the frontend and Java Spring Boot on the backend.
The app provides real-time weather data and multi-day forecasts with a clean dark UI and smooth animations.

🧩 Project Overview

Frontend: React + Vite (UI, animations, charts)

Backend: Spring Boot (REST API)

API Flow:
React → Spring Boot → External Weather API → Response → UI



🌐 Frontend

Search weather by city name

Select forecast duration (3 / 5 / 7 days)

Current weather + multi-day forecast

Dynamic weather icons (Day / Night)

Smooth animations & dark UI

Responsive design

⚙️ Backend

REST API for weather data

Acts as a middleware between frontend & external weather API

Centralized data processing

CORS enabled for frontend integration

🖥️ Tech Stack
Frontend

React (Hooks)

Vite

Axios

Recharts

CSS (custom animations & styles)

Backend

Java

Spring Boot

REST APIs

External Weather API integration

📂 Project Structure
WeatherAPP/
├── backend/
│   ├── src/main/java/...
│   ├── controller/
│   ├── service/
│   └── application.properties
│
├── frontend/
│   └── src/UI/
│       ├── api/
│       │   └── weatherApi.js
│       ├── components/
│       │   ├── WeatherControls.jsx
│       │   ├── CurrentWeather.jsx
│       │   ├── ForecastChart.jsx
│       │   └── ForecastList.jsx
│       ├── pages/
│       │   └── WeatherDashboard.jsx
│       ├── styles/
│       │   ├── style.css
│       │   └── animations.css
│       ├── App.jsx
│       └── main.jsx

🔗 API Architecture
Frontend (React)
     |
     |  Axios (HTTP request)
     ↓
Backend (Spring Boot)
     |
     |  External Weather API
     ↓
 Weather Data Response

🚀 How to Run the Project
1️⃣ Run Backend (Spring Boot)
cd backend
mvn spring-boot:run


Backend will start at:

http://localhost:8080

2️⃣ Run Frontend (React)
cd src/UI
npm install
npm run dev


Frontend will start at:

http://localhost:5173

🔧 Environment Configuration
Backend

Configure your Weather API key inside:

application.properties

Frontend

API base URL:

const BASE_URL = "http://localhost:8080";

🧪 Sample API Endpoint
GET /weather?city=Agra&days=7


Response includes:

City, region, country

Current temperature & condition

Forecast data (per day)

🎨 UI Highlights

Dark gradient background

Glass-morphism cards

Animated sun glow (Sunny weather)

Smooth fade-in transitions

Google-style minimal layout

🧠 Future Improvements

🌧️ Rain & ❄️ Snow animations

🌍 Auto-location detection

📱 Mobile-first improvements

☁️ Deployment (Render / Vercel)

🔐 API rate-limit handling

👨‍💻 Author

Divyanshu Tiwari
Full-Stack Developer (Java + React)

📜 License

This project is licensed under the MIT License.
