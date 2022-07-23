import { Document } from "mongoose";
export interface Event extends Document {
    // readonly name: string;
    // readonly user: string;
    // readonly description: string;
    // readonly createdAt: Date;
    //

    readonly start: Date
    // readonly end: Date
    readonly title: String
    // readonly color: {
    //     primary: String,
    //     secondary: String
    // }
    // readonly actions: {
    //     label: String,
    //     a11yLabel: String
    // }
    // readonly allDay:boolean
    // readonly draggable: Boolean
    // readonly resizable :{
    //     beforeStart: Boolean
    //     afterEnd: Boolean
    // }

}