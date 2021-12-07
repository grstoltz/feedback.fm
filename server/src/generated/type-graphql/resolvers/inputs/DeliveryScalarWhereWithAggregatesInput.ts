import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDeliveryTypeWithAggregatesFilter } from "../inputs/EnumDeliveryTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeliveryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeliveryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeliveryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeliveryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  messageId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDeliveryTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumDeliveryTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;
}
