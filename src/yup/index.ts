import { AnyObjectSchema, ValidationError } from 'yup';


export const validate=(getValidationSchema: AnyObjectSchema)=>{
    return(values:object)=>{
        const validationSchema=getValidationSchema;
        try{
            validationSchema.validateSync(values,{abortEarly:false});
            return{};
        }catch(error){
            if(error instanceof ValidationError){
                return getErrorsFromValidationError(error);
            }
        }
    };
};

export const getErrorsFromValidationError=(
    validationError:ValidationError) => {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors:any,error:ValidationError)=>{
    return{
        ...errors,
        [error.path as string]: error.errors[FIRST_ERROR],
    };
},{});
}