import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  songs: Array<Song>;
  song?: Maybe<Song>;
  admin?: Maybe<User>;
  user?: Maybe<User>;
  me?: Maybe<User>;
  comments: Array<Comment>;
  comment?: Maybe<Comment>;
};


export type QuerySongArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryCommentsArgs = {
  id: Scalars['Int'];
};


export type QueryCommentArgs = {
  id: Scalars['Int'];
};

export type Song = {
  __typename?: 'Song';
  id: Scalars['Float'];
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  genre: Scalars['String'];
  ownerId: Scalars['Float'];
  owner: User;
  comments: Comment;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatarURL: Scalars['String'];
  balance: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  songs?: Maybe<Array<Song>>;
  notifications?: Maybe<Array<Notification>>;
  receivedComments?: Maybe<Array<Comment>>;
  sentComments?: Maybe<Array<Comment>>;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['Float'];
  receiverId: Scalars['Float'];
  senderId: Scalars['Float'];
  message: Scalars['String'];
  parentType: Scalars['String'];
  parentId: Scalars['Float'];
  sender: User;
  receiver: User;
  read: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Float'];
  parentId: Scalars['Float'];
  senderId: Scalars['Float'];
  receiverId: Scalars['Float'];
  body: Scalars['String'];
  status: Scalars['String'];
  active: Scalars['Boolean'];
  sender: User;
  receiver: User;
  parent: Song;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSong: Song;
  updateSong?: Maybe<Song>;
  deleteSong: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createComment: Comment;
  reviewComment: Comment;
  deleteComment: Scalars['Boolean'];
  createTransaction: Transaction;
  createNotification: Notification;
};


export type MutationCreateSongArgs = {
  input: SongInput;
};


export type MutationUpdateSongArgs = {
  genre: Scalars['String'];
  mediaUrl: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteSongArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  input: CommentInput;
};


export type MutationReviewCommentArgs = {
  status: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTransactionArgs = {
  transactionAmount: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationCreateNotificationArgs = {
  input: NotificationInput;
};

export type SongInput = {
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  genre: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CommentInput = {
  parentId: Scalars['Float'];
  receiverId: Scalars['Float'];
  senderId: Scalars['Float'];
  body: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['Float'];
  userId: Scalars['Float'];
  openingBalance: Scalars['Float'];
  transactionAmount: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type NotificationInput = {
  receiverId: Scalars['Float'];
  message: Scalars['String'];
  parentId: Scalars['Float'];
  parentType: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type SongSnippetFragment = (
  { __typename?: 'Song' }
  & Pick<Song, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'mediaUrl' | 'genre'>
  & { owner: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateCommentMutationVariables = Exact<{
  input: CommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'parentId' | 'senderId' | 'receiverId' | 'body'>
  ) }
);

export type CreateNotificationMutationVariables = Exact<{
  input: NotificationInput;
}>;


export type CreateNotificationMutation = (
  { __typename?: 'Mutation' }
  & { createNotification: (
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'senderId' | 'receiverId' | 'message' | 'parentId' | 'parentType'>
  ) }
);

export type CreateSongMutationVariables = Exact<{
  input: SongInput;
}>;


export type CreateSongMutation = (
  { __typename?: 'Mutation' }
  & { createSong: (
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'mediaUrl' | 'genre' | 'ownerId'>
  ) }
);

export type CreateTransactionMutationVariables = Exact<{
  id: Scalars['Int'];
  transactionAmount: Scalars['Int'];
}>;


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id'>
  ) }
);

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteComment'>
);

export type DeleteSongMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSongMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteSong'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type ReviewCommentMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type ReviewCommentMutation = (
  { __typename?: 'Mutation' }
  & { reviewComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'status'>
  ) }
);

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  genre: Scalars['String'];
}>;


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateSong?: Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'mediaUrl' | 'genre'>
  )> }
);

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = (
  { __typename?: 'Query' }
  & { admin?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatarURL' | 'createdAt' | 'updatedAt'>
    & { songs?: Maybe<Array<(
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'ownerId' | 'title'>
    )>>, sentComments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'parentId' | 'body' | 'status'>
      & { receiver: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ), parent: (
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title'>
      ) }
    )>>, receivedComments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'parentId' | 'body' | 'status'>
      & { parent: (
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title'>
      ), sender: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ) }
    )>> }
  )> }
);

export type CommentQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentQuery = (
  { __typename?: 'Query' }
  & { comment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'createdAt' | 'updatedAt' | 'body' | 'status'>
    & { sender: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), receiver: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), parent: (
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title'>
    ) }
  )> }
);

