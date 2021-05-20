import { allElements, possibleWinningCombo, ticketSize } from "./constants";

//Generate random sequence of elements for a ticket
export const generateRandomSequence = () => {
  var allElementsClone = [...allElements];
  var randomNumbersArray = [];

  for (var i = 0; i < ticketSize; ++i) {
    var random = Math.floor(Math.random() * allElementsClone.length);
    randomNumbersArray.push(allElementsClone[random]);
    allElementsClone.splice(random, 1);
  }

  allElementsClone = [];

  return randomNumbersArray;
};

//Iterates through the ticket and checks if all indices in any of the winning
//combo has been marked. If yes, return that combo. 
//If only one index out of the possible winning index is unmarked, return the unmarked index
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
      if (
        !updatedTicketState[a] &&
        updatedTicketState[b] &&
        updatedTicketState[c] &&
        updatedTicketState[d] &&
        updatedTicketState[e]
      )
        return [a];
      if (
        !updatedTicketState[b] &&
        updatedTicketState[a] &&
        updatedTicketState[c] &&
        updatedTicketState[d] &&
        updatedTicketState[e]
      )
        return [b];
      if (
        !updatedTicketState[c] &&
        updatedTicketState[a] &&
        updatedTicketState[b] &&
        updatedTicketState[d] &&
        updatedTicketState[e]
      )
        return [c];
      if (
        !updatedTicketState[d] &&
        updatedTicketState[a] &&
        updatedTicketState[b] &&
        updatedTicketState[c] &&
        updatedTicketState[d]
      )
        return [d];
      if (
        !updatedTicketState[e] &&
        updatedTicketState[b] &&
        updatedTicketState[c] &&
        updatedTicketState[d] &&
        updatedTicketState[a]
      )
        return [e];
    }
  }
  return null;
};
