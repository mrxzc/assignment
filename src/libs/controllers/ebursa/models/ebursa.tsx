import { EBursaStatus } from "../enums/ebursa-status";
import { EBursaType } from "../enums/ebursa-type";

interface IOrganizer {
  id: string | undefined | null;
  postalCodeId: string | undefined | null;
  userId: string | undefined | null;
  picName: string | undefined | null;
  picMobile: string | undefined | null;
  website: string | undefined | null;
  logo: string | undefined | null;
  description: string | undefined | null;
  type: string | undefined | null;
  verified: boolean | undefined | null;
  createdAt: Date | undefined | null;
  updatedAt: Date | undefined | null;
  regionableId: string | undefined | null;
  regionableType: string | undefined | null;
  name: string | undefined | null;
  user: any | undefined | null;
  postalCode: any | undefined | null;
  regionable: any | undefined | null;
}

export interface IEbursa {
  id: string | undefined | null;
  organizerId: string | undefined | null;
  cityId: string | undefined | null;
  code: string | undefined | null;
  title: string | undefined | null;
  description: string | undefined | null;
  status: EBursaStatus | undefined | null;
  startDate: Date | undefined | null;
  finishDate: Date | undefined | null;
  createdAt: Date | undefined | null;
  updatedAt: Date | undefined | null;
  startTime: Date | undefined | null;
  cityUpdated: boolean | undefined | null;
  type: EBursaType | undefined | null;
  rejectedAt: Date | undefined | null;
  reason: string | undefined | null;
  vacanciesCount: number | undefined | null;
  applicantsCount: number | undefined | null;
  companiesCount: number | undefined | null;
  organizer: IOrganizer | undefined | null;
  city: string | undefined | null;
  bigCover: string | undefined | null;
  smCover: string | undefined | null;
  medCover: string | undefined | null;
}

export class Ebursa {
  private id: string | undefined | null;
  private organizerId: string | undefined | null;
  private cityId: string | undefined | null;
  private code: string | undefined | null;
  private title: string | undefined | null;
  private description: string | undefined | null;
  private status: EBursaStatus | undefined | null;
  private startDate: Date | undefined | null;
  private finishDate: Date | undefined | null;
  private createdAt: Date | undefined | null;
  private updatedAt: Date | undefined | null;
  private startTime: Date | undefined | null;
  private cityUpdated: boolean | undefined | null;
  private type: EBursaType | undefined | null;
  private rejectedAt: Date | undefined | null;
  private reason: string | undefined | null;
  private vacanciesCount: number | undefined | null;
  private applicantsCount: number | undefined | null;
  private companiesCount: number | undefined | null;
  private organizer: IOrganizer | undefined | null;
  private city: string | undefined | null;
  private bigCover: string | undefined | null;
  private smCover: string | undefined | null;
  private medCover: string | undefined | null;

  constructor(obj: IEbursa) {
    Object.assign(this, obj);
  }
}
