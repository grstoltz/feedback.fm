import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryOrderByInput } from "../../../inputs/DeliveryOrderByInput";
import { DeliveryWhereInput } from "../../../inputs/DeliveryWhereInput";
import { DeliveryWhereUniqueInput } from "../../../inputs/DeliveryWhereUniqueInput";
import { DeliveryScalarFieldEnum } from "../../../../enums/DeliveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  where?: DeliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeliveryOrderByInput], {
    nullable: true
  })
  orderBy?: DeliveryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeliveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "messageId" | "userId" | "type" | "date"> | undefined;
}
