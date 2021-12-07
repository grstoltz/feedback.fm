import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateManyUserInputEnvelope } from "../inputs/DeliveryCreateManyUserInputEnvelope";
import { DeliveryCreateOrConnectWithoutUserInput } from "../inputs/DeliveryCreateOrConnectWithoutUserInput";
import { DeliveryCreateWithoutUserInput } from "../inputs/DeliveryCreateWithoutUserInput";
import { DeliveryScalarWhereInput } from "../inputs/DeliveryScalarWhereInput";
import { DeliveryUpdateManyWithWhereWithoutUserInput } from "../inputs/DeliveryUpdateManyWithWhereWithoutUserInput";
import { DeliveryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/DeliveryUpdateWithWhereUniqueWithoutUserInput";
import { DeliveryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/DeliveryUpsertWithWhereUniqueWithoutUserInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [DeliveryCreateWithoutUserInput], {
    nullable: true
  })
  create?: DeliveryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: DeliveryUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DeliveryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: DeliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereUniqueInput], {
    nullable: true
  })
  set?: DeliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DeliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereUniqueInput], {
    nullable: true
  })
  delete?: DeliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: DeliveryUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: DeliveryUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeliveryScalarWhereInput[] | undefined;
}
