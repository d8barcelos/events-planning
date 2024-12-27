import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Especifica o driver Apollo
      autoSchemaFile: true, // Gera o schema automaticamente
      playground: true, // Ativa o playground do GraphQL
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'admin',
      database: process.env.DATABASE_NAME || 'events_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Apenas para desenvolvimento
    }),
    EventModule,
  ],
})
export class AppModule {}
