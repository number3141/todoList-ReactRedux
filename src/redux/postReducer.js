import { CREATE_POST, DELETE_POST, DONE_POST } from "./types"

const initalState = {
  post: [
    {id: Date.now() + 1, title: 'Лучше ни с кем не делиться ничем.', comp: true},
    {id: Date.now() + 2, title: 'В книгах учили - чем больше друзей,', comp: false},
    {id: Date.now() + 3, title: 'Тем больше ты вывезешь в жизни проблем,', comp: false},
    {id: Date.now() + 4, title: 'Но лучше ни с кем не делиться ничем.', comp: true}
  ]
}

export const postReducer = (state = initalState, action) => {
  switch(action.type){
    case CREATE_POST: 
      return {
        ...state, post: state.post.concat([action.payload])
      }


    case DELETE_POST:
      let pro;
        state.post.map((element) => {
          if(element.id === action.payload){
            return pro = element
          }
        }
      )
      let deleteArr = state.post.filter(item => item !== pro);
      console.log(deleteArr);

      // const aftArr = state.post.slice(0, delItem);
      // const beforeArr = state.post.slice(delItem + 1);
        return{
            ...state, post: deleteArr
          };

      
    case DONE_POST:
          let newArr = state.post.map((element) => {
            if(element.id == action.payload){
              element.comp = !element.comp;
            }
            return element
          })
          return {
            ...state, post:newArr
          }
    default: 
      return state
  }
}
