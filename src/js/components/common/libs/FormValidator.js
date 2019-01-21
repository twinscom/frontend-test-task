import validator from "validator";

export default class FormValidator {
    constructor(validations){
        this.validations = validations;
    }

    validate(state, key, prevValidation) {
        let validation, multiply_rules = {};
        if(key && prevValidation){
            validation = prevValidation;

            this.validations.forEach(rule => {

                if(rule["field"] === key){
                    const field_value = state[rule["field"]].toString(),
                      options = rule.options || [],
                      validation_method = typeof rule.method === 'string' ? validator[rule.method] : rule.method,
                      isInvalid = validation_method(field_value, ...options, state) !== rule["validWhen"],
                      keyNotMultiply = multiply_rules[key] === undefined;

                    let multiply_boolean = false,
                      multiply_msg = "";

                    if(rule["multiply"]){
                        if(keyNotMultiply) multiply_rules[key] = [];

                        multiply_rules[key] = [
                            ...multiply_rules[key],
                            {
                                name: rule["method"],
                                isInvalid: isInvalid,
                                msg: rule["message"]
                            }
                        ];
                    }

                    if(isInvalid && keyNotMultiply) {
                        validation[rule["field"]] = {
                            isInvalid: true,
                            message: rule.message
                        };
                        validation.isValid = false;
                    }

                    if(!isInvalid && keyNotMultiply || !field_value.length){
                        validation[rule["field"]] = {
                            isInvalid: false,
                            message: ""
                        };
                        validation.isValid = true;
                    }

                    if(!keyNotMultiply && field_value.length) {
                        multiply_rules[key].forEach((item, i) => {
                            if(item["isInvalid"]){
                                multiply_boolean = true;
                                multiply_msg += item["msg"];
                            }
                        });

                        validation[rule["field"]] = {
                            isInvalid: multiply_boolean,
                            message: multiply_msg
                        };
                        validation.isValid = !multiply_boolean;
                    }
                }
            });

        }else{
            validation = this.valid();
            this.validations.forEach(rule => {
                if (!validation[rule["field"]].isInvalid) {
                    const field_value = state[rule["field"]].toString();
                    const options = rule.options || [];
                    const validation_method = typeof rule.method === 'string' ? validator[rule.method] : rule.method;

                    if(validation_method(field_value, ...options, state) !== rule["validWhen"]) {
                        validation[rule["field"]] = {
                            isInvalid: true,
                            message: rule.message
                        };
                        validation.isValid = false;
                    }
                }
            });
        }

        return validation;
    }

    valid() {
        const validation = {};

        this.validations.map(rule => (
            validation[rule["field"]] = { isInvalid: false, message: '' }
        ));
        return { isValid: true, ...validation };
    }
}