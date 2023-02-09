import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { postType } from '../types'

const PostExcerpt = ({post}:{post:postType}) => {
  return (
      <Card  sx={{
          maxWidth:345}}>
          <CardHeader
              avatar={
                  <Avatar>
                      {post.body.charAt(0)}
                  </Avatar>
          }
              title={post.title}
          />
          <CardContent>
              <Typography>
                  {post.body}
              </Typography>
          </CardContent>
    </Card>
  )
}

export default PostExcerpt