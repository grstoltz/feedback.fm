/*
  Warnings:

  - A unique constraint covering the columns `[commentId]` on the table `Approval` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Approval.commentId_unique" ON "Approval"("commentId");
