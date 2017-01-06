import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WorkoutService{
    http: any;
    apiKey: string;
    workoutsUrl: string;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'RbaRd0gIu4PMroj12PDYWtUgSDLZiDfu';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts_udemy_12apps/collections/workouts';
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
}