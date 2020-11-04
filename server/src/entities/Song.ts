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

	@OneToMany(() => Comment, (comment) => comment.parentId)
	comments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
