class Types {
    constructor() {

    }
    static isType(object, type){
        return object.constructor.name == type.name;
    }
    static isRecursiveType(object, type){
        return object instanceof type
    }
}
