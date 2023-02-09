import React from 'react'
import { useAppSelector } from '../app/hooks'
import PostExcerpt from './PostExcerpt';
import { selectAllPosts } from './postsSlice'

const Posts = () => {
    const posts = useAppSelector(selectAllPosts);
  return (
      <div>{posts.map(post => <PostExcerpt post={post}/>)}</div>
  )
}

export default Posts