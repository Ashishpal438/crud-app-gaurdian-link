import { ADD_POST, DELETE_POST, EDIT_POST, FIND_POST, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS } from "./actionTypes";

export const getPostLoading = () => ({
    type : GET_POST_LOADING
})

export const getPostSucces = (data) => ({
  type : GET_POST_SUCCESS,
  payload : data
})

export const getPostError = (err) => ({
    type : GET_POST_ERROR,
    payload : err
})

export const getAllPosts = () =>(dispatch) => {
  dispatch(getPostLoading())
  console.log("loading");
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => {
   dispatch(getPostSucces(data))
 })
 .catch(err => {
   dispatch(getPostError(err))
 })
}


export const deletePost = (id) => ({
  type : DELETE_POST,
  payload : id
})

export const editPost = (id) => ({
  type : EDIT_POST,
  payload : id
})

export const addPost = (data) => ({
 type : ADD_POST,
 payload : data
})

export const findPost = (data) => ({
  type : FIND_POST,
  payload : data
})

