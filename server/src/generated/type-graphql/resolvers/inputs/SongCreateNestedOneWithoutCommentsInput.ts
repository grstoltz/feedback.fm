import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutCommentsInput } from "../inputs/SongCreateOrConnectWithoutCommentsInput";
import { SongCreateWithoutCommentsInput } from "../inputs/SongCreateWithoutCommentsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: SongCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
