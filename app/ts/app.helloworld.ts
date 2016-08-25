import {Component} from 'angular2/core';

@Component({
    selector:'hello',
    template:'<p style="color:red;">{{header}}</p>'
})

export class AppHelloworld{
    header = "Hello from contorller";

}
