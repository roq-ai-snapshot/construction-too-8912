import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RentalRequestInterface {
  id?: string;
  status: string;
  tool_id?: string;
  guest_id?: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RentalRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  tool_id?: string;
  guest_id?: string;
}
