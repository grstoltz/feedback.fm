import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyOwnerInput } from "../inputs/SongCreateManyOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [SongCreateManyOwnerInput], {
    nullable: false
  })
  data!: SongCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
