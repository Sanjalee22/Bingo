# Traveller's Bingo

## Introduction

This is a fun Bingo app for travellers. It generates name of different places in the world randomly and the players can mark the places they have visited.

## Visual Preview


## Requirements

### User Flow

 * User loads the web page in the browser.
 * Arrives at the home screen which has the following components:
   + The app name on the top
   + An input control for the user to enter the total number of players. By default, it is one.
   + A 5 X 5 bingo ticket with names of cities in each cell and a Bingo image in center.
   + A button with the text 'Next City'.
 * When user changes the number of players, that many different tickets are shown on the screen. 
 * When user clicks on the button 'Next City'
   + A random city name is shown on the screen. 
   + If in any of the tickets, that city name is present, that cell gets highlighted.
 * When user click on the highlighted cell:
   + Colour of the cell changes indicating that the corresponding city name has been called out.
   + If all the names which are vertically, horizontally or diagonally adjacent to this cell have been called out, it is a Bingo.
 * When there is a Bingo, all the cells which are part of the bingo combination, are highlighted with some animation to indicate the win.

## Technology

* ReactJS 17.0.2
* React Testing Library for Unit Tests
* Git with a commit history
* Followed standard coding guidelines

## Package Structure
