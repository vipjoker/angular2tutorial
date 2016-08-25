import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
@Component({
    selector:'hello',
    templateUrl:'app/ts/header.html',
    directives:[AppHelloworld]
})

export class AppHelloworld{
    header = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1,"First","232321", "Super cat"),
            new Video(2,"Second","232321", "Dog"),
            new Video(3,"Third","232321", "Crazy frog"),
            new Video(4,"Fourth","232321", "fun")
        ];
    }

}
