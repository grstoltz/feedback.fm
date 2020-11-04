import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity("Comment")
export class Comment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	parentId: number;

	@Field()
	@Column()
	senderId: number;

	@Field()
	@Column()
	receiverId: number;

	@Field()
	@Column()
	body: string;

	@Field()
	@Column()
	active: boolean;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.sentComments)
	owner: User;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.receivedComments)
	receiver: User;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
