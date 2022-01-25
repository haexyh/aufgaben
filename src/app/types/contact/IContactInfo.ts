import {IAddressInfo} from "../address/IAddressInfo";
import {IPicture} from "../picture/IPicture";

export interface IContactInfo {
  id: number;
  isMale: boolean;
  preName: string;
  sirName: string;
  address: IAddressInfo;
  picture: IPicture
}
