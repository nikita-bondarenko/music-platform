import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";


@Module({
imports: [  ServeStaticModule.forRoot({
    rootPath: path.resolve(__dirname, 'static'),
}),MongooseModule.forRoot('mongodb+srv://narada:NCUZeNHbiSC8ssLy@cluster0.ib51pco.mongodb.net/music-platform'),TrackModule, FileModule]
})
export class AppModule {}