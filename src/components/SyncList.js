import React from 'react'
import { connect } from 'react-redux';
import Post from './Post';

const AsyncList = function Async({syncPost}){

  
  if(!syncPost.length) {
    return (
      <p>Постов нет</p>
    )
  }
  
  return(
    <ul className='list-group'>
      {
        syncPost.map((item) => {
          return (
            <Post title = {item.title} id = {item.id} comp = {item.comp} key={item.id}/>
          )
        })
      }
    </ul>
  )
}

// Прокидываем объект state.posts.post из хранилища и помещаем в объект syncPost

const mapStateToProps = state => {
  return {
    syncPost: state.posts.post
  }
}

export default connect(mapStateToProps, null)(AsyncList);