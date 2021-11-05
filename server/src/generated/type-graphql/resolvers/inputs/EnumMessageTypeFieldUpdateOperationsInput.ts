import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumMessageTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  set?: "MESSAGE" | "FEEDBACK" | undefined;
}
