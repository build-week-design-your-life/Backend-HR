
# Design Your Life Backend API Endpoints
**MAIN ROUTE**
[https://hr-bw3.herokuapp.com/](https://hr-bw3.herokuapp.com/)

All endpoints based off of the root URL provided above.

# Open Routes

**Getting all users:**
GET request to:
[https://hr-bw3.herokuapp.com/api/users](https://hr-bw3.herokuapp.com/api/users)

**Registering a User**
POST request to:
[https://hr-bw3.herokuapp.com/api/auth/register](https://hr-bw3.herokuapp.com/api/auth/register)

*object shape:*

       {
	    "username": "test1",
	    "password": "somepassword"
	    }

*Notes:*
Usernames are **unique**.

# Protected Routes
Protected routes require an authorization token which is generated for you when you log in. If you're using Postman or Insomnia to test endpoints, you will need to add that authorization key that is returned to you when you hit the login route with a successful login.

## **User Login:**
**Required credentials:**
*Username
Password*
POST request to:
[https://hr-bw3.herokuapp.com/api/auth/login](https://hr-bw3.herokuapp.com/api/auth/login)

## User Journals
**GET request to:**
This route will display user entries for their daily journal entries.
[https://hr-bw3.herokuapp.com/api/journals/daily](https://hr-bw3.herokuapp.com/api/journals/daily)

**GET request to:**
This route will display user entries for their weekly journal entries.
[https://hr-bw3.herokuapp.com/api/journals/weekly](https://hr-bw3.herokuapp.com/api/journals/weekly)