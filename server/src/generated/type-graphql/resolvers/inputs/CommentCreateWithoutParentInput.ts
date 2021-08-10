import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReceivedCommentsInput } from "../inputs/UserCreateNestedOneWithoutReceivedCommentsInput";
import { UserCreateNestedOneWithoutSentCommentsInput } from "../inputs/UserCreateNestedOneWithoutSentCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateWithoutParentInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  approved?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSentCommentsInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutSentCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReceivedCommentsInput, {
    nullable: false
  })
  receiver!: UserCreateNestedOneWithoutReceivedCommentsInput;
}
