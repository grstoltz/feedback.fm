import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDeliveryTypeFieldUpdateOperationsInput } from "../inputs/EnumDeliveryTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutDeliveriesInput } from "../inputs/UserUpdateOneRequiredWithoutDeliveriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpdateWithoutMessageInput {
  @TypeGraphQL.Field(_type => EnumDeliveryTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumDeliveryTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutDeliveriesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutDeliveriesInput | undefined;
}
