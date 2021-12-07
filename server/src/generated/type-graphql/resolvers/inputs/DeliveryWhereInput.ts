import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryTypeFilter } from "../inputs/EnumDeliveryTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MessageRelationFilter } from "../inputs/MessageRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryWhereInput {
  @TypeGraphQL.Field(_type => [DeliveryWhereInput], {
    nullable: true
  })
  AND?: DeliveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereInput], {
    nullable: true
  })
  OR?: DeliveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryWhereInput], {
    nullable: true
  })
  NOT?: DeliveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MessageRelationFilter, {
    nullable: true
  })
  message?: MessageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  messageId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDeliveryTypeFilter, {
    nullable: true
  })
  type?: EnumDeliveryTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;
}
