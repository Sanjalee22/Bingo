import { allElements, possibleWinningCombo } from "./constants";

//Generate random sequence of elements for a ticket
export const generateRandomSequence = () => {
  var allElementsClone = [...allElements];
  var randomNumbersArray = [];

  for (var i = 0; i < 25; ++i) {
    var random = Math.floor(Math.random() * allElementsClone.length);
    randomNumbersArray.push(allElementsClone[random]);
    allElementsClone.splice(random, 1);
  }

  allElementsClone = [];

  return randomNumbersArray;
};

//Iterates through the ticket and checks if all indices in any of the winning
//combo has been marked. If yes, there is a bingo.
export const checkBingo = (updatedTicketState, index) => {
  for (let i = 0; i < possibleWinningCombo.length; ++i) {
    if (possibleWinningCombo[i].includes(index)) {
      const [a, b, c, d, e] = possibleWinningCombo[i];
      if (
        updatedTicketState[a] &&
        updatedTicketState[b] &&
        updatedTicketState[c] &&
        updatedTicketState[d] &&
        updatedTicketState[e]
      )
        return possibleWinningCombo[i];
    }
  }
  return null;
};
