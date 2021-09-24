import * as repo from "../repos/repoTestimonios.js";

export function getAll(req, res) {
    repo.getAll()
        .then(function(testimonios) {
            res.status(200).send(testimonios)
        })
        .catch(function() {
            res.status(500).send({ err: 500, msg: "No se pudo leer el archivo" })
        })
}

export function deleteById(req, res) {
    repo.deleteById(req.params.id)
        .then(function(juego) {
            if (!juego)
                res.status(200).json(juego);
            else
                res.status(404).json({ err: 404, msg: "No se pudo encontrar el registro" })

        })
        .catch(function() {

            res.status(500).json({ err: 500, msg: "No se pudo leer el archivo" });
        })
}

export function patchById(req, res) {
    repo.activateById(req.params.id)
        .then(function(juego) {
            if (!juego)
                res.status(200).json(juego);
            else
                res.status(404).json({ err: 404, msg: "No se pudo encontrar el registro" })
        })
        .catch(function() {
            res.status(500).json({ err: 500, msg: "No se pudo leer el archivo" });
        })
}