export type CommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'createdAt' | 'updatedAt' | 'body' | 'status'>
    & { sender: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), receiver: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), parent: (
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title'>
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type NavBarQueryVariables = Exact<{ [key: string]: never; }>;


export type NavBarQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'balance'>
    & { notifications?: Maybe<Array<(
      { __typename?: 'Notification' }
      & Pick<Notification, 'message'>
      & { sender: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ), receiver: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ) }
    )>> }
  )> }
);

export type SongQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SongQuery = (
  { __typename?: 'Query' }
  & { song?: Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'mediaUrl' | 'genre'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = (
  { __typename?: 'Query' }
  & { songs: Array<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'mediaUrl' | 'genre'>
    & { owner: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const SongSnippetFragmentDoc = gql`
    fragment SongSnippet on Song {
  id
  createdAt
  updatedAt
  title
  mediaUrl
  genre
  owner {
    id
    username
  }
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export type ChangePasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangePasswordMutation, ChangePasswordMutationVariables>, 'mutation'>;

    export const ChangePasswordComponent = (props: ChangePasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> mutation={ChangePasswordDocument} {...props} />
    );
    

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($input: CommentInput!) {
  createComment(input: $input) {
    id
    parentId
    senderId
    receiverId
    body
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;
export type CreateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommentMutation, CreateCommentMutationVariables>, 'mutation'>;

    export const CreateCommentComponent = (props: CreateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommentMutation, CreateCommentMutationVariables> mutation={CreateCommentDocument} {...props} />
    );
    

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateNotificationDocument = gql`
    mutation CreateNotification($input: NotificationInput!) {
  createNotification(input: $input) {
    id
    senderId
    receiverId
    message
    parentId
    parentType
  }
}
    `;
export type CreateNotificationMutationFn = Apollo.MutationFunction<CreateNotificationMutation, CreateNotificationMutationVariables>;
export type CreateNotificationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateNotificationMutation, CreateNotificationMutationVariables>, 'mutation'>;

    export const CreateNotificationComponent = (props: CreateNotificationComponentProps) => (
      <ApolloReactComponents.Mutation<CreateNotificationMutation, CreateNotificationMutationVariables> mutation={CreateNotificationDocument} {...props} />
    );
    

/**
 * __useCreateNotificationMutation__
 *
 * To run a mutation, you first call `useCreateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNotificationMutation, { data, loading, error }] = useCreateNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNotificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateNotificationMutation, CreateNotificationMutationVariables>) {
        return Apollo.useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(CreateNotificationDocument, baseOptions);
      }
export type CreateNotificationMutationHookResult = ReturnType<typeof useCreateNotificationMutation>;
export type CreateNotificationMutationResult = Apollo.MutationResult<CreateNotificationMutation>;
export type CreateNotificationMutationOptions = Apollo.BaseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables>;
export const CreateSongDocument = gql`
    mutation CreateSong($input: SongInput!) {
  createSong(input: $input) {
    id
    title
    mediaUrl
    genre
    ownerId
  }
}
    `;
export type CreateSongMutationFn = Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;
export type CreateSongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSongMutation, CreateSongMutationVariables>, 'mutation'>;

    export const CreateSongComponent = (props: CreateSongComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSongMutation, CreateSongMutationVariables> mutation={CreateSongDocument} {...props} />
    );
    

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSongMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, baseOptions);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($id: Int!, $transactionAmount: Int!) {
  createTransaction(id: $id, transactionAmount: $transactionAmount) {
    id
  }
}
    `;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;
export type CreateTransactionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTransactionMutation, CreateTransactionMutationVariables>, 'mutation'>;

    export const CreateTransactionComponent = (props: CreateTransactionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTransactionMutation, CreateTransactionMutationVariables> mutation={CreateTransactionDocument} {...props} />
    );
    

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      transactionAmount: // value for 'transactionAmount'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, baseOptions);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($id: Int!) {
  deleteComment(id: $id)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export type DeleteCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCommentMutation, DeleteCommentMutationVariables>, 'mutation'>;

    export const DeleteCommentComponent = (props: DeleteCommentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCommentMutation, DeleteCommentMutationVariables> mutation={DeleteCommentDocument} {...props} />
    );
    

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, baseOptions);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeleteSongDocument = gql`
    mutation DeleteSong($id: Int!) {
  deleteSong(id: $id)
}
    `;
export type DeleteSongMutationFn = Apollo.MutationFunction<DeleteSongMutation, DeleteSongMutationVariables>;
export type DeleteSongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSongMutation, DeleteSongMutationVariables>, 'mutation'>;

    export const DeleteSongComponent = (props: DeleteSongComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSongMutation, DeleteSongMutationVariables> mutation={DeleteSongDocument} {...props} />
    );
    

/**
 * __useDeleteSongMutation__
 *
 * To run a mutation, you first call `useDeleteSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSongMutation, { data, loading, error }] = useDeleteSongMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSongMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSongMutation, DeleteSongMutationVariables>) {
        return Apollo.useMutation<DeleteSongMutation, DeleteSongMutationVariables>(DeleteSongDocument, baseOptions);
      }
