export interface CustomerOrder {
    getName(): string;
    getIDN(): string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: String;
    cpf: string;
}

export interface EnterpriseCustomerProtocol {
    name: string;
    cnpj: string;
}