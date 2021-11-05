import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MessageRelationFilter } from "../inputs/MessageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalWhereInput {
  @TypeGraphQL.Field(_type => [ApprovalWhereInput], {
    nullable: true
  })
  AND?: ApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApprovalWhereInput], {
    nullable: true
  })
  OR?: ApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApprovalWhereInput], {
    nullable: true
  })
  NOT?: ApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  commentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MessageRelationFilter, {
    nullable: true
  })
  Message?: MessageRelationFilter | undefined;
}
