import { CharacterViewModel } from "../character.vm";

export interface CharacterReducerModel {
  character: CharacterViewModel;
}

interface Action {
  type: string;
  payload: any;
}

export const characterActions = {
  ADD_SENTENCE: "ADD_SENTENCE",
  CHANGE_SENTENCE: "CHANGE_SENTENCE"
}

export const CharacterReducer = (state: CharacterViewModel, action: Action): CharacterViewModel => {
  switch (action.type) {
    case characterActions.ADD_SENTENCE: {
      return {
        ...state,
        bestSentence: action.payload
      }
    }
    case characterActions.CHANGE_SENTENCE: {

    }

  }
}
