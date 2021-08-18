/*
  Warnings:

  - You are about to drop the column `approved` on the `Comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[approvalId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "approved",
ADD COLUMN     "approvalId" INTEGER;

-- CreateTable
CREATE TABLE "Approval" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_approvalId_unique" ON "Comment"("approvalId");

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("approvalId") REFERENCES "Approval"("id") ON DELETE SET NULL ON UPDATE CASCADE;
