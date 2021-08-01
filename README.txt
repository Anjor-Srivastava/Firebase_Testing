Firebase Testing
_______________________________________
Hello everybody. In this project I made a website for firebase testing. 
I also tried a new database rule. Checkout the files if youn would like to know.
I have provided my database sdks. But if there are spam messages in the database,
the database will be closed.
____
My Database rule
_____________________
{
  "rules": {
    ".read": "auth == null",
    ".write":"auth == null"
  }
}
______
Link for this website:
https://anjor-srivastava.github.io/Firebase_Testing/
