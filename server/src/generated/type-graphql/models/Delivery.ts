import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Message } from "../models/Message";
import { User } from "../models/User";
import { DeliveryType } from "../enums/DeliveryType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Delivery {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  message?: Message;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  messageId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => DeliveryType, {
    nullable: false
  })
  type!: "DELIVERED" | "SEEN";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;
}
