import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Song: crudResolvers.SongCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Transaction: crudResolvers.TransactionCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Song: relationResolvers.SongRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Transaction: relationResolvers.TransactionRelationsResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Song: {
    song: actionResolvers.FindUniqueSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    songs: actionResolvers.FindManySongResolver,
    createSong: actionResolvers.CreateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    deleteSong: actionResolvers.DeleteSongResolver,
    updateSong: actionResolvers.UpdateSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    upsertSong: actionResolvers.UpsertSongResolver,
    aggregateSong: actionResolvers.AggregateSongResolver,
    groupBySong: actionResolvers.GroupBySongResolver
  },
  Comment: {
    comment: actionResolvers.FindUniqueCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    createComment: actionResolvers.CreateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    deleteComment: actionResolvers.DeleteCommentResolver,
    updateComment: actionResolvers.UpdateCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    upsertComment: actionResolvers.UpsertCommentResolver,
    aggregateComment: actionResolvers.AggregateCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver
  },
  Notification: {
    notification: actionResolvers.FindUniqueNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    createNotification: actionResolvers.CreateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    deleteNotification: actionResolvers.DeleteNotificationResolver,
    updateNotification: actionResolvers.UpdateNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    upsertNotification: actionResolvers.UpsertNotificationResolver,
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver
  },
  Transaction: {
    transaction: actionResolvers.FindUniqueTransactionResolver,
    findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
    transactions: actionResolvers.FindManyTransactionResolver,
    createTransaction: actionResolvers.CreateTransactionResolver,
    createManyTransaction: actionResolvers.CreateManyTransactionResolver,
    deleteTransaction: actionResolvers.DeleteTransactionResolver,
    updateTransaction: actionResolvers.UpdateTransactionResolver,
    deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
    updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
    upsertTransaction: actionResolvers.UpsertTransactionResolver,
    aggregateTransaction: actionResolvers.AggregateTransactionResolver,
    groupByTransaction: actionResolvers.GroupByTransactionResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Song: ["song", "findFirstSong", "songs", "createSong", "createManySong", "deleteSong", "updateSong", "deleteManySong", "updateManySong", "upsertSong", "aggregateSong", "groupBySong"],
  Comment: ["comment", "findFirstComment", "comments", "createComment", "createManyComment", "deleteComment", "updateComment", "deleteManyComment", "updateManyComment", "upsertComment", "aggregateComment", "groupByComment"],
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"],
  Transaction: ["transaction", "findFirstTransaction", "transactions", "createTransaction", "createManyTransaction", "deleteTransaction", "updateTransaction", "deleteManyTransaction", "updateManyTransaction", "upsertTransaction", "aggregateTransaction", "groupByTransaction"]
};
const relationResolversInfo = {
  User: ["songs", "sentComments", "receivedComments", "notifications", "transactions"],
  Song: ["owner", "comments"],
  Comment: ["sender", "receiver", "parent"],
  Notification: ["receiver"],
  Transaction: ["user"]
};
const modelsInfo = {
  User: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  Song: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  Comment: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  Notification: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  Transaction: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "avatarURL", "songs", "sentComments", "receivedComments", "notifications", "transactions", "createdAt", "updatedAt"],
  UserOrderByInput: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "owner", "comments", "createdAt", "updatedAt"],
  SongOrderByInput: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  SongWhereUniqueInput: ["id"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "parentId", "senderId", "receiverId", "active", "approved", "body", "sender", "receiver", "parent", "createdAt", "updatedAt"],
  CommentOrderByInput: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentWhereUniqueInput: ["id"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "receiverId", "body", "read", "type", "url", "receiver", "createdAt", "updatedAt"],
  NotificationOrderByInput: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  NotificationWhereUniqueInput: ["id"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionOrderByInput: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionWhereUniqueInput: ["id"],
  TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  UserCreateInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "notifications", "transactions"],
  UserUpdateInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "notifications", "transactions"],
  UserCreateManyInput: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner", "comments"],
  SongUpdateInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner", "comments"],
  SongCreateManyInput: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt"],
  CommentCreateInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "receiver", "parent"],
  CommentUpdateInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "receiver", "parent"],
  CommentCreateManyInput: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["active", "approved", "body", "createdAt", "updatedAt"],
  NotificationCreateInput: ["body", "read", "type", "url", "createdAt", "updatedAt", "receiver"],
  NotificationUpdateInput: ["body", "read", "type", "url", "createdAt", "updatedAt", "receiver"],
  NotificationCreateManyInput: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  NotificationUpdateManyMutationInput: ["body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionCreateInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt", "user"],
  TransactionUpdateInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt", "user"],
  TransactionCreateManyInput: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionUpdateManyMutationInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SongListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  TransactionListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  SongRelationFilter: ["is", "isNot"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  SongCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutReceiverInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutReceiverInput: ["create", "connectOrCreate", "createMany", "connect"],
  TransactionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  SongUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutSenderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutReceiverInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutReceiverInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TransactionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CommentUpdateManyWithoutParentInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutSentCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutReceivedCommentsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSentCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutReceivedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutTransactionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  SongCreateWithoutOwnerInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "comments"],
  SongCreateOrConnectWithoutOwnerInput: ["where", "create"],
  SongCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutSenderInput: ["active", "approved", "body", "createdAt", "updatedAt", "receiver", "parent"],
  CommentCreateOrConnectWithoutSenderInput: ["where", "create"],
  CommentCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutReceiverInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "parent"],
  CommentCreateOrConnectWithoutReceiverInput: ["where", "create"],
  CommentCreateManyReceiverInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutReceiverInput: ["body", "read", "type", "url", "createdAt", "updatedAt"],
  NotificationCreateOrConnectWithoutReceiverInput: ["where", "create"],
  NotificationCreateManyReceiverInputEnvelope: ["data", "skipDuplicates"],
  TransactionCreateWithoutUserInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionCreateOrConnectWithoutUserInput: ["where", "create"],
  TransactionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SongUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutReceiverInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutReceiverInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutReceiverInput: ["where", "data"],
  NotificationUpsertWithWhereUniqueWithoutReceiverInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutReceiverInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutReceiverInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TransactionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TransactionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  UserCreateWithoutSongsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "sentComments", "receivedComments", "notifications", "transactions"],
  UserCreateOrConnectWithoutSongsInput: ["where", "create"],
  CommentCreateWithoutParentInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "receiver"],
  CommentCreateOrConnectWithoutParentInput: ["where", "create"],
  CommentCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutSongsInput: ["update", "create"],
  UserUpdateWithoutSongsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "sentComments", "receivedComments", "notifications", "transactions"],
  CommentUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  UserCreateWithoutSentCommentsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "receivedComments", "notifications", "transactions"],
  UserCreateOrConnectWithoutSentCommentsInput: ["where", "create"],
  UserCreateWithoutReceivedCommentsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "notifications", "transactions"],
  UserCreateOrConnectWithoutReceivedCommentsInput: ["where", "create"],
  SongCreateWithoutCommentsInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner"],
  SongCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutSentCommentsInput: ["update", "create"],
  UserUpdateWithoutSentCommentsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "receivedComments", "notifications", "transactions"],
  UserUpsertWithoutReceivedCommentsInput: ["update", "create"],
  UserUpdateWithoutReceivedCommentsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "notifications", "transactions"],
  SongUpsertWithoutCommentsInput: ["update", "create"],
  SongUpdateWithoutCommentsInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner"],
  UserCreateWithoutNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "transactions"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "transactions"],
  UserCreateWithoutTransactionsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "notifications"],
  UserCreateOrConnectWithoutTransactionsInput: ["where", "create"],
  UserUpsertWithoutTransactionsInput: ["update", "create"],
  UserUpdateWithoutTransactionsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentComments", "receivedComments", "notifications"],
  SongCreateManyOwnerInput: ["id", "title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt"],
  CommentCreateManySenderInput: ["id", "parentId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentCreateManyReceiverInput: ["id", "parentId", "senderId", "active", "approved", "body", "createdAt", "updatedAt"],
  NotificationCreateManyReceiverInput: ["id", "body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionCreateManyUserInput: ["id", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  SongUpdateWithoutOwnerInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "comments"],
  CommentUpdateWithoutSenderInput: ["active", "approved", "body", "createdAt", "updatedAt", "receiver", "parent"],
  CommentUpdateWithoutReceiverInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "parent"],
  NotificationUpdateWithoutReceiverInput: ["body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionUpdateWithoutUserInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  CommentCreateManyParentInput: ["id", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentUpdateWithoutParentInput: ["active", "approved", "body", "createdAt", "updatedAt", "sender", "receiver"]
};
const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  NotificationGroupBy: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
  TransactionGroupBy: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  SongCountAggregate: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt", "_all"],
  SongAvgAggregate: ["id", "ownerId"],
  SongSumAggregate: ["id", "ownerId"],
  SongMinAggregate: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  SongMaxAggregate: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  CommentCountAggregate: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["id", "parentId", "senderId", "receiverId"],
  CommentSumAggregate: ["id", "parentId", "senderId", "receiverId"],
  CommentMinAggregate: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "parentId", "senderId", "receiverId", "active", "approved", "body", "createdAt", "updatedAt"],
  NotificationCountAggregate: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt", "_all"],
  NotificationAvgAggregate: ["id", "receiverId"],
  NotificationSumAggregate: ["id", "receiverId"],
  NotificationMinAggregate: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  NotificationMaxAggregate: ["id", "receiverId", "body", "read", "type", "url", "createdAt", "updatedAt"],
  TransactionCountAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt", "_all"],
  TransactionAvgAggregate: ["id", "userId", "openingBalance", "transactionAmount"],
  TransactionSumAggregate: ["id", "userId", "openingBalance", "transactionAmount"],
  TransactionMinAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionMaxAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongArgs: ["data"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  DeleteSongArgs: ["where"],
  UpdateSongArgs: ["data", "where"],
  DeleteManySongArgs: ["where"],
  UpdateManySongArgs: ["data", "where"],
  UpsertSongArgs: ["where", "create", "update"],
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCommentArgs: ["data"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  DeleteCommentArgs: ["where"],
  UpdateCommentArgs: ["data", "where"],
  DeleteManyCommentArgs: ["where"],
  UpdateManyCommentArgs: ["data", "where"],
  UpsertCommentArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateNotificationArgs: ["data"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  DeleteNotificationArgs: ["where"],
  UpdateNotificationArgs: ["data", "where"],
  DeleteManyNotificationArgs: ["where"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpsertNotificationArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTransactionArgs: ["where"],
  FindFirstTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTransactionArgs: ["data"],
  CreateManyTransactionArgs: ["data", "skipDuplicates"],
  DeleteTransactionArgs: ["where"],
  UpdateTransactionArgs: ["data", "where"],
  DeleteManyTransactionArgs: ["where"],
  UpdateManyTransactionArgs: ["data", "where"],
  UpsertTransactionArgs: ["where", "create", "update"],
  AggregateTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







