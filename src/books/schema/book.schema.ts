import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Genre } from "src/common/enums/genre.enum";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({ type: Types.ObjectId, auto: true })
    id: string;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: String, required: true })
    author: string;

    @Prop({ type: Date, required: true })
    publicationDate: Date;

    @Prop({ type: String, required: true })
    genre: Genre;

    @Prop({ type: Boolean, default: false, select: false })
    isDeleted: Boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
