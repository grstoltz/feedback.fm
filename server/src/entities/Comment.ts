import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
	OneToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";
import { Song } from "./Song";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
	@Field()
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
	@Column({ default: false })
	read: boolean;

	@Field()
	@Column({ default: false })
	approved: boolean;

	@Field()
	@Column({ default: true })
	active: boolean;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.sentComments)
	sender: User;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.receivedComments)
	receiver: User;

	@Field(() => Song)
	@OneToOne(() => Song, (song) => song.comments)
	parent: Song;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
