import { Document } from "mongoose";





export type TUser = {
  name: string;
  userImage: string;
  role: string;
  email: string;
  headline: string;
  age: string;
  status: string;
  aboutMe: string;
  presentAddress: string;
  permanentAddress: string;
  resumeLinkId: string;
 
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}


