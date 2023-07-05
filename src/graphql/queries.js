/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMBTI = /* GraphQL */ `
  query GetMBTI($id: ID!) {
    getMBTI(id: $id) {
      id
      mbti
      type
      mind
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMBTIS = /* GraphQL */ `
  query ListMBTIS(
    $filter: ModelMBTIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMBTIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mbti
        type
        mind
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInput = /* GraphQL */ `
  query GetInput($id: ID!) {
    getInput(id: $id) {
      id
      question
      answer
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInputs = /* GraphQL */ `
  query ListInputs(
    $filter: ModelInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
