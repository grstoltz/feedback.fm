import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutDeliveryInput } from "../inputs/MessageCreateWithoutDeliveryInput";
import { MessageUpdateWithoutDeliveryInput } from "../inputs/MessageUpdateWithoutDeliveryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpsertWithoutDeliveryInput {
  @TypeGraphQL.Field(_type => MessageUpdateWithoutDeliveryInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutDeliveryInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutDeliveryInput, {
    nullable: false
  })
  create!: MessageCreateWithoutDeliveryInput;
}
