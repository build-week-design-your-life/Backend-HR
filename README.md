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

_The object should follow this shape:_

       {
        "username": "test1",
        "password": "somepassword"
        }

_Notes:_
Usernames are **unique**.

# Protected Routes

Protected routes require an authorization token which is generated for you when you log in. If you're using Postman or Insomnia to test endpoints, you will need to add that authorization key that is returned to you when you hit the login route with a successful login.

## **User Login:**

**Required credentials:**
_Username
Password_
POST request to:
[https://hr-bw3.herokuapp.com/api/auth/login](https://hr-bw3.herokuapp.com/api/auth/login)

## Journals

**GET request to: /api/journals/:type/:id**
This route will get user entries for **ALL** of the users journal entries, either weekly or daily.
[https://hr-bw3.herokuapp.com/api/journals/:type/:id](https://hr-bw3.herokuapp.com/api/journals/:type/:id)

**GET request to: /api/journals/:id**
This route will get user entries for **A SINGLE** journal entry of any type.
[https://hr-bw3.herokuapp.com/api/journals/:type/:id](https://hr-bw3.herokuapp.com/api/journals/:type/:id)

**POST request to: /api/journals**
This route will allow you to create and post journal entries or either type.
[https://hr-bw3.herokuapp.com/api/journals](https://hr-bw3.herokuapp.com/api/journals/)

_The object should follow this shape:_

      {
    	    "user_id": 2,
    	    "journal_content": "test content",
    	    "journal_title": "entry title",
    	    "journal_type": "weekly", (or daily)
    	    "journal_date": 1919394
      }


For journal date, determine your best format for doing that. Maybe moment.js, or Date.now() with formatting.

**PUT request to: /api/journals/:id**
This route will allow you to **UPDATE** journal entries or either type.
[https://hr-bw3.herokuapp.com/api/journals/](https://hr-bw3.herokuapp.com/api/journals/)

_The object should follow this shape:_

      {
    	    "journal_content": "test update content",
    	    "journal_title": "update entry title",
    	    "journal_update": 1919394
      }


journal_update will store the time it was updated, in case it's needed.

**DELETE request to: /api/journals/:type/:id**
This route will allow you to **DELETE** a journal entry of either type.
[https://hr-bw3.herokuapp.com/api/journals/type/:id](https://hr-bw3.herokuapp.com/api/journals/type/:id)

## **Users:**

**GET request to: /api/users**
This route will allow you to GET all users.
https://hr-bw3.herokuapp.com/api/users

**GET request to: /api/users/:id**
This route will allow you to GET a specific user.
https://hr-bw3.herokuapp.com/api/users/:id
