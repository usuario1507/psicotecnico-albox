/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Usuario } from "src/usuarios/entities/usuario.entity";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreElements: false,
            secretOrKey: configService.get('JWT_SECRET')
        })
    }
    async validate(payload: Usuario){
        console.log(payload)
        return {
            id_usuario: payload.id_usuario,
            nombre: payload.username,
            correo_electronico: payload.correo_electronico
        }
    }
}