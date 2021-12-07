import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryWhereInput } from "../inputs/DeliveryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryRelationFilter {
  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  is?: DeliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  isNot?: DeliveryWhereInput | undefined;
}
