import {IContactInfo} from "../contact/IContactInfo";
import {TaskStatus} from "./enumeration";

export interface ITaskInfo {
  id: number;
  subject: string;
  assignedContact: IContactInfo;
  dueDate: Date;
  status: TaskStatus;
  children: number[]
}
