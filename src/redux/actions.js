import { CREATE_POST, DELETE_POST, DONE_POST } from "./types";



export function createPost(post){
  return{
    type: CREATE_POST,
    payload: post
  }
}

export function deletePost(post){
  return{
    type: DELETE_POST, 
    payload: post
  }
}

export function donePost(post){
  return{
    type: DONE_POST,
    payload: post
  }
}