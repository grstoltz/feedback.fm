import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySongInput } from "../inputs/MessageCreateManySongInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManySongInput], {
    nullable: false
  })
  data!: MessageCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
