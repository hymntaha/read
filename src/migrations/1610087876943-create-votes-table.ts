import {MigrationInterface, QueryRunner} from "typeorm";

export class createVotesTable1610087876943 implements MigrationInterface {
    name = 'createVotesTable1610087876943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subs" DROP CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba"`);
        await queryRunner.query(`ALTER TABLE "subs" ALTER COLUMN "username" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "subs"."username" IS NULL`);
        await queryRunner.query(`ALTER TABLE "subs" ADD CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subs" DROP CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba"`);
        await queryRunner.query(`COMMENT ON COLUMN "subs"."username" IS NULL`);
        await queryRunner.query(`ALTER TABLE "subs" ALTER COLUMN "username" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subs" ADD CONSTRAINT "FK_4520ae7b26f68a13ec3e96dbbba" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
