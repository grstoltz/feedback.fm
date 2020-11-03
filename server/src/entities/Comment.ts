import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";

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

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
