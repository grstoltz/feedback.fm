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
import { Song } from "./Song";
import { Comment } from "./Comment";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column({ unique: true })
	username!: string;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@OneToMany(() => Song, (song) => song.owner)
	songs: Song[];

	@OneToMany(() => Comment, (comment) => comment.sender)
	sentComments: Comment[];

	@OneToMany(() => Comment, (comment) => comment.receiver)
	receivedComments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
