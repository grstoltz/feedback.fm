import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyReceiverInput } from "../inputs/NotificationCreateManyReceiverInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NotificationCreateManyReceiverInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyReceiverInput], {
    nullable: false
  })
  data!: NotificationCreateManyReceiverInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
