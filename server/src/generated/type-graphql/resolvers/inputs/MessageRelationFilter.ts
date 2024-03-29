import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageRelationFilter {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  is?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  isNot?: MessageWhereInput | undefined;
}
