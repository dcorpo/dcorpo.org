# **API endpoints**

1) [Account authentication](https://github.com/dcorpo/dcorpo.org/blob/main/docs/api_endpoints.md#account-authentication)
2) [Account registration](https://github.com/dcorpo/dcorpo.org/blob/main/docs/api_endpoints.md#account-registration)


------------------------------

## **Account authentication**

------------------------------

    /auth/login/ (POST)

### Parameters:
- username
- password

### Returns:
- access_token
- refresh_token
- user: {
    pk,
    username,
    email,
    first_name,
    last_name
}

------------------------------

    /auth/logout/ (POST)

------------------------------

    /auth/password/reset/ (POST)

### Parameters:
- email

------------------------------

    /auth/password/reset/confirm (POST)

### Parameters:
- uid
- token
- new_password1
- new_password2

> #### Note
> uid and token are sent in email after calling /auth/password/reset/

------------------------------

    /auth/password/reset/change (POST)

### Parameters:
- old_password
- new_password1
- new_password2

------------------------------

    /auth/user (GET, PUT, PATCH)

### Parameters:
- username
- first_name
- last_name

### Returns:
- pk
- username
- email
- first_name
- last_name

------------------------------

    /auth/token/verify/ (POST)

### Parameters:
- token

### Returns (valid token):
- empty JSON object
### Returns (invalid token):
- "detail": "Token is invalid or expired"
- "code": "token_not_valid"

------------------------------

    /auth/token/refresh/ (POST)

### Parameters:
- refresh token

### Returns (valid token):
- access token
- access_token_expiration
### Returns (invalid token):
- "detail": "Token is invalid or expired"
- "code": "token_not_valid"


------------------------------

## **Account registration**

------------------------------


    /auth/registration/ (POST)

### Parameters:
- username
- password1
- password2
- email

------------------------------

    /auth/registration/verify-email/ (POST)

### Parameters:
- key

------------------------------

    /auth/registration/resend-email/ (POST)

### Parameters:
- email