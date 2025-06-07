import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 512,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

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

  @CreateDateColumn()
  CreateDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  // for creating soft deletes
  @DeleteDateColumn()
  deletedAt: Date;
}
