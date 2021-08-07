import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyReceiverInputEnvelope } from "../inputs/NotificationCreateManyReceiverInputEnvelope";
import { NotificationCreateOrConnectWithoutReceiverInput } from "../inputs/NotificationCreateOrConnectWithoutReceiverInput";
import { NotificationCreateWithoutReceiverInput } from "../inputs/NotificationCreateWithoutReceiverInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutReceiverInput } from "../inputs/NotificationUpdateManyWithWhereWithoutReceiverInput";
import { NotificationUpdateWithWhereUniqueWithoutReceiverInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutReceiverInput";
import { NotificationUpsertWithWhereUniqueWithoutReceiverInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutReceiverInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NotificationUpdateManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutReceiverInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
