import {
  DELETE_POST,
  EDIT_POST,
  FIND_POST,
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  posts: [],
  screenPosts : [],
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: payload,
        screenPosts : payload,
        loading: false,
      };

    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case DELETE_POST:
      return {
        ...state,
        screenPosts: state.posts.filter((item) => item.id !== payload),
      };

    case EDIT_POST:
      return {
        ...state,
        screenPosts: state.posts.map((item) => {
          if (item.id === payload.id) {
            item.title = payload.text 
          }
          return item;
        }),
      };

      case FIND_POST : 
        return {
          ...state,
          screenPosts : state.posts.filter((item) => item.title.toLowerCase().includes(payload.toLowerCase()))
        }

    default:
      return state;
  }
};
