import { ObjectType, Field } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	Column,
	BaseEntity,
	OneToMany,
	ManyToOne,
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

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.songs)
	owner: User;

	@OneToMany(() => Comment, (comment) => comment.senderId)
	sentComments: Comment[];

	@OneToMany(() => Comment, (comment) => comment.receiverId)
	receivedComments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
