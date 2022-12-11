# Yoga-Class by Flexmoney-
This website aims at providing the yoga classes to differenct at groups(18-65) with flexible timeslots at a nominal charges of Rs.500.


# ER Diagram

![image](https://user-images.githubusercontent.com/100020772/206903544-493bfc21-0639-451d-bcff-2f5e31034ac4.png)


## Approach

The website is build using HTML and Bootstrap as front-end and NodeJS as back-end. 
1. The site starts with a landing page.
2. The user is given with two options:
			  a. Login(For Existing Users)
			  b. Sign Up(For new users): Checks have been imposed such as age should 	be between 18-65 only and to choose the timeslot.
3. Login is built using Passport.JS with a local strategy which can be easily converted to use automatic  logins like Google.
4. After logging in, the user lands on dashboard where he/she is provided with the schedule of upcoming 6 days.
5. An option to pay fee which is connected to CompletePayment() function is provided, and one can easily navigate to the dashboard to pay the fee later.
6. Another option to change the time slot is provided which will be reflected the next month's starting as it automatically gets updated in SQL database when one triggers to change the time slot.



## Flow Chart
```mermaid
graph LR
A[Landing Page] --Login Selected --> B(Login Page)
A --SignUp Selected--> C(SignUp Page)
B --Details Verified--> D(Dashboard)
C --Details Verified--> B
D --Pay Fee Selected-->E(CompletePayment)
E-->D
D--Change Time Slot Selected-->F(Update Time Slot)
F-->D
D--Change Password Selected-->H(Update New Password)
H-->D
D-->G(Logout)
```
## Snippets
Landing Page:
![image](https://user-images.githubusercontent.com/100020772/206903639-0098c5f8-a5af-422c-becb-e55a1c1f1636.png)

Login Page:
![image](https://user-images.githubusercontent.com/100020772/206903680-56a2e74e-877b-4a5a-94ab-9280a8b7a136.png)

SignUp Page:
![image](https://user-images.githubusercontent.com/100020772/206903697-6a51b8c9-cfe2-4213-83e1-9f0ca12850f2.png)

Dashboard:
![image](https://user-images.githubusercontent.com/100020772/206904366-e7cd0d17-f626-4647-8bd3-27a4740fccd4.png)

Payment Page:
![image](https://user-images.githubusercontent.com/100020772/206903969-1ab8b1ed-b265-41be-92dc-b16f180f4c96.png)

Change Password Page:
![image](https://user-images.githubusercontent.com/100020772/206904387-6d20b22b-e80b-4c9a-bd35-d33c4613283a.png)


