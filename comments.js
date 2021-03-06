import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from "./actions";

const initialState = {
  comments: [],
  users: []
};

export default function comments(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
          , ...state]
      });
    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if(comment.id === action.id){
            return {...comment, text: action.text}
          }
          return comment;
        })
      });
    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if(comment.id === action.id) {
            return {...comment, votes: comment.votes + 1}
          }
          return comment;
        })
      });
    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if(comment.id === action.id) {
            return {...comment, votes: comment.votes - 1}
          }
          return comment;
        })
      });
    default:
      return state;
  }
}
