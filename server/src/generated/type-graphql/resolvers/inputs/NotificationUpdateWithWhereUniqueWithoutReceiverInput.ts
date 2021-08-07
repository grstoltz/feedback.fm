import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutReceiverInput } from "../inputs/NotificationUpdateWithoutReceiverInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutReceiverInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutReceiverInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutReceiverInput;
}
