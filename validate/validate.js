function validate(body,validator) {
    if(typeof body !== "object") throw new Error('body needs to be an object')
    
    if( !(Array.isArray(validator)) ) throw new Error('validator needs to be an array');
    
    for(let key in body){
        if (body[key] === undefined) throw new Error(`the key '${key} is undefined`);
        const val = validator.find((prop,index) => prop.key === key );
        if(!val) throw new Error(`'${key}' does not exist in the validator`);
        
        if(typeof body[key] !== val.type) {
            const value_type = typeof body[key] ;
            const required_type = val.type;
            throw new Error(`The property ${key}, should be of type ${required_type} but is of type ${value_type} instead`);
        }
    }
    
}

//const body = {
//    name:"Osama",
//    age:40
//}
//
//const validator = [
//    {
//        key:"name",
//        type:"string"
//    },
//    {
//        key:"age",
//        type:"number"
//    }
//]
//
//validatePost(body,validator)
//
////console.log(typeof 40);
////console.log(typeof "40")

module.exports = validate;