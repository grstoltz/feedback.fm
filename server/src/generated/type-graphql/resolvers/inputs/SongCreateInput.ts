import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutSongInput } from "../inputs/MessageCreateNestedManyWithoutSongInput";
import { UserCreateNestedOneWithoutSongsInput } from "../inputs/UserCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutSongsInput;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  Messages?: MessageCreateNestedManyWithoutSongInput | undefined;
}
