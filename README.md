# Group Project 1: Find Pods Fast

## The Team
- Macy Mannix
- Johnson Nguyen
- Jordan Thomas

## Purpose
Find Pods Fast is a page that can be used to search for podcasts by genre. Upon searching it will inform the user if any of those top shows have upcoming live events.

## Process
1. We started by selecting our APIs that we would use within this project. In the end we decided on using the Itunes API and the ticketmaster API.
2. Macy ceated the structure for our page using HTML. She also chose to use materialize as a styling framework.
3. Jordan created a function in podcast-api that fetched data from both APIs.
    - First I fetched the data from Itunes in order to populate the cards dynamically with the top 8 podcast names, images, and itunes links.
    - Next I fetched the data from ticketmaster for the upcoming live events.
    - Finally I created a function to compare the podcast names with the names for the live events, and if there was a match it dynamically changed the upcoming events section of the card to inform the user that there were indeed upcoming events. Otherwise I would let them know that nothing was upcoming.
4. Macy worked with saving and retrieving local storage to dynamically create buttons that would load the users previously searched genres.
5. Finally Macy added some extra style to change the way the cards displayed based on whether or not there are shows upcoming

## Deployed URL


## Github Repository


## Powerpoint Link
https://docs.google.com/presentation/d/1b2NGbuQaH4ukCpB_5pev-AwlZhlD0MYDsGzbEPtO-vo/edit#slide=id.g12687f22ec8_0_125

## Built With
- Itunes API
- Ticket API
- HTML
- CSS
- JS
- Teamwork

## Contribution
- Made with ❤️️ by Cephlapodcastify
- Mentored by UC Davis Full Stack Web Developer Bootcamp

