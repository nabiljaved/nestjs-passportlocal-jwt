import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET'   //PRPTECT THIS , MOVE TO ENV 
        })
    }

    async validate(payload:any){
        //const user = await this.usersService.getById(payload.id)
        return {
            // id: payload,
            // name : payload.name,
            //...user
            user : payload
        }
    }

}