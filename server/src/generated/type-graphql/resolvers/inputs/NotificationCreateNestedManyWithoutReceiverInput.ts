import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyReceiverInputEnvelope } from "../inputs/NotificationCreateManyReceiverInputEnvelope";
import { NotificationCreateOrConnectWithoutReceiverInput } from "../inputs/NotificationCreateOrConnectWithoutReceiverInput";
import { NotificationCreateWithoutReceiverInput } from "../inputs/NotificationCreateWithoutReceiverInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
