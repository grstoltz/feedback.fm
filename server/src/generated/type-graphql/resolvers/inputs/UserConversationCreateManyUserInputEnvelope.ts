import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyUserInput } from "../inputs/UserConversationCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserConversationCreateManyUserInput], {
    nullable: false
  })
  data!: UserConversationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
