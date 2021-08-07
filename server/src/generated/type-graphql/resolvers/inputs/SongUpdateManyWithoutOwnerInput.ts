import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyOwnerInputEnvelope } from "../inputs/SongCreateManyOwnerInputEnvelope";
import { SongCreateOrConnectWithoutOwnerInput } from "../inputs/SongCreateOrConnectWithoutOwnerInput";
import { SongCreateWithoutOwnerInput } from "../inputs/SongCreateWithoutOwnerInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutOwnerInput } from "../inputs/SongUpdateManyWithWhereWithoutOwnerInput";
import { SongUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/SongUpdateWithWhereUniqueWithoutOwnerInput";
import { SongUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/SongUpsertWithWhereUniqueWithoutOwnerInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: SongCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
