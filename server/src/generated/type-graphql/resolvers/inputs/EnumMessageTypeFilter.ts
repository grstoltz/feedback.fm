import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMessageTypeFilter } from "../inputs/NestedEnumMessageTypeFilter";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumMessageTypeFilter {
  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  equals?: "MESSAGE" | "FEEDBACK" | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  in?: Array<"MESSAGE" | "FEEDBACK"> | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  notIn?: Array<"MESSAGE" | "FEEDBACK"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageTypeFilter, {
    nullable: true
  })
  not?: NestedEnumMessageTypeFilter | undefined;
}
