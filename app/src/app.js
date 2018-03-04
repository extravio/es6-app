import * as jQuery from 'node_modules/jquery/dist/jquery.min.js';

import {
    Car
}
from './classes/car.js';

import {
    Drone
}
from './classes/drone.js';

import {
    fleet
}
from './fleet-data.js';

import {
    FleetDataService
}
from './services/fleet-data-service.js';

import {
    Button
}
from './ui/button.js';

import {
    Image
}
from './ui/image.js';

import {
    TitleBar
}
from './ui/title-bar.js';

import {
    DataTable
}
from './ui/data-table.js';


let tb = new TitleBar('My application');
let button = new Button('Click me!');
let img = new Image('http://3.bp.blogspot.com/-k-wjROgOmWQ/TWmDviI5bJI/AAAAAAAAAZ0/3f0Vs2-MKq8/s1600/surfing2.jpg');

let headers = ['license', 'make', 'model', 'miles'];
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);


let $app = $('#app');

tb.addLink('Home', '/home');
tb.addLink('About', '/about');
tb.appendToElement($app);
img.appendToElement($app);
dt.appendToElement($app);
button.appendToElement($app);


//console.log(dataService.cars);
//console.log(dataService.drones);
//console.log(dataService.errors);
//let car = dataService.getCarByLicense('AT2020');
//console.log(car);