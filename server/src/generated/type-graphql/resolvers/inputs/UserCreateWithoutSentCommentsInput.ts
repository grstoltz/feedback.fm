import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutReceiverInput } from "../inputs/CommentCreateNestedManyWithoutReceiverInput";
import { NotificationCreateNestedManyWithoutReceiverInput } from "../inputs/NotificationCreateNestedManyWithoutReceiverInput";
import { SongCreateNestedManyWithoutOwnerInput } from "../inputs/SongCreateNestedManyWithoutOwnerInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutSentCommentsInput {
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
    nullable: true
  })
  avatarURL?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutReceiverInput, {
    nullable: true
  })
  receivedComments?: CommentCreateNestedManyWithoutReceiverInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutReceiverInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutReceiverInput | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  transactions?: TransactionCreateNestedManyWithoutUserInput | undefined;
}
