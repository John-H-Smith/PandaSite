import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class BoardGamesIdResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | Observable<any> | any {
    const id =  route.params["projectTitle"];
    return  'GameName'
  }
}


