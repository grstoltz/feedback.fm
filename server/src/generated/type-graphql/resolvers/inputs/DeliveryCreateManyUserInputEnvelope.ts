import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateManyUserInput } from "../inputs/DeliveryCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [DeliveryCreateManyUserInput], {
    nullable: false
  })
  data!: DeliveryCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
