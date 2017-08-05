import { Property } from './property';

export interface User {

    email: string;
    password: string;
    properties: Property[];
}