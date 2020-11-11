import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  songs?: Maybe<Array<Song>>;
  receivedComments?: Maybe<Array<Comment>>;
  sentComments?: Maybe<Array<Comment>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Float'];
  parentId: Scalars['Float'];
  senderId: Scalars['Float'];
  receiverId: Scalars['Float'];
  body: Scalars['String'];
  read: Scalars['Boolean'];
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
  deleteComment: Scalars['Boolean'];
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


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
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

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = (
  { __typename?: 'Query' }
  & { admin?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'createdAt' | 'updatedAt'>
    & { songs?: Maybe<Array<(
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title'>
    )>>, sentComments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'parentId' | 'body'>
      & { receiver: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ), parent: (
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title'>
      ) }
    )>>, receivedComments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'parentId' | 'body'>
      & { parent: (
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title'>
      ) }
    )>> }
  )> }
);

export type CommentsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'createdAt' | 'updatedAt' | 'body'>
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
export const AdminDocument = gql`
    query Admin {
  admin {
    id
    username
    email
    createdAt
    updatedAt
    songs {
      id
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
    }
    receivedComments {
      id
      parentId
      parent {
        id
        title
      }
      body
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
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
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
export function useSongQuery(baseOptions?: Apollo.QueryHookOptions<SongQuery, SongQueryVariables>) {
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