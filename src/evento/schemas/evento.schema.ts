
import {Schema} from 'mongoose'

export const EventSchema = new Schema({
    // name:{type: String , required: true },
    // description: String,
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
    start: Date,
    // end: Date,
    title: {type:String , required: true},
    // color: {
    //     primary: String,
    //     secondary: String
    // },
    // actions: {
    //     label: String,
    //     a11yLabel: String
    // },
    // allDay: Boolean,
    // draggable: Boolean,
    // resizable :{
    //     beforeStart: Boolean,
    //     afterEnd: Boolean
    // }
});
