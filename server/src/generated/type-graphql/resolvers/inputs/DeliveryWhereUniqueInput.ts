import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryMessageIdUserIdTypeCompoundUniqueInput } from "../inputs/DeliveryMessageIdUserIdTypeCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => DeliveryMessageIdUserIdTypeCompoundUniqueInput, {
    nullable: true
  })
  messageId_userId_type?: DeliveryMessageIdUserIdTypeCompoundUniqueInput | undefined;
}
