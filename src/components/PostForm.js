import React, {useState} from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { createPost, deletePost } from '../redux/actions';
import { createStore } from '@reduxjs/toolkit';



const PostForm = function({createPost}){


  const [inp, setInp] = useState('');

  function submitAddPost(e){
      e.preventDefault();
      const newPost = {id: Date.now(), title: inp, comp: false};
      createPost(newPost);
      setInp('');
  }

  return(
    <form onSubmit={submitAddPost} className="input-group mb-3">
      <div className="input-group-prepend">
        <button type='submit' className="btn btn-outline-secondary" type="button" id="button-addon1"
        onClick={submitAddPost}>Добавить</button>
      </div>
        <input type="text" className="form-control" aria-describedby="button-addon1" 
        value={inp} onChange = {(e) => setInp(e.target.value)}/>
    </form>
  )
}

// Теперь в пропсах есть "функция" createProps, которую мы достали из store - диспатч, который обрабатывает событие
const mapDispatchToProps = {
  createPost: createPost
}


export default connect(null, mapDispatchToProps)(PostForm)