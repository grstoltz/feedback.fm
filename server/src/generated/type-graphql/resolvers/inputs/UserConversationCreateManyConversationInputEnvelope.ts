import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyConversationInput } from "../inputs/UserConversationCreateManyConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateManyConversationInputEnvelope {
  @TypeGraphQL.Field(_type => [UserConversationCreateManyConversationInput], {
    nullable: false
  })
  data!: UserConversationCreateManyConversationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
