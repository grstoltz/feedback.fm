import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateOrConnectWithoutMessageInput } from "../inputs/DeliveryCreateOrConnectWithoutMessageInput";
import { DeliveryCreateWithoutMessageInput } from "../inputs/DeliveryCreateWithoutMessageInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateNestedOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => DeliveryCreateWithoutMessageInput, {
    nullable: true
  })
  create?: DeliveryCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: DeliveryCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: true
  })
  connect?: DeliveryWhereUniqueInput | undefined;
}
