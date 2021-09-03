import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Approval = {
  __typename?: 'Approval';
  id: Scalars['Int'];
  commentId: Scalars['Int'];
  status: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  parentId: Scalars['Int'];
  senderId: Scalars['Int'];
  receiverId: Scalars['Int'];
  approvalId?: Maybe<Scalars['Int']>;
  active: Scalars['Boolean'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sender: User;
  receiver: User;
  song?: Maybe<Song>;
  approval?: Maybe<Approval>;
};

export type CommentInput = {
  parentId: Scalars['Float'];
  receiverId: Scalars['Float'];
  body: Scalars['String'];
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSong: Song;
  updateSong?: Maybe<Scalars['Float']>;
  upload: Scalars['Boolean'];
  deleteSong: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createComment: Comment;
  updateApproval: Approval;
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


export type MutationUploadArgs = {
  file: Scalars['Upload'];
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


export type MutationUpdateApprovalArgs = {
  id?: Maybe<Scalars['Int']>;
  commentId: Scalars['Int'];
  status: Scalars['String'];
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

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['Int'];
  receiverId: Scalars['Int'];
  body: Scalars['String'];
  read: Scalars['Boolean'];
  type: Scalars['String'];
  url: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  receiver: User;
};

export type NotificationInput = {
  receiverId: Scalars['Float'];
  body: Scalars['String'];
  parentId: Scalars['Float'];
  type: Scalars['String'];
  url: Scalars['String'];
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
  id: Scalars['Int'];
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  mediaType: Scalars['String'];
  genre: Scalars['String'];
  ownerId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  owner: User;
  comment?: Maybe<Array<Comment>>;
};

export type SongInput = {
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  genre: Scalars['String'];
  mediaType: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  openingBalance: Scalars['Int'];
  transactionAmount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  avatarURL: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  balance: Scalars['Float'];
  songs?: Maybe<Array<Song>>;
  notifications?: Maybe<Array<Notification>>;
  receivedComments?: Maybe<Array<Comment>>;
  sentComments?: Maybe<Array<Comment>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, username: string }> };

export type SongSnippetFragment = { __typename?: 'Song', id: number, createdAt: any, updatedAt: any, title: string, mediaUrl: string, genre: string, ownerId: number, owner: { __typename?: 'User', id: number, username: string } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, username: string }> } };

export type CreateCommentMutationVariables = Exact<{
  input: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: number, parentId: number, senderId: number, receiverId: number, body: string } };

export type CreateSongMutationVariables = Exact<{
  input: SongInput;
}>;


export type CreateSongMutation = { __typename?: 'Mutation', createSong: { __typename?: 'Song', id: number, title: string, mediaUrl: string, genre: string, ownerId: number } };

export type CreateTransactionMutationVariables = Exact<{
  id: Scalars['Int'];
  transactionAmount: Scalars['Int'];
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction: { __typename?: 'Transaction', id: number } };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: boolean };

export type DeleteSongMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSongMutation = { __typename?: 'Mutation', deleteSong: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, username: string }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, username: string }> } };

export type UpdateApprovalMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  commentId: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateApprovalMutation = { __typename?: 'Mutation', updateApproval: { __typename?: 'Approval', id: number } };

export type UpdateSongMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  mediaUrl: Scalars['String'];
  genre: Scalars['String'];
}>;


export type UpdateSongMutation = { __typename?: 'Mutation', updateSong?: Maybe<number> };

export type CommentQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentQuery = { __typename?: 'Query', comment?: Maybe<{ __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, sender: { __typename?: 'User', id: number, username: string }, receiver: { __typename?: 'User', id: number, username: string }, song?: Maybe<{ __typename?: 'Song', id: number, title: string }> }> };

export type CommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, sender: { __typename?: 'User', id: number, username: string }, receiver: { __typename?: 'User', id: number, username: string }, song?: Maybe<{ __typename?: 'Song', id: number, title: string }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, username: string, avatarURL: string }> };

