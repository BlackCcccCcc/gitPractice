import { Evet, Place } from "./types";

let helloWorld: string;
let a:number;
let b:string;
let someWhere: Place ={
    Plant: '蓝色星球',
    country: '核泽之乡',
    provice: '东京都',
    street: '下北泽 '
}
let eva00:Evet = {
    event:  "下北泽红茶事件",
    date: new Date,
    roles: ['24岁的学生','红茶师','健身教练'],
    location: someWhere
}
console.log(eva00);

