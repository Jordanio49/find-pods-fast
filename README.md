# Group Project 1: Find Pods Fast

## The Team
- Macy Mannix
- Johnson Nguyen
- Jordan Thomas

## Purpose
Find Pods Fast is a page that can be used to search for podcasts by genre. Upon searching it will inform the user if any of those top shows have upcoming live events.

## Process
1. We started by selecting our APIs that we could use within this project. In the end we decided on the Itunes API and the Ticketmaster API.
2. We developed a user story, used wireframing and GitHub issues to delegate tasks. 
3. Macy ceated the structure for our page using HTML. She also chose to use materialize as a styling framework.
    -She added an interactive dropdown to search bar for genre suggestions.
    -She used flexbox for responsive formatting.
3. Jordan created a function in podcast-api that fetched data from both APIs.
    - First, he fetched the data from Itunes in order to populate the cards dynamically with the top 8 podcast names, images, and itunes links.
    - Next, he fetched the data from ticketmaster for the upcoming live events.
    - Finally, he created a function to compare the podcast names with the names for the live events, and if there was a match it dynamically changed the        upcoming events section of the card to inform the user that there were indeed upcoming events. Otherwise notifies user that nothing is                      upcoming.
4. Macy worked with saving and retrieving local storage to dynamically create buttons that would load the users previously searched genres.
    -She styled buttons dynamically with materialize styling.
    -She added controls so there is not duplicate buttons on page /values in local storage.
    -She adjusted functions for the 2 button event listeners.
5. Johnson contributed to group discussions and took the lead on the organizing the slide deck and presentation elements.

## Deployed URL
https://jordanio49.github.io/find-pods-fast/

## Github Repository
https://github.com/Jordanio49/find-pods-fast

## Powerpoint Link
https://docs.google.com/presentation/d/1b2NGbuQaH4ukCpB_5pev-AwlZhlD0MYDsGzbEPtO-vo/edit#slide=id.g12687f22ec8_0_125

## Built With
- Itunes API
- Ticketmaster API
- Materialize
- HTML
- CSS
- JS
- Teamwork

## Contribution
- Made with ❤️️ by Cephlapodcastify
- Mentored by UC Davis Full Stack Web Developer Bootcamp

