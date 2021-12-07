import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutDeliveryInput } from "../inputs/MessageCreateOrConnectWithoutDeliveryInput";
import { MessageCreateWithoutDeliveryInput } from "../inputs/MessageCreateWithoutDeliveryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateNestedOneWithoutDeliveryInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutDeliveryInput, {
    nullable: true
  })
  create?: MessageCreateWithoutDeliveryInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutDeliveryInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutDeliveryInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;
}
