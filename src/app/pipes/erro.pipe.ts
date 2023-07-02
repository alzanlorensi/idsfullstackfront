import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'erro'
})
export class ErroPipe implements PipeTransform {

  transform(value: any, isLogin?: Boolean): any {

    if(value){
      if(value['required']){
        return isLogin ? 'Esse campo é requerido' : 'Campo obrigatório.'
      }
      if(value['email']){
        return isLogin ? 'Não é um email válido' : 'Campo obrigatório.'
      }
    }
    return null;
  }

}
