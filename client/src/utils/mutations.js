import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: String
    $username: String
    $email: String
    $password: String
  ) {
    updateUser(
      _id: $_id
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser {
    deleteUser {
      _id
      username
      email
    }
  }
`;
