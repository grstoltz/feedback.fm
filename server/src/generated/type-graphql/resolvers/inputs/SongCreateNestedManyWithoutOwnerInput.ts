import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyOwnerInputEnvelope } from "../inputs/SongCreateManyOwnerInputEnvelope";
import { SongCreateOrConnectWithoutOwnerInput } from "../inputs/SongCreateOrConnectWithoutOwnerInput";
import { SongCreateWithoutOwnerInput } from "../inputs/SongCreateWithoutOwnerInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: SongCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