export type SongQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SongQuery = { __typename?: 'Query', song?: Maybe<{ __typename?: 'Song', id: number, createdAt: any, updatedAt: any, title: string, mediaUrl: string, mediaType: string, genre: string, ownerId: number, owner: { __typename?: 'User', id: number, username: string }, comment?: Maybe<Array<{ __typename?: 'Comment', id: number, createdAt: any, body: string, senderId: number, receiver: { __typename?: 'User', id: number }, sender: { __typename?: 'User', id: number, username: string, avatarURL: string }, approval?: Maybe<{ __typename?: 'Approval', id: number, status: string }> }>> }> };

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = { __typename?: 'Query', songs: Array<{ __typename?: 'Song', id: number, createdAt: any, updatedAt: any, title: string, mediaUrl: string, mediaType: string, genre: string, ownerId: number, owner: { __typename?: 'User', id: number, username: string } }> };

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', id: number, username: string, songs?: Maybe<Array<{ __typename?: 'Song', id: number, title: string, mediaUrl: string, mediaType: string, genre: string, ownerId: number, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: number, username: string } }>>, receivedComments?: Maybe<Array<{ __typename?: 'Comment', id: number, body: string, sender: { __typename?: 'User', id: number, username: string }, song?: Maybe<{ __typename?: 'Song', id: number, title: string }>, approval?: Maybe<{ __typename?: 'Approval', status: string }> }>>, sentComments?: Maybe<Array<{ __typename?: 'Comment', id: number, body: string, receiver: { __typename?: 'User', id: number, username: string }, song?: Maybe<{ __typename?: 'Song', id: number, title: string }>, approval?: Maybe<{ __typename?: 'Approval', status: string }> }>> }> };

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
  ownerId
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSongMutation, DeleteSongMutationVariables>(DeleteSongDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateApprovalDocument = gql`
    mutation UpdateApproval($id: Int, $commentId: Int!, $status: String!) {
  updateApproval(id: $id, commentId: $commentId, status: $status) {
    id
  }
}
    `;
export type UpdateApprovalMutationFn = Apollo.MutationFunction<UpdateApprovalMutation, UpdateApprovalMutationVariables>;

/**
 * __useUpdateApprovalMutation__
 *
 * To run a mutation, you first call `useUpdateApprovalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApprovalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApprovalMutation, { data, loading, error }] = useUpdateApprovalMutation({
 *   variables: {
 *      id: // value for 'id'
 *      commentId: // value for 'commentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateApprovalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApprovalMutation, UpdateApprovalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApprovalMutation, UpdateApprovalMutationVariables>(UpdateApprovalDocument, options);
      }
export type UpdateApprovalMutationHookResult = ReturnType<typeof useUpdateApprovalMutation>;
export type UpdateApprovalMutationResult = Apollo.MutationResult<UpdateApprovalMutation>;
export type UpdateApprovalMutationOptions = Apollo.BaseMutationOptions<UpdateApprovalMutation, UpdateApprovalMutationVariables>;
export const UpdateSongDocument = gql`
    mutation UpdateSong($id: Int!, $title: String!, $mediaUrl: String!, $genre: String!) {
  updateSong(id: $id, title: $title, mediaUrl: $mediaUrl, genre: $genre)
}
    `;
export type UpdateSongMutationFn = Apollo.MutationFunction<UpdateSongMutation, UpdateSongMutationVariables>;

/**
 * __useUpdateSongMutation__
 *
 * To run a mutation, you first call `useUpdateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSongMutation, { data, loading, error }] = useUpdateSongMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      mediaUrl: // value for 'mediaUrl'
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useUpdateSongMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSongMutation, UpdateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSongMutation, UpdateSongMutationVariables>(UpdateSongDocument, options);
      }
export type UpdateSongMutationHookResult = ReturnType<typeof useUpdateSongMutation>;
export type UpdateSongMutationResult = Apollo.MutationResult<UpdateSongMutation>;
export type UpdateSongMutationOptions = Apollo.BaseMutationOptions<UpdateSongMutation, UpdateSongMutationVariables>;
export const CommentDocument = gql`
    query Comment($id: Int!) {
  comment(id: $id) {
    id
    createdAt
    updatedAt
    body
    sender {
      id
      username
    }
    receiver {
      id
      username
    }
    song {
      id
      title
    }
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
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
    sender {
      id
      username
    }
    receiver {
      id
      username
    }
    song {
      id
      title
    }
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    avatarURL
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SongDocument = gql`
    query Song($id: Int!) {
  song(id: $id) {
    id
    createdAt
    updatedAt
    title
    mediaUrl
    mediaType
    genre
    ownerId
    owner {
      id
      username
    }
    comment {
      id
      createdAt
      body
      senderId
      receiver {
        id
      }
      sender {
        id
        username
        avatarURL
      }
      approval {
        id
        status
      }
    }
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongQuery, SongQueryVariables>(SongDocument, options);
      }
export function useSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongQuery, SongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongQuery, SongQueryVariables>(SongDocument, options);
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
    mediaType
    genre
    ownerId
    owner {
      id
      username
    }
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
      }
export function useSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsQuery, SongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
        }
export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = Apollo.QueryResult<SongsQuery, SongsQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  user(id: $id) {
    id
    username
    songs {
      id
      title
      mediaUrl
      mediaType
      genre
      ownerId
      createdAt
      updatedAt
      owner {
        id
        username
      }
    }
    receivedComments {
      id
      body
      sender {
        id
        username
      }
      song {
        id
        title
      }
      approval {
        status
      }
    }
    sentComments {
      id
      body
      receiver {
        id
        username
      }
      song {
        id
        title
      }
      approval {
        status
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;