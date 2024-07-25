// para validar que desde el cliente me llegue el valor esperado instalar las bibliotecas class validator de nest  y llamar los metodos
import { IsBoolean, IsString, MinLength } from "class-validator";
export class task {
    id?: string;
    @IsString()
    @MinLength(2)
    name: string;
    @IsBoolean()
    active: boolean;
    createdAt?: Date; 
    updatedAt?: Date
}