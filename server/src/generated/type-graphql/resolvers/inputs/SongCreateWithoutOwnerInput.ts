import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutParentInput } from "../inputs/CommentCreateNestedManyWithoutParentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mediaUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mediaType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  genre!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutParentInput | undefined;
}
