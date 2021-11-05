import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutMessagesInput } from "../inputs/SongCreateOrConnectWithoutMessagesInput";
import { SongCreateWithoutMessagesInput } from "../inputs/SongCreateWithoutMessagesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: SongCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
