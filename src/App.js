import React from 'react'
import PostForm from './components/PostForm'
import AsyncList from './components/SyncList'
import SyncList from './components/SyncList'



export default function App(){
  return(
    <div className='container'>
      <div className='row mb-5 mt-5'>
        <div className='col-12'>
          <h2>Добавить пост</h2>
          <PostForm />
        </div>
      </div>
        <div className='row'>
          <div className='col-6'>
            <h5> Синхронные посты </h5>
            <SyncList />
          </div>
          <div className='col-6'>
            <h5> Асинхронные посты </h5>
            {/* <AsyncList /> */}
          </div>
        </div>
    </div>
  )
}