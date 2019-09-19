import {Dni} from './Dni.model';

export class User {

  public email: string;
  public password: string;
  public dni: Dni;
  public name: string;
  public turn: string;



  constructor(dni: string, name: string, email: string, password: string, turn: string) {
    this.dni = new Dni(dni);
    this.name = name;
    this.email = email;
    this.password = password;
    this.turn = turn;
  }
}
