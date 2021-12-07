import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateOrConnectWithoutMessageInput } from "../inputs/DeliveryCreateOrConnectWithoutMessageInput";
import { DeliveryCreateWithoutMessageInput } from "../inputs/DeliveryCreateWithoutMessageInput";
import { DeliveryUpdateWithoutMessageInput } from "../inputs/DeliveryUpdateWithoutMessageInput";
import { DeliveryUpsertWithoutMessageInput } from "../inputs/DeliveryUpsertWithoutMessageInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpdateOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => DeliveryCreateWithoutMessageInput, {
    nullable: true
  })
  create?: DeliveryCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: DeliveryCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryUpsertWithoutMessageInput, {
    nullable: true
  })
  upsert?: DeliveryUpsertWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: true
  })
  connect?: DeliveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DeliveryUpdateWithoutMessageInput, {
    nullable: true
  })
  update?: DeliveryUpdateWithoutMessageInput | undefined;
}
