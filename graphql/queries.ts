import { gql } from '@apollo/client'

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!){
    getSubredditListLimit(limit: $limit){
      created_at
      id
      topic
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      id
      title
      body
      created_at
      image
      username
      comments {
        created_at
        id
        text
        username
      }
      votes{
        created_at
        id
        upvote
        username
      }
      subreddit{
        created_at
        topic
        id
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      id
      title
      body
      created_at
      image
      username
      comments {
        created_at
        id
        text
        username
      }
      votes{
        created_at
        id
        upvote
        username
      }
      subreddit{
        created_at
        topic
        id
      }
    }
  }
`

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId (post_id: $post_id) {
      id
      title
      body
      created_at
      image
      username
      comments {
        created_at
        id
        text
        username
      }
      votes{
        created_at
        id
        upvote
        username
      }
      subreddit{
        created_at
        topic
        id
      }
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!){
    getVotesByPostId(post_id: $post_id){
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
