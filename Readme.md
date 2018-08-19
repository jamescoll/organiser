

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - 3.x.x

## Steps to Setup

**1. Build and run the backend app using maven**

```bash
cd spring-boot-backend
mvn package
java -jar target/todoapp-1.0.0.jar
```

Alternatively, you can run the app without packaging it using -

```bash
mvn spring-boot:run
```

The backend server will start at <http://localhost:8080>.

**3. Run the frontend app using npm**

```bash
cd angular-frontend
npm install
```

```bash
npm start
```

Frontend server will run on <http://localhost:4200>

## Learn more

This is a stack together of various differnet angular apps into a calendar/organiser app with weather functionality. Nothing special to see here..just a useful lil organizer for me which currently looks like a car-crash but will become better and nicer with time.