export type DeleteSongMutationHookResult = ReturnType<typeof useDeleteSongMutation>;
export type DeleteSongMutationResult = Apollo.MutationResult<DeleteSongMutation>;
export type DeleteSongMutationOptions = Apollo.BaseMutationOptions<DeleteSongMutation, DeleteSongMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export type ForgotPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>, 'mutation'>;

    export const ForgotPasswordComponent = (props: ForgotPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...props} />
    );
    

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ReviewCommentDocument = gql`
    mutation ReviewComment($id: Int!, $status: String!) {
  reviewComment(id: $id, status: $status) {
    id
    status
  }
}
    `;
export type ReviewCommentMutationFn = Apollo.MutationFunction<ReviewCommentMutation, ReviewCommentMutationVariables>;
export type ReviewCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ReviewCommentMutation, ReviewCommentMutationVariables>, 'mutation'>;

    export const ReviewCommentComponent = (props: ReviewCommentComponentProps) => (
      <ApolloReactComponents.Mutation<ReviewCommentMutation, ReviewCommentMutationVariables> mutation={ReviewCommentDocument} {...props} />
    );
    

/**
 * __useReviewCommentMutation__
 *
 * To run a mutation, you first call `useReviewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewCommentMutation, { data, loading, error }] = useReviewCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useReviewCommentMutation(baseOptions?: Apollo.MutationHookOptions<ReviewCommentMutation, ReviewCommentMutationVariables>) {
        return Apollo.useMutation<ReviewCommentMutation, ReviewCommentMutationVariables>(ReviewCommentDocument, baseOptions);
      }
export type ReviewCommentMutationHookResult = ReturnType<typeof useReviewCommentMutation>;
export type ReviewCommentMutationResult = Apollo.MutationResult<ReviewCommentMutation>;
export type ReviewCommentMutationOptions = Apollo.BaseMutationOptions<ReviewCommentMutation, ReviewCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($id: Int!, $title: String!, $mediaUrl: String!, $genre: String!) {
  updateSong(id: $id, title: $title, mediaUrl: $mediaUrl, genre: $genre) {
    id
    title
    mediaUrl
    genre
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;
export type UpdateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCommentMutation, UpdateCommentMutationVariables>, 'mutation'>;

    export const UpdateCommentComponent = (props: UpdateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCommentMutation, UpdateCommentMutationVariables> mutation={UpdateCommentDocument} {...props} />
    );
    

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      mediaUrl: // value for 'mediaUrl'
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, baseOptions);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const AdminDocument = gql`
    query Admin {
  admin {
    id
    username
    email
    avatarURL
    createdAt
    updatedAt
    songs {
      id
      ownerId
      title
    }
    sentComments {
      id
      parentId
      receiver {
        id
        username
      }
      parent {
        id
        title
      }
      body
      status
    }
    receivedComments {
      id
      parentId
      parent {
        id
        title
      }
      sender {
        id
        username
      }
      body
      status
    }
  }
}
    `;
export type AdminComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminQuery, AdminQueryVariables>, 'query'>;

    export const AdminComponent = (props: AdminComponentProps) => (
      <ApolloReactComponents.Query<AdminQuery, AdminQueryVariables> query={AdminDocument} {...props} />
    );
    

/**
 * __useAdminQuery__
 *
 * To run a query within a React component, call `useAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminQuery(baseOptions?: Apollo.QueryHookOptions<AdminQuery, AdminQueryVariables>) {
        return Apollo.useQuery<AdminQuery, AdminQueryVariables>(AdminDocument, baseOptions);
      }
export function useAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminQuery, AdminQueryVariables>) {
          return Apollo.useLazyQuery<AdminQuery, AdminQueryVariables>(AdminDocument, baseOptions);
        }
export type AdminQueryHookResult = ReturnType<typeof useAdminQuery>;
export type AdminLazyQueryHookResult = ReturnType<typeof useAdminLazyQuery>;
export type AdminQueryResult = Apollo.QueryResult<AdminQuery, AdminQueryVariables>;
export const CommentDocument = gql`
    query Comment($id: Int!) {
  comment(id: $id) {
    id
    createdAt
    updatedAt
    body
    status
    sender {
      id
      username
    }
    receiver {
      id
      username
    }
    parent {
      id
      title
    }
  }
}
    `;
export type CommentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommentQuery, CommentQueryVariables>, 'query'> & ({ variables: CommentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommentComponent = (props: CommentComponentProps) => (
      <ApolloReactComponents.Query<CommentQuery, CommentQueryVariables> query={CommentDocument} {...props} />
    );
    

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentQuery(baseOptions: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, baseOptions);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, baseOptions);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export const CommentsDocument = gql`
    query Comments($id: Int!) {
  comments(id: $id) {
    id
    createdAt
    updatedAt
    body
    status
    sender {
      id
      username
    }
    receiver {
      id
      username
    }
    parent {
      id
      title
    }
  }
}
    `;
export type CommentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommentsQuery, CommentsQueryVariables>, 'query'> & ({ variables: CommentsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommentsComponent = (props: CommentsComponentProps) => (
      <ApolloReactComponents.Query<CommentsQuery, CommentsQueryVariables> query={CommentsDocument} {...props} />
    );
    

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NavBarDocument = gql`
    query NavBar {
  me {
    id
    username
    balance
    notifications {
      sender {
        id
        username
      }
      receiver {
        id
        username
      }
      message
    }
  }
}
    `;
export type NavBarComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NavBarQuery, NavBarQueryVariables>, 'query'>;

    export const NavBarComponent = (props: NavBarComponentProps) => (
      <ApolloReactComponents.Query<NavBarQuery, NavBarQueryVariables> query={NavBarDocument} {...props} />
    );
    

/**
 * __useNavBarQuery__
 *
 * To run a query within a React component, call `useNavBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavBarQuery(baseOptions?: Apollo.QueryHookOptions<NavBarQuery, NavBarQueryVariables>) {
        return Apollo.useQuery<NavBarQuery, NavBarQueryVariables>(NavBarDocument, baseOptions);
      }
export function useNavBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavBarQuery, NavBarQueryVariables>) {
          return Apollo.useLazyQuery<NavBarQuery, NavBarQueryVariables>(NavBarDocument, baseOptions);
        }
export type NavBarQueryHookResult = ReturnType<typeof useNavBarQuery>;
export type NavBarLazyQueryHookResult = ReturnType<typeof useNavBarLazyQuery>;
export type NavBarQueryResult = Apollo.QueryResult<NavBarQuery, NavBarQueryVariables>;
export const SongDocument = gql`
    query Song($id: Int!) {
  song(id: $id) {
    id
    createdAt
    updatedAt
    title
    mediaUrl
    genre
    owner {
      id
      username
    }
  }
}
    `;
export type SongComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SongQuery, SongQueryVariables>, 'query'> & ({ variables: SongQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SongComponent = (props: SongComponentProps) => (
      <ApolloReactComponents.Query<SongQuery, SongQueryVariables> query={SongDocument} {...props} />
    );
    

/**
 * __useSongQuery__
 *
 * To run a query within a React component, call `useSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSongQuery(baseOptions: Apollo.QueryHookOptions<SongQuery, SongQueryVariables>) {
        return Apollo.useQuery<SongQuery, SongQueryVariables>(SongDocument, baseOptions);
      }
export function useSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongQuery, SongQueryVariables>) {
          return Apollo.useLazyQuery<SongQuery, SongQueryVariables>(SongDocument, baseOptions);
        }
export type SongQueryHookResult = ReturnType<typeof useSongQuery>;
export type SongLazyQueryHookResult = ReturnType<typeof useSongLazyQuery>;
export type SongQueryResult = Apollo.QueryResult<SongQuery, SongQueryVariables>;
export const SongsDocument = gql`
    query Songs {
  songs {
    id
    createdAt
    updatedAt
    title
    mediaUrl
    genre
    owner {
      id
      username
    }
  }
}
    `;
export type SongsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SongsQuery, SongsQueryVariables>, 'query'>;

    export const SongsComponent = (props: SongsComponentProps) => (
      <ApolloReactComponents.Query<SongsQuery, SongsQueryVariables> query={SongsDocument} {...props} />
    );
    

/**
 * __useSongsQuery__
 *
 * To run a query within a React component, call `useSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSongsQuery(baseOptions?: Apollo.QueryHookOptions<SongsQuery, SongsQueryVariables>) {
        return Apollo.useQuery<SongsQuery, SongsQueryVariables>(SongsDocument, baseOptions);
      }
export function useSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsQuery, SongsQueryVariables>) {
          return Apollo.useLazyQuery<SongsQuery, SongsQueryVariables>(SongsDocument, baseOptions);
        }
export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = Apollo.QueryResult<SongsQuery, SongsQueryVariables>;