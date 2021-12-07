import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedOneWithoutDeliveryInput } from "../inputs/MessageCreateNestedOneWithoutDeliveryInput";
import { UserCreateNestedOneWithoutDeliveriesInput } from "../inputs/UserCreateNestedOneWithoutDeliveriesInput";
import { DeliveryType } from "../../enums/DeliveryType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateInput {
  @TypeGraphQL.Field(_type => DeliveryType, {
    nullable: false
  })
  type!: "DELIVERED" | "SEEN";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedOneWithoutDeliveryInput, {
    nullable: false
  })
  message!: MessageCreateNestedOneWithoutDeliveryInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDeliveriesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutDeliveriesInput;
}
