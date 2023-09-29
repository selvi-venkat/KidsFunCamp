import { Injectable } from "@angular/core";
import { SampleService } from "./sample.service";

@Injectable()
export class SampleService1 extends SampleService{
    cc=3;
    constructor(){
        super();
        this.cc=44;
        console.log(this.count);
        console.log(this.cc);
    }
}