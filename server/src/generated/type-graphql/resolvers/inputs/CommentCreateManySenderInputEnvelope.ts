import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManySenderInput } from "../inputs/CommentCreateManySenderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateManySenderInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManySenderInput], {
    nullable: false
  })
  data!: CommentCreateManySenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
