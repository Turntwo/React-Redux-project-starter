# Employee Polls Project

This project allows a user to create and answer questions with one of two options.

To run this project, open a terminal in the "employee-polls" folder and enter the following commands:
npm install
npm start

Once the project is running, you can access it from http://localhost:30000.

# Using the Application

To use the application, you first need to select a user (to impersonate) from the drop down in the upper right. Then the other functionality with be available.

## Dashboard (Home Page)

This page allows you to view the available poll questions. You can click on the New / Answered header to toggle between quesiton you have or haven't answered already.
Clicking a question will bring you to the Question page.

## Question page

Here you can view the question details, and select a response by clicking one of the two options.  
Once the response is chosen, you can see the vote totals and percent for each response (you will not be able to change your response).

## New Quesiton page

Click on the New menu item in the Nav control (or navigate to /add) to open the New Question page
Enter the two options you want employees to choose between, and hit Submit to save the question and return to the dashboard.

It will then be available from the Dashboard page.

## Leaderboard

Clicking the Leaderboard link or navigation to /leaderboard will display a list of users along with the number of questions
they have asked and answered.
