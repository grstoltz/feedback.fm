import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCreateOrConnectWithoutParticipantsInput } from "../inputs/ConversationCreateOrConnectWithoutParticipantsInput";
import { ConversationCreateWithoutParticipantsInput } from "../inputs/ConversationCreateWithoutParticipantsInput";
import { ConversationUpdateWithoutParticipantsInput } from "../inputs/ConversationUpdateWithoutParticipantsInput";
import { ConversationUpsertWithoutParticipantsInput } from "../inputs/ConversationUpsertWithoutParticipantsInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationUpdateOneRequiredWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => ConversationCreateWithoutParticipantsInput, {
    nullable: true
  })
  create?: ConversationCreateWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutParticipantsInput, {
    nullable: true
  })
  connectOrCreate?: ConversationCreateOrConnectWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpsertWithoutParticipantsInput, {
    nullable: true
  })
  upsert?: ConversationUpsertWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ConversationWhereUniqueInput, {
    nullable: true
  })
  connect?: ConversationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpdateWithoutParticipantsInput, {
    nullable: true
  })
  update?: ConversationUpdateWithoutParticipantsInput | undefined;
}
