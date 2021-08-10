/*
  Warnings:

  - You are about to drop the column `Status` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "Status",
ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "receiverId" INTEGER NOT NULL,
ALTER COLUMN "active" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "read" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarURL" TEXT NOT NULL DEFAULT E'https://res.cloudinary.com/dedeo0s30/image/upload/v1605156898/default-profile-icon-16.png',
ADD COLUMN     "password" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
