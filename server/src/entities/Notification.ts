import { ObjectType, Field } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	Column,
	BaseEntity,
	OneToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class Notification extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	receieverId!: number;

	@Field()
	@Column()
	senderId!: number;

	@Field()
	@Column()
	message!: string;

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
