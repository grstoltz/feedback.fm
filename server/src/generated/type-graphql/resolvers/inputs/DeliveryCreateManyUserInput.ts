import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryType } from "../../enums/DeliveryType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateManyUserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  messageId!: number;

  @TypeGraphQL.Field(_type => DeliveryType, {
    nullable: false
  })
  type!: "DELIVERED" | "SEEN";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date?: Date | undefined;
}
