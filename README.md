
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

*The object should follow this shape:*

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
This route will display user entries for their journal entries, either weekly or daily.
[https://hr-bw3.herokuapp.com/api/journals/:type/:id](https://hr-bw3.herokuapp.com/api/journals/:type/:id)

**POST request to:**
This route will allow you to create and post journal entries or either type.
[https://hr-bw3.herokuapp.com/api/journals](https://hr-bw3.herokuapp.com/api/journals/)

*The object should follow this shape:*

      {
    	    "user_id": 2,
    	    "journal_content": "test content",
    	    "journal_title": "entry title",
    	    "journal_type": "weekly", (or daily)
    	    "journal_date": 1919394
      }
      
For journal date, determine your best format for doing that. Maybe moment.js, or Date.now() with formatting.