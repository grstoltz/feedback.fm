import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalCreateManyInput } from "../../../inputs/ApprovalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApprovalArgs {
  @TypeGraphQL.Field(_type => [ApprovalCreateManyInput], {
    nullable: false
  })
  data!: ApprovalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
