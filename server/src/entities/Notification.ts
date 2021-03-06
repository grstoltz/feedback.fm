import { ObjectType, Field } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	Column,
	BaseEntity,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Notification extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	receiverId!: number;

	@Field()
	@Column()
	senderId!: number;

	@Field()
	@Column()
	message!: string;

	@Field()
	@Column()
	parentType!: string;

	@Field()
	@Column()
	parentId!: number;

	@Field(() => User)
	sender: User;

	@Field(() => User)
	receiver: User;

	@Field()
	@Column({ default: false })
	read!: boolean;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
