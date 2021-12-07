import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateManyUserInputEnvelope } from "../inputs/DeliveryCreateManyUserInputEnvelope";
import { DeliveryCreateOrConnectWithoutUserInput } from "../inputs/DeliveryCreateOrConnectWithoutUserInput";
import { DeliveryCreateWithoutUserInput } from "../inputs/DeliveryCreateWithoutUserInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [DeliveryCreateWithoutUserInput], {
    nullable: true
  })
  create?: DeliveryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DeliveryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: DeliveryWhereUniqueInput[] | undefined;
}
