import {
    Car
}
from '../classes/car.js';

import {
    Drone
}
from '../classes/drone.js';

import {
    DataError
}
from './data-error.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    getCarByLicense(license) {
        return this.cars.find(item => (item.license == license))
    }

    loadData(fleet) {
        this.cars = fleet
            .filter(item => (item.type == 'car'))
            .map(item => {
                return this.loadCar(item)
            });
        this.drones = fleet
            .filter(item => (item.type === 'drone'))
            .map(item => {
                return this.loadDrone(item)
            });
    }

    loadCar(item) {
        try {
            if (this.validateCarData(item)) {
                let c = new Car(item.license, item.model, item.latLong);
                c.make = item.make;
                c.miles = item.miles;
                return c;
            } else {
                this.errors.push(new DataError('invalid car data', item));
            }
        } catch (e) {
            this.errors.push(new DataError('error loading car', item));
        }
        return null;
    }

    loadDrone(item) {
        let d = new Drone(item.license, item.model, item.latLong);
        d.airTimeHours = item.airTimeHours;
        d.base = item.base;
        return d;
    }

    validateCarData(item) {
        let hasErrors = false;
        let requiredProps = ['license', 'model', 'latLong', 'make', 'miles'];
        for (let field of requiredProps) {
            if (!item[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, item));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}