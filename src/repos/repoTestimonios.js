import fs from "fs";

export async function getAll() {
    return fs.promises.readFile("./src/data/testimonios.json")
        .then(function(data) {
            const testimonios = JSON.parse(data)
            return testimonios;
        })
}

export async function deleteById(id) {
    return fs.promises.readFile("./src/data/testimonios.json")
        .then(function(data) {
            const testimonios = JSON.parse(data);
            const testimonio = testimonios.find(t => t.id == id);
            testimonio.active = false;
            return fs.promises.writeFile("./src/data/testimonios.json", JSON.stringify(testimonios))
                .then(function() {
                    return testimonio //hasta aca llega bien
                })
        })
}

export async function activateById(id) {
    return fs.promises.readFile("./src/data/testimonios.json")
        .then(function(data) {
            const testimonios = JSON.parse(data);
            const testimonio = testimonios.find(t => t.id == id);
            testimonio.active = true;
            return fs.promises.writeFile("./src/data/testimonios.json", JSON.stringify(testimonios))
                .then(function() {
                    return testimonio
                })
        })
}

export async function add(testimony) {
    return fs.promises.readFile("./src/data/testimonios.json")
        .then(function(data) {
            const testimonios = JSON.parse(data);
            testimony.active = false;
            testimony.id = testimonios.length;
            testimonios.push(testimony);
            return fs.promises.writeFile("./src/data/testimonios.json", JSON.stringify(testimonios))
        })
        .catch(function() {
            const testimonios = [];
            testimony.active = false;
            testimony.id = testimonios.length;
            return fs.promises.writeFile("./src/data/testimonios.json", JSON.stringify(testimonios))
        })
        .then(function() {
            return testimony
        })
}

export async function getAllActive() {
    return fs.promises.readFile("./src/data/testimonios.json")
        .then(function(data) {
            const testimonios = JSON.parse(data)
            return testimonios.filter(t => t.active);
        })
}