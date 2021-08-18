import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Approval {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  Comment?: Comment | null;
}
