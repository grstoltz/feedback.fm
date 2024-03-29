import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySenderInput } from "../inputs/MessageCreateManySenderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateManySenderInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManySenderInput], {
    nullable: false
  })
  data!: MessageCreateManySenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
