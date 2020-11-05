import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";
import { Comment } from "./Comment";

@ObjectType()
@Entity()
export class Song extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	mediaUrl!: string;

	@Field()
	@Column()
	genre: string;

	@Field()
	@Column()
	ownerId: number;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.songs)
	owner: User;

	@Field(() => Comment)
	@OneToMany(() => Comment, (comment) => comment.parent)
	comments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
