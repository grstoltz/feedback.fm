import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedCommentsInput } from "../inputs/UserCreateWithoutReceivedCommentsInput";
import { UserUpdateWithoutReceivedCommentsInput } from "../inputs/UserUpdateWithoutReceivedCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutReceivedCommentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReceivedCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReceivedCommentsInput;
}
