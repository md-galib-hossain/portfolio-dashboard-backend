import { Document } from "mongoose";

// Define interfaces for nested structures
export type TSocialProfile ={
    _id? : string; 
  name: string;
  link: string;
}

export type TEducation= {
    _id? : string;
  institutionName: string;
  admitYear: string;
  passingYear: string;
  result: string;
  department: string;
  degreeName: string;
}

// Define main user interface extending Document
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
  socialProfiles: TSocialProfile[];
  educationProfiles: TEducation[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}


