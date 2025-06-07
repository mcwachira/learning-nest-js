import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { postTypes } from './enums/postTypes.enums';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../meta-options/dtos/create-post-meta-options.dto';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 256,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postTypes,
    nullable: false,
    default: postTypes.POST,
  })
  postType: postTypes;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 1024,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  publishOn: Date;

  @Column({
    type: 'varchar',

    nullable: true,
  })
  tags?: string[];

  //   metaOptions?: CreatePostMetaOptionsDto[];
}
