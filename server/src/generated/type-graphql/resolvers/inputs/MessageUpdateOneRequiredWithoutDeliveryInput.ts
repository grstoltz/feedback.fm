import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutDeliveryInput } from "../inputs/MessageCreateOrConnectWithoutDeliveryInput";
import { MessageCreateWithoutDeliveryInput } from "../inputs/MessageCreateWithoutDeliveryInput";
import { MessageUpdateWithoutDeliveryInput } from "../inputs/MessageUpdateWithoutDeliveryInput";
import { MessageUpsertWithoutDeliveryInput } from "../inputs/MessageUpsertWithoutDeliveryInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateOneRequiredWithoutDeliveryInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutDeliveryInput, {
    nullable: true
  })
  create?: MessageCreateWithoutDeliveryInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutDeliveryInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutDeliveryInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpsertWithoutDeliveryInput, {
    nullable: true
  })
  upsert?: MessageUpsertWithoutDeliveryInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutDeliveryInput, {
    nullable: true
  })
  update?: MessageUpdateWithoutDeliveryInput | undefined;
}
