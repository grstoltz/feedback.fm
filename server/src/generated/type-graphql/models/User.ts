import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Delivery } from "../models/Delivery";
import { Message } from "../models/Message";
import { Notification } from "../models/Notification";
import { Song } from "../models/Song";
import { Transaction } from "../models/Transaction";
import { UserConversation } from "../models/UserConversation";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatarURL!: string;

  songs?: Song[];

  sentMessages?: Message[];

  receivedNotifications?: Notification[];

  sentNotifications?: Notification[];

  transactions?: Transaction[];

  conversations?: UserConversation[];

  deliveries?: Delivery[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
