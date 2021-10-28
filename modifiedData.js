import { animals } from './animalData.js';

let animalsSay = animals.map((animalName)=>{
    return animalName + "Say";
});

export { animalsSay };