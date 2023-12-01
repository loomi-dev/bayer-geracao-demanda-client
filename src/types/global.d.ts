type Wallet = {
  balance: number;
  id: number;
};
type Farmer = {
  company_identifier: string;
  company_name: string;
  cpf: string;
  id: number;
  name: string;
  wallet: Wallet;
};
