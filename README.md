# GGC (Goat Grade Collectibles)
The GGC is a alternative to gambling where you can test your luck and get a trading card of your favorite player!

This project is up and running, but may be a work in progress.


## Getting Started
To run the program, download and install a few packages:
```
npm install react-bootstrap bootstrap@5.1.3
npm install -D sass
npm install aos --save
npm install redux react-redux redux-devtools-extension redux-thunk
```
## Deployed on Netlify
[https://dazzling-mestorf-3c615c.netlify.app/]

## Reflection
GGC was a about a week-long project for a full stack web development bootcamp with the Tech Talent Residency at CSI. Using what we learned in the previous weeks, me and 3 other students worked on making a website that can simulate the gambling sensation many get when doing so. Specifically, from the NBA2K games, as we felt like is a very problematic issue that exists in the industry, where many kids are inticed to gamble for some players that they would get in game. We thought we can simulate the thrill of gambling by adding a currency option, where you can choose how much currency you want for the account when made, and then start to feel that sensation when the currency is running out.

Although we have many ideas for this project, this is what we had for the allotted time that was given for us to complete the project. Some other ideas we have are: 
* Adding a way to get currency, such as a daily login
* Creating a team with your cards, similar to myTEAM in the 2K games
* Adding more packs, which would need us to add more to the database we made

## How It Works

We first created the database ourselves for the cards we wanted. Since we did not have a lot of time, we decided to make 30 entries, 10 for each pack. Once the database was running, we created packs and added animations to the card opening to add a gambling feel to it. This would then save the cards you earned.

In order to open packs and for them to save, you must first create an account. Before that, the navbar at the top of the site will ask you to either signup or login.
[a relative link](/images/NavbarBefore.png)
 Once the website displays your username and currency instead of login, you can open some packs! Simply click on the pack you would like to open, buy the pack, and see the card that you got pop up! You can then see it in your collections page, which will have only the cards you have on that specific account.

## Built Using
* PostgreSQL
* Express
* React
* Node
* and other React Libraries!

