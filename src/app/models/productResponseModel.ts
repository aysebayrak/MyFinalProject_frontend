import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductReponseModel extends ResponseModel{
    data:Product[]
  

}