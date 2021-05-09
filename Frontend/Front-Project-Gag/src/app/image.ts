import { ImageType } from './image-type';

export class Image {
    public uid: string;
    public title: string;
    public base64Image: string;
    public rating: number;
    public imageTypeID: string;
    public imageType: ImageType;

}
