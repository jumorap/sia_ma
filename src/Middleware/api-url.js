// IPv4 address -> Get with ipconfig
const principalRoute = 'http://34.151.231.154'

const apiUrl = {
    Session: {
        get: `${principalRoute}/session`,
    },
    InfoPersonal: {
        get: `${principalRoute}/info_personal`,
    },
    InfoAcademica: {
        get: `${principalRoute}/fetch_info_academica`,
    },
    Calificaciones: {
        get: `${principalRoute}/fetch_calificaciones`,
    },
    BuscadorCursos: {
        get: `${principalRoute}/fetch_buscador_cursos`,
    },
    Inscripciones: {
        get: `${principalRoute}/fetch_inscripciones`,
    }
}

export default apiUrl
