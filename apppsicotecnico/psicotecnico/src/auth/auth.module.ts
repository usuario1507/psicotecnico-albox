/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { UsuarioRepository } from 'src/usuarios/entities/usuariorepository';
import { PassportModule } from '@nestjs/passport';
import { RolesRepository } from 'src/usuarios/entities/rolrepository';

@Module({

  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      UsuarioRepository
    ]),
    PassportModule.register({ defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      imports: [ ConfigModule ], 
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h',
            algorithm: 'HS256'
          }
        }
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuarioRepository, RolesRepository, JwtStrategy, ConfigService],
  exports: [ ConfigService ]
})
export class AuthModule {
}
