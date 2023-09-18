import { RentalRequestInterface } from 'interfaces/rental-request';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  status: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  rental_request?: RentalRequestInterface[];
  organization?: OrganizationInterface;
  _count?: {
    rental_request?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
}
