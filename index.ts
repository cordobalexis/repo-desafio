class Departamento {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName() {
return this.name;
    }
}

class Piso {
       nombre:string;
       departamentos:Departamento[];
    constructor(nombre:string){
        this.nombre = nombre;
        this.departamentos = [];
    }
    pushDepartamento(departamentos:Departamento) {
   this.departamentos.push(departamentos);
    }
    getDepartamentos(){
        return this.departamentos;
    }
}
class Edificio {
    piso:Piso[];
    constructor(piso:Piso[]){
this.piso = piso;
    }
}

console.log("un cambio"); 
