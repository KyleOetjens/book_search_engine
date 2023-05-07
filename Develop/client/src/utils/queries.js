import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query user {
    User {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
