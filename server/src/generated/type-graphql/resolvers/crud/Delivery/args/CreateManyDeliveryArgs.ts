import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryCreateManyInput } from "../../../inputs/DeliveryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeliveryArgs {
  @TypeGraphQL.Field(_type => [DeliveryCreateManyInput], {
    nullable: false
  })
  data!: DeliveryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
