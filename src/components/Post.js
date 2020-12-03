import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePost, donePost } from '../redux/actions';

const Post = function PostItem({title, id, comp, deletePost, donePost}){


  useEffect(() => {
    const doneItm = document.getElementById(id);
    if(comp){
      doneItm.classList.toggle('green');
    }
    else{
      doneItm.classList.remove('green')
    }
  });


  // Попытка реализовать свап вправо при удалении через промисы

  function swapEl(id){
   
    let delItemArr = Array.from(document.querySelectorAll('.list-group-item'));
    let delItem;

    const prot = new Promise((resolve, reject) => {
      delItemArr.map((element) => {
        if(element.id == id){
          console.log(`Клик по элементу ${element.id}`)
          return delItem = element;
        }
      });
      console.log(delItem);
      resolve(delItem);
    })

    prot.then(() => {
      return new Promise((resolve, reject) => {
          console.log('Добавил')
          delItem.classList.add('black');
          resolve();
      })
    }).then(() => {
        setTimeout(() => {
          console.log('Удалил')
          deletePost(id);
        }, 300)
    })
  }


  return(
  <li id = {id} className='list-group-item'>
    <span>{title}</span>
    <input className='done-btn' type='checkbox' checked={comp} onClick={()=>donePost(id)}></input>
    <button className='close-btn ml-5' onClick={() => swapEl(id)}>&times;</button>
  </li>
  )
}


const mapDispatchToProps = {
  deletePost: deletePost,
  donePost: donePost
}


export default connect(null, mapDispatchToProps)(Post)