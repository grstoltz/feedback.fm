import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationScalarWhereInput } from "../inputs/UserConversationScalarWhereInput";
import { UserConversationUpdateManyMutationInput } from "../inputs/UserConversationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserConversationScalarWhereInput, {
    nullable: false
  })
  where!: UserConversationScalarWhereInput;

  @TypeGraphQL.Field(_type => UserConversationUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserConversationUpdateManyMutationInput;
}
