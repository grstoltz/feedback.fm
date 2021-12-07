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
  Notification: crudResolvers.NotificationCrudResolver,
  Transaction: crudResolvers.TransactionCrudResolver,
  Approval: crudResolvers.ApprovalCrudResolver,
  Conversation: crudResolvers.ConversationCrudResolver,
  UserConversation: crudResolvers.UserConversationCrudResolver,
  Message: crudResolvers.MessageCrudResolver,
  Delivery: crudResolvers.DeliveryCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Song: relationResolvers.SongRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Transaction: relationResolvers.TransactionRelationsResolver,
  Approval: relationResolvers.ApprovalRelationsResolver,
  Conversation: relationResolvers.ConversationRelationsResolver,
  UserConversation: relationResolvers.UserConversationRelationsResolver,
  Message: relationResolvers.MessageRelationsResolver,
  Delivery: relationResolvers.DeliveryRelationsResolver
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
  },
  Approval: {
    approval: actionResolvers.FindUniqueApprovalResolver,
    findFirstApproval: actionResolvers.FindFirstApprovalResolver,
    approvals: actionResolvers.FindManyApprovalResolver,
    createApproval: actionResolvers.CreateApprovalResolver,
    createManyApproval: actionResolvers.CreateManyApprovalResolver,
    deleteApproval: actionResolvers.DeleteApprovalResolver,
    updateApproval: actionResolvers.UpdateApprovalResolver,
    deleteManyApproval: actionResolvers.DeleteManyApprovalResolver,
    updateManyApproval: actionResolvers.UpdateManyApprovalResolver,
    upsertApproval: actionResolvers.UpsertApprovalResolver,
    aggregateApproval: actionResolvers.AggregateApprovalResolver,
    groupByApproval: actionResolvers.GroupByApprovalResolver
  },
  Conversation: {
    conversation: actionResolvers.FindUniqueConversationResolver,
    findFirstConversation: actionResolvers.FindFirstConversationResolver,
    conversations: actionResolvers.FindManyConversationResolver,
    createConversation: actionResolvers.CreateConversationResolver,
    createManyConversation: actionResolvers.CreateManyConversationResolver,
    deleteConversation: actionResolvers.DeleteConversationResolver,
    updateConversation: actionResolvers.UpdateConversationResolver,
    deleteManyConversation: actionResolvers.DeleteManyConversationResolver,
    updateManyConversation: actionResolvers.UpdateManyConversationResolver,
    upsertConversation: actionResolvers.UpsertConversationResolver,
    aggregateConversation: actionResolvers.AggregateConversationResolver,
    groupByConversation: actionResolvers.GroupByConversationResolver
  },
  UserConversation: {
    userConversation: actionResolvers.FindUniqueUserConversationResolver,
    findFirstUserConversation: actionResolvers.FindFirstUserConversationResolver,
    userConversations: actionResolvers.FindManyUserConversationResolver,
    createUserConversation: actionResolvers.CreateUserConversationResolver,
    createManyUserConversation: actionResolvers.CreateManyUserConversationResolver,
    deleteUserConversation: actionResolvers.DeleteUserConversationResolver,
    updateUserConversation: actionResolvers.UpdateUserConversationResolver,
    deleteManyUserConversation: actionResolvers.DeleteManyUserConversationResolver,
    updateManyUserConversation: actionResolvers.UpdateManyUserConversationResolver,
    upsertUserConversation: actionResolvers.UpsertUserConversationResolver,
    aggregateUserConversation: actionResolvers.AggregateUserConversationResolver,
    groupByUserConversation: actionResolvers.GroupByUserConversationResolver
  },
  Message: {
    message: actionResolvers.FindUniqueMessageResolver,
    findFirstMessage: actionResolvers.FindFirstMessageResolver,
    messages: actionResolvers.FindManyMessageResolver,
    createMessage: actionResolvers.CreateMessageResolver,
    createManyMessage: actionResolvers.CreateManyMessageResolver,
    deleteMessage: actionResolvers.DeleteMessageResolver,
    updateMessage: actionResolvers.UpdateMessageResolver,
    deleteManyMessage: actionResolvers.DeleteManyMessageResolver,
    updateManyMessage: actionResolvers.UpdateManyMessageResolver,
    upsertMessage: actionResolvers.UpsertMessageResolver,
    aggregateMessage: actionResolvers.AggregateMessageResolver,
    groupByMessage: actionResolvers.GroupByMessageResolver
  },
  Delivery: {
    delivery: actionResolvers.FindUniqueDeliveryResolver,
    findFirstDelivery: actionResolvers.FindFirstDeliveryResolver,
    deliveries: actionResolvers.FindManyDeliveryResolver,
    createDelivery: actionResolvers.CreateDeliveryResolver,
    createManyDelivery: actionResolvers.CreateManyDeliveryResolver,
    deleteDelivery: actionResolvers.DeleteDeliveryResolver,
    updateDelivery: actionResolvers.UpdateDeliveryResolver,
    deleteManyDelivery: actionResolvers.DeleteManyDeliveryResolver,
    updateManyDelivery: actionResolvers.UpdateManyDeliveryResolver,
    upsertDelivery: actionResolvers.UpsertDeliveryResolver,
    aggregateDelivery: actionResolvers.AggregateDeliveryResolver,
    groupByDelivery: actionResolvers.GroupByDeliveryResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Song: ["song", "findFirstSong", "songs", "createSong", "createManySong", "deleteSong", "updateSong", "deleteManySong", "updateManySong", "upsertSong", "aggregateSong", "groupBySong"],
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"],
  Transaction: ["transaction", "findFirstTransaction", "transactions", "createTransaction", "createManyTransaction", "deleteTransaction", "updateTransaction", "deleteManyTransaction", "updateManyTransaction", "upsertTransaction", "aggregateTransaction", "groupByTransaction"],
  Approval: ["approval", "findFirstApproval", "approvals", "createApproval", "createManyApproval", "deleteApproval", "updateApproval", "deleteManyApproval", "updateManyApproval", "upsertApproval", "aggregateApproval", "groupByApproval"],
  Conversation: ["conversation", "findFirstConversation", "conversations", "createConversation", "createManyConversation", "deleteConversation", "updateConversation", "deleteManyConversation", "updateManyConversation", "upsertConversation", "aggregateConversation", "groupByConversation"],
  UserConversation: ["userConversation", "findFirstUserConversation", "userConversations", "createUserConversation", "createManyUserConversation", "deleteUserConversation", "updateUserConversation", "deleteManyUserConversation", "updateManyUserConversation", "upsertUserConversation", "aggregateUserConversation", "groupByUserConversation"],
  Message: ["message", "findFirstMessage", "messages", "createMessage", "createManyMessage", "deleteMessage", "updateMessage", "deleteManyMessage", "updateManyMessage", "upsertMessage", "aggregateMessage", "groupByMessage"],
  Delivery: ["delivery", "findFirstDelivery", "deliveries", "createDelivery", "createManyDelivery", "deleteDelivery", "updateDelivery", "deleteManyDelivery", "updateManyDelivery", "upsertDelivery", "aggregateDelivery", "groupByDelivery"]
};
const relationResolversInfo = {
  User: ["songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  Song: ["owner", "Messages"],
  Notification: ["receiver", "sender"],
  Transaction: ["user"],
  Approval: ["Message"],
  Conversation: ["participants", "messages"],
  UserConversation: ["user", "conversation"],
  Message: ["sender", "conversation", "delivery", "approval", "song"],
  Delivery: ["message", "user"]
};
const modelsInfo = {
  User: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  Song: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  Notification: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  Transaction: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  Approval: ["id", "commentId", "status"],
  Conversation: ["id", "updatedAt", "createdAt"],
  UserConversation: ["userId", "conversationId"],
  Message: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  Delivery: ["id", "messageId", "userId", "type", "date"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "avatarURL", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries", "createdAt", "updatedAt"],
  UserOrderByInput: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "owner", "Messages", "createdAt", "updatedAt"],
  SongOrderByInput: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  SongWhereUniqueInput: ["id"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "receiverId", "receiver", "senderId", "sender", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationOrderByInput: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationWhereUniqueInput: ["id"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  TransactionWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionOrderByInput: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionWhereUniqueInput: ["id"],
  TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  ApprovalWhereInput: ["AND", "OR", "NOT", "id", "commentId", "status", "Message"],
  ApprovalOrderByInput: ["id", "commentId", "status"],
  ApprovalWhereUniqueInput: ["id", "commentId"],
  ApprovalScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "commentId", "status"],
  ConversationWhereInput: ["AND", "OR", "NOT", "id", "participants", "messages", "updatedAt", "createdAt"],
  ConversationOrderByInput: ["id", "updatedAt", "createdAt"],
  ConversationWhereUniqueInput: ["id"],
  ConversationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedAt", "createdAt"],
  UserConversationWhereInput: ["AND", "OR", "NOT", "userId", "conversationId", "user", "conversation"],
  UserConversationOrderByInput: ["userId", "conversationId"],
  UserConversationWhereUniqueInput: ["userId_conversationId"],
  UserConversationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "conversationId"],
  MessageWhereInput: ["AND", "OR", "NOT", "id", "sender", "senderId", "conversation", "conversationId", "delivery", "approval", "approvalId", "song", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  MessageOrderByInput: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  MessageWhereUniqueInput: ["id"],
  MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  DeliveryWhereInput: ["AND", "OR", "NOT", "id", "message", "messageId", "user", "userId", "type", "date"],
  DeliveryOrderByInput: ["id", "messageId", "userId", "type", "date"],
  DeliveryWhereUniqueInput: ["id", "messageId_userId_type"],
  DeliveryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "messageId", "userId", "type", "date"],
  UserCreateInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserUpdateInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserCreateManyInput: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner", "Messages"],
  SongUpdateInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner", "Messages"],
  SongCreateManyInput: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt"],
  NotificationCreateInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "receiver", "sender"],
  NotificationUpdateInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "receiver", "sender"],
  NotificationCreateManyInput: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationUpdateManyMutationInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  TransactionCreateInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt", "user"],
  TransactionUpdateInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt", "user"],
  TransactionCreateManyInput: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionUpdateManyMutationInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  ApprovalCreateInput: ["commentId", "status", "Message"],
  ApprovalUpdateInput: ["commentId", "status", "Message"],
  ApprovalCreateManyInput: ["id", "commentId", "status"],
  ApprovalUpdateManyMutationInput: ["commentId", "status"],
  ConversationCreateInput: ["updatedAt", "createdAt", "participants", "messages"],
  ConversationUpdateInput: ["updatedAt", "createdAt", "participants", "messages"],
  ConversationCreateManyInput: ["id", "updatedAt", "createdAt"],
  ConversationUpdateManyMutationInput: ["updatedAt", "createdAt"],
  UserConversationCreateInput: ["user", "conversation"],
  UserConversationUpdateInput: ["user", "conversation"],
  UserConversationCreateManyInput: ["userId", "conversationId"],
  UserConversationUpdateManyMutationInput: [],
  MessageCreateInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "approval", "song"],
  MessageUpdateInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "approval", "song"],
  MessageCreateManyInput: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  MessageUpdateManyMutationInput: ["text", "sentAt", "type", "updatedAt", "createdAt"],
  DeliveryCreateInput: ["type", "date", "message", "user"],
  DeliveryUpdateInput: ["type", "date", "message", "user"],
  DeliveryCreateManyInput: ["id", "messageId", "userId", "type", "date"],
  DeliveryUpdateManyMutationInput: ["type", "date"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SongListRelationFilter: ["every", "some", "none"],
  MessageListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  TransactionListRelationFilter: ["every", "some", "none"],
  UserConversationListRelationFilter: ["every", "some", "none"],
  DeliveryListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  EnumNotificationTypeFilter: ["equals", "in", "notIn", "not"],
  EnumNotificationUrlTypeFilter: ["equals", "in", "notIn", "not"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumNotificationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumNotificationUrlTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumApprovalTypeFilter: ["equals", "in", "notIn", "not"],
  MessageRelationFilter: ["is", "isNot"],
  EnumApprovalTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ConversationRelationFilter: ["is", "isNot"],
  UserConversationUserIdConversationIdCompoundUniqueInput: ["userId", "conversationId"],
  DeliveryRelationFilter: ["is", "isNot"],
  ApprovalRelationFilter: ["is", "isNot"],
  SongRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumMessageTypeFilter: ["equals", "in", "notIn", "not"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumMessageTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumDeliveryTypeFilter: ["equals", "in", "notIn", "not"],
  DeliveryMessageIdUserIdTypeCompoundUniqueInput: ["messageId", "userId", "type"],
  EnumDeliveryTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SongCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  MessageCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutReceiverInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  TransactionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserConversationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DeliveryCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  SongUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MessageUpdateManyWithoutSenderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutReceiverInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutSenderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TransactionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserConversationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DeliveryUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  MessageCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MessageUpdateManyWithoutSongInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutReceivedNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutSentNotificationsInput: ["create", "connectOrCreate", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumNotificationTypeFieldUpdateOperationsInput: ["set"],
  EnumNotificationUrlTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutReceivedNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutSentNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutTransactionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MessageCreateNestedOneWithoutApprovalInput: ["create", "connectOrCreate", "connect"],
  EnumApprovalTypeFieldUpdateOperationsInput: ["set"],
  MessageUpdateOneWithoutApprovalInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserConversationCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
  MessageCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserConversationUpdateManyWithoutConversationInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MessageUpdateManyWithoutConversationInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutConversationsInput: ["create", "connectOrCreate", "connect"],
  ConversationCreateNestedOneWithoutParticipantsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutConversationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ConversationUpdateOneRequiredWithoutParticipantsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSentMessagesInput: ["create", "connectOrCreate", "connect"],
  ConversationCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
  DeliveryCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
  ApprovalCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumMessageTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSentMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ConversationUpdateOneRequiredWithoutMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DeliveryUpdateOneWithoutMessageInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ApprovalUpdateOneWithoutMessageInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  SongUpdateOneWithoutMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  MessageCreateNestedOneWithoutDeliveryInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutDeliveriesInput: ["create", "connectOrCreate", "connect"],
  EnumDeliveryTypeFieldUpdateOperationsInput: ["set"],
  MessageUpdateOneRequiredWithoutDeliveryInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutDeliveriesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumNotificationTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumNotificationUrlTypeFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumNotificationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumNotificationUrlTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumApprovalTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumApprovalTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumMessageTypeFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumMessageTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumDeliveryTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDeliveryTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  SongCreateWithoutOwnerInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "Messages"],
  SongCreateOrConnectWithoutOwnerInput: ["where", "create"],
  SongCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  MessageCreateWithoutSenderInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "conversation", "delivery", "approval", "song"],
  MessageCreateOrConnectWithoutSenderInput: ["where", "create"],
  MessageCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutReceiverInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "sender"],
  NotificationCreateOrConnectWithoutReceiverInput: ["where", "create"],
  NotificationCreateManyReceiverInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutSenderInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "receiver"],
  NotificationCreateOrConnectWithoutSenderInput: ["where", "create"],
  NotificationCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  TransactionCreateWithoutUserInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionCreateOrConnectWithoutUserInput: ["where", "create"],
  TransactionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserConversationCreateWithoutUserInput: ["conversation"],
  UserConversationCreateOrConnectWithoutUserInput: ["where", "create"],
  UserConversationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  DeliveryCreateWithoutUserInput: ["type", "date", "message"],
  DeliveryCreateOrConnectWithoutUserInput: ["where", "create"],
  DeliveryCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SongUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt"],
  MessageUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  NotificationUpsertWithWhereUniqueWithoutReceiverInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutReceiverInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutReceiverInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  TransactionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TransactionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TransactionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  UserConversationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserConversationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserConversationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserConversationScalarWhereInput: ["AND", "OR", "NOT", "userId", "conversationId"],
  DeliveryUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  DeliveryUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  DeliveryUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  DeliveryScalarWhereInput: ["AND", "OR", "NOT", "id", "messageId", "userId", "type", "date"],
  UserCreateWithoutSongsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserCreateOrConnectWithoutSongsInput: ["where", "create"],
  MessageCreateWithoutSongInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "approval"],
  MessageCreateOrConnectWithoutSongInput: ["where", "create"],
  MessageCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutSongsInput: ["update", "create"],
  UserUpdateWithoutSongsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  MessageUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  UserCreateWithoutReceivedNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserCreateOrConnectWithoutReceivedNotificationsInput: ["where", "create"],
  UserCreateWithoutSentNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "transactions", "conversations", "deliveries"],
  UserCreateOrConnectWithoutSentNotificationsInput: ["where", "create"],
  UserUpsertWithoutReceivedNotificationsInput: ["update", "create"],
  UserUpdateWithoutReceivedNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserUpsertWithoutSentNotificationsInput: ["update", "create"],
  UserUpdateWithoutSentNotificationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "transactions", "conversations", "deliveries"],
  UserCreateWithoutTransactionsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "conversations", "deliveries"],
  UserCreateOrConnectWithoutTransactionsInput: ["where", "create"],
  UserUpsertWithoutTransactionsInput: ["update", "create"],
  UserUpdateWithoutTransactionsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "conversations", "deliveries"],
  MessageCreateWithoutApprovalInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "song"],
  MessageCreateOrConnectWithoutApprovalInput: ["where", "create"],
  MessageUpsertWithoutApprovalInput: ["update", "create"],
  MessageUpdateWithoutApprovalInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "song"],
  UserConversationCreateWithoutConversationInput: ["user"],
  UserConversationCreateOrConnectWithoutConversationInput: ["where", "create"],
  UserConversationCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
  MessageCreateWithoutConversationInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "delivery", "approval", "song"],
  MessageCreateOrConnectWithoutConversationInput: ["where", "create"],
  MessageCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
  UserConversationUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
  UserConversationUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
  UserConversationUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
  MessageUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
  UserCreateWithoutConversationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "deliveries"],
  UserCreateOrConnectWithoutConversationsInput: ["where", "create"],
  ConversationCreateWithoutParticipantsInput: ["updatedAt", "createdAt", "messages"],
  ConversationCreateOrConnectWithoutParticipantsInput: ["where", "create"],
  UserUpsertWithoutConversationsInput: ["update", "create"],
  UserUpdateWithoutConversationsInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "deliveries"],
  ConversationUpsertWithoutParticipantsInput: ["update", "create"],
  ConversationUpdateWithoutParticipantsInput: ["updatedAt", "createdAt", "messages"],
  UserCreateWithoutSentMessagesInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  UserCreateOrConnectWithoutSentMessagesInput: ["where", "create"],
  ConversationCreateWithoutMessagesInput: ["updatedAt", "createdAt", "participants"],
  ConversationCreateOrConnectWithoutMessagesInput: ["where", "create"],
  DeliveryCreateWithoutMessageInput: ["type", "date", "user"],
  DeliveryCreateOrConnectWithoutMessageInput: ["where", "create"],
  ApprovalCreateWithoutMessageInput: ["commentId", "status"],
  ApprovalCreateOrConnectWithoutMessageInput: ["where", "create"],
  SongCreateWithoutMessagesInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner"],
  SongCreateOrConnectWithoutMessagesInput: ["where", "create"],
  UserUpsertWithoutSentMessagesInput: ["update", "create"],
  UserUpdateWithoutSentMessagesInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "receivedNotifications", "sentNotifications", "transactions", "conversations", "deliveries"],
  ConversationUpsertWithoutMessagesInput: ["update", "create"],
  ConversationUpdateWithoutMessagesInput: ["updatedAt", "createdAt", "participants"],
  DeliveryUpsertWithoutMessageInput: ["update", "create"],
  DeliveryUpdateWithoutMessageInput: ["type", "date", "user"],
  ApprovalUpsertWithoutMessageInput: ["update", "create"],
  ApprovalUpdateWithoutMessageInput: ["commentId", "status"],
  SongUpsertWithoutMessagesInput: ["update", "create"],
  SongUpdateWithoutMessagesInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "owner"],
  MessageCreateWithoutDeliveryInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "approval", "song"],
  MessageCreateOrConnectWithoutDeliveryInput: ["where", "create"],
  UserCreateWithoutDeliveriesInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations"],
  UserCreateOrConnectWithoutDeliveriesInput: ["where", "create"],
  MessageUpsertWithoutDeliveryInput: ["update", "create"],
  MessageUpdateWithoutDeliveryInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "approval", "song"],
  UserUpsertWithoutDeliveriesInput: ["update", "create"],
  UserUpdateWithoutDeliveriesInput: ["email", "username", "password", "avatarURL", "createdAt", "updatedAt", "songs", "sentMessages", "receivedNotifications", "sentNotifications", "transactions", "conversations"],
  SongCreateManyOwnerInput: ["id", "title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt"],
  MessageCreateManySenderInput: ["id", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  NotificationCreateManyReceiverInput: ["id", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationCreateManySenderInput: ["id", "receiverId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  TransactionCreateManyUserInput: ["id", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  UserConversationCreateManyUserInput: ["conversationId"],
  DeliveryCreateManyUserInput: ["id", "messageId", "type", "date"],
  SongUpdateWithoutOwnerInput: ["title", "mediaUrl", "mediaType", "genre", "createdAt", "updatedAt", "Messages"],
  MessageUpdateWithoutSenderInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "conversation", "delivery", "approval", "song"],
  NotificationUpdateWithoutReceiverInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "sender"],
  NotificationUpdateWithoutSenderInput: ["parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "receiver"],
  TransactionUpdateWithoutUserInput: ["openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  UserConversationUpdateWithoutUserInput: ["conversation"],
  DeliveryUpdateWithoutUserInput: ["type", "date", "message"],
  MessageCreateManySongInput: ["id", "senderId", "conversationId", "approvalId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  MessageUpdateWithoutSongInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "conversation", "delivery", "approval"],
  UserConversationCreateManyConversationInput: ["userId"],
  MessageCreateManyConversationInput: ["id", "senderId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  UserConversationUpdateWithoutConversationInput: ["user"],
  MessageUpdateWithoutConversationInput: ["text", "sentAt", "type", "updatedAt", "createdAt", "sender", "delivery", "approval", "song"]
};
const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "username", "password", "avatarURL", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "mediaUrl", "mediaType", "genre", "ownerId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  NotificationGroupBy: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
  TransactionGroupBy: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateApproval: ["_count", "_avg", "_sum", "_min", "_max"],
  ApprovalGroupBy: ["id", "commentId", "status", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateConversation: ["_count", "_avg", "_sum", "_min", "_max"],
  ConversationGroupBy: ["id", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserConversation: ["_count", "_avg", "_sum", "_min", "_max"],
  UserConversationGroupBy: ["userId", "conversationId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMessage: ["_count", "_avg", "_sum", "_min", "_max"],
  MessageGroupBy: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDelivery: ["_count", "_avg", "_sum", "_min", "_max"],
  DeliveryGroupBy: ["id", "messageId", "userId", "type", "date", "_count", "_avg", "_sum", "_min", "_max"],
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
  NotificationCountAggregate: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt", "_all"],
  NotificationAvgAggregate: ["id", "receiverId", "senderId", "parentId"],
  NotificationSumAggregate: ["id", "receiverId", "senderId", "parentId"],
  NotificationMinAggregate: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  NotificationMaxAggregate: ["id", "receiverId", "senderId", "parentId", "read", "type", "url", "urlType", "createdAt", "updatedAt"],
  TransactionCountAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt", "_all"],
  TransactionAvgAggregate: ["id", "userId", "openingBalance", "transactionAmount"],
  TransactionSumAggregate: ["id", "userId", "openingBalance", "transactionAmount"],
  TransactionMinAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  TransactionMaxAggregate: ["id", "userId", "openingBalance", "transactionAmount", "createdAt", "updatedAt"],
  ApprovalCountAggregate: ["id", "commentId", "status", "_all"],
  ApprovalAvgAggregate: ["id", "commentId"],
  ApprovalSumAggregate: ["id", "commentId"],
  ApprovalMinAggregate: ["id", "commentId", "status"],
  ApprovalMaxAggregate: ["id", "commentId", "status"],
  ConversationCountAggregate: ["id", "updatedAt", "createdAt", "_all"],
  ConversationAvgAggregate: ["id"],
  ConversationSumAggregate: ["id"],
  ConversationMinAggregate: ["id", "updatedAt", "createdAt"],
  ConversationMaxAggregate: ["id", "updatedAt", "createdAt"],
  UserConversationCountAggregate: ["userId", "conversationId", "_all"],
  UserConversationAvgAggregate: ["userId", "conversationId"],
  UserConversationSumAggregate: ["userId", "conversationId"],
  UserConversationMinAggregate: ["userId", "conversationId"],
  UserConversationMaxAggregate: ["userId", "conversationId"],
  MessageCountAggregate: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt", "_all"],
  MessageAvgAggregate: ["id", "senderId", "conversationId", "approvalId", "songId"],
  MessageSumAggregate: ["id", "senderId", "conversationId", "approvalId", "songId"],
  MessageMinAggregate: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  MessageMaxAggregate: ["id", "senderId", "conversationId", "approvalId", "songId", "text", "sentAt", "type", "updatedAt", "createdAt"],
  DeliveryCountAggregate: ["id", "messageId", "userId", "type", "date", "_all"],
  DeliveryAvgAggregate: ["id", "messageId", "userId"],
  DeliverySumAggregate: ["id", "messageId", "userId"],
  DeliveryMinAggregate: ["id", "messageId", "userId", "type", "date"],
  DeliveryMaxAggregate: ["id", "messageId", "userId", "type", "date"]
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
  GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueApprovalArgs: ["where"],
  FindFirstApprovalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyApprovalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateApprovalArgs: ["data"],
  CreateManyApprovalArgs: ["data", "skipDuplicates"],
  DeleteApprovalArgs: ["where"],
  UpdateApprovalArgs: ["data", "where"],
  DeleteManyApprovalArgs: ["where"],
  UpdateManyApprovalArgs: ["data", "where"],
  UpsertApprovalArgs: ["where", "create", "update"],
  AggregateApprovalArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByApprovalArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueConversationArgs: ["where"],
  FindFirstConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateConversationArgs: ["data"],
  CreateManyConversationArgs: ["data", "skipDuplicates"],
  DeleteConversationArgs: ["where"],
  UpdateConversationArgs: ["data", "where"],
  DeleteManyConversationArgs: ["where"],
  UpdateManyConversationArgs: ["data", "where"],
  UpsertConversationArgs: ["where", "create", "update"],
  AggregateConversationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByConversationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserConversationArgs: ["where"],
  FindFirstUserConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserConversationArgs: ["data"],
  CreateManyUserConversationArgs: ["data", "skipDuplicates"],
  DeleteUserConversationArgs: ["where"],
  UpdateUserConversationArgs: ["data", "where"],
  DeleteManyUserConversationArgs: ["where"],
  UpdateManyUserConversationArgs: ["data", "where"],
  UpsertUserConversationArgs: ["where", "create", "update"],
  AggregateUserConversationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserConversationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMessageArgs: ["where"],
  FindFirstMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMessageArgs: ["data"],
  CreateManyMessageArgs: ["data", "skipDuplicates"],
  DeleteMessageArgs: ["where"],
  UpdateMessageArgs: ["data", "where"],
  DeleteManyMessageArgs: ["where"],
  UpdateManyMessageArgs: ["data", "where"],
  UpsertMessageArgs: ["where", "create", "update"],
  AggregateMessageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMessageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDeliveryArgs: ["where"],
  FindFirstDeliveryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDeliveryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDeliveryArgs: ["data"],
  CreateManyDeliveryArgs: ["data", "skipDuplicates"],
  DeleteDeliveryArgs: ["where"],
  UpdateDeliveryArgs: ["data", "where"],
  DeleteManyDeliveryArgs: ["where"],
  UpdateManyDeliveryArgs: ["data", "where"],
  UpsertDeliveryArgs: ["where", "create", "update"],
  AggregateDeliveryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDeliveryArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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







