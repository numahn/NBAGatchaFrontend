# GGC (Goat Grade Collectibles)
The GGC is a alternative to gambling where you can test your luck and get a trading card of your favorite player!

This project is up and running, but may be a work in progress.

## Built Using
<div>
  <kbd> <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" /> </kbd>
</div>
and other React Libraries!

## Deployed on Netlify
[https://goatgradecollectibles.netlify.app/]

## Getting Started
To run the program after pulling the repo, download and install a few packages:
```
npm install react-bootstrap bootstrap@5.1.3
npm install -D sass
npm install aos --save
npm install redux react-redux redux-devtools-extension redux-thunk
```


## Reflection
GGC was a about a week-long project for a full stack web development bootcamp with the Tech Talent Pipeline Residency at CSI. Using what we learned in the previous weeks, me and 3 other students worked on making a website that can simulate the gambling sensation many get when doing so. Specifically, from the NBA2K games, as we felt like is a very problematic issue that exists in the industry, where many kids are inticed to gamble for some players that they would get in game. We thought we can simulate the thrill of gambling by adding a currency option, where you can choose how much currency you want for the account when made, and then start to feel that sensation when the currency is running out.

Although we have many ideas for this project, this is what we had for the allotted time that was given for us to complete the project. Some other ideas we have are: 
* Adding a way to get currency, such as a daily login
* Creating a team with your cards, similar to myTEAM in the 2K games
* Adding more packs, which would need us to add more to the database we made

## How It Works

We first created the database ourselves for the cards we wanted. Since we did not have a lot of time, we decided to make 30 entries, 10 for each pack. Once the database was running, we created packs and added animations to the card opening to add a gambling feel to it. This would then save the cards you earned.

![Navbar Before](https://raw.githubusercontent.com/nali556/NBAGatchaFrontend/main/images/NavbarBefore.png)
In order to open packs and for them to save, you must first create an account. Before that, the navbar at the top of the site will ask you to either signup or login.

![Navbar After](https://raw.githubusercontent.com/nali556/NBAGatchaFrontend/main/images/NavbarAfter.png)
 Once the website displays your username and currency instead of login, you can open some packs! Simply click on the pack you would like to open, buy the pack, and see the card that you got pop up! When you open a card, you can see the players stats by hovering over the card, and also see all the cards that are in that pack. You can then see the cards you've earned in your collections page, which will have only the cards you have on that specific account. 

 ![Pack Page](https://raw.githubusercontent.com/nali556/NBAGatchaFrontend/main/images/CardPage.png)
 The page before you open cards, displaying the cards that are available

 ![Card Display](https://raw.githubusercontent.com/nali556/NBAGatchaFrontend/main/images/CardDisplay.png)
 The page after buying packs, the front displaying the image, the back displaying the stats of the players

 ![Collections Page](https://raw.githubusercontent.com/nali556/NBAGatchaFrontend/main/images/CollectionPage.png)
 The collections page, which only displays the cards the user that is logged in has. It also displays all the stats of the players, unlike the pack pages, which only display the overall stat of the player.

 Want to try it out? Check out the Netlify link!


## Check out the backend repo!
[https://github.com/BolaGhaly/TTP-Capstone-Project-Backend]
