# user_management_server

We have created a server runnnig at http://localhost:8000 and are using it to call the API ("https://dev-76jmhxudzvoqistv.us.auth0.com/oauth/token")  to first get the oauth token and then using that  token to call the Management API ("https://dev-76jmhxudzvoqistv.us.auth0.com/api/v2/users") to get the information about all users.All this is done through the backend because auth0 doesn't allow calling Management API from the client side due to security reasons. We are then calling the endpoint we have created ("http://localhost:8000/users) from the client side to get the information about all users and reflecting it on the Admin Dashboard.

# Here's a demo of how the api call to "http://localhost:8000/users" works:
![user3](https://user-images.githubusercontent.com/37264147/229367660-3052c4a8-ebd3-4966-8143-bb409d92a4f4.gif)






