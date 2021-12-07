import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryTypeFilter } from "../inputs/EnumDeliveryTypeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryScalarWhereInput {
  @TypeGraphQL.Field(_type => [DeliveryScalarWhereInput], {
    nullable: true
  })
  AND?: DeliveryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarWhereInput], {
    nullable: true
  })
  OR?: DeliveryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarWhereInput], {
    nullable: true
  })
  NOT?: DeliveryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  messageId?: IntFilter | undefined;

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
