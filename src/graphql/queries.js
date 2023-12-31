/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMbtiElements = /* GraphQL */ `
  query GetMbtiElements($mbti: ID!) {
    getMbtiElements(mbti: $mbti) {
      mind
      type
      __typename
    }
  }
`;
export const getMBTI = /* GraphQL */ `
  query GetMBTI($id: ID!) {
    getMBTI(id: $id) {
      mbti
      mind
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        mbti
        mind
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMBTIS = /* GraphQL */ `
  query SyncMBTIS(
    $filter: ModelMBTIFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMBTIS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        mbti
        mind
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncInputs = /* GraphQL */ `
  query SyncInputs(
    $filter: ModelInputFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
