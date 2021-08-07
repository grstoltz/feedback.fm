import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReceiverInput } from "../inputs/CommentCreateManyReceiverInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateManyReceiverInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyReceiverInput], {
    nullable: false
  })
  data!: CommentCreateManyReceiverInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
