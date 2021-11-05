import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutMessagesInput } from "../inputs/SongCreateOrConnectWithoutMessagesInput";
import { SongCreateWithoutMessagesInput } from "../inputs/SongCreateWithoutMessagesInput";
import { SongUpdateWithoutMessagesInput } from "../inputs/SongUpdateWithoutMessagesInput";
import { SongUpsertWithoutMessagesInput } from "../inputs/SongUpsertWithoutMessagesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: SongCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: SongUpdateWithoutMessagesInput | undefined;
}
