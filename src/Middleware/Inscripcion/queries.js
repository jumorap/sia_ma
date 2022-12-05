export const queryCursosByCodigoAsignatura = (args) => `
    {
      cursosByCodigoAsignatura(codigo_asignatura: "${args}") {
        id_curso
        codigo_asignatura
        grupo
        horarios{
          dia
          hora_inicio
          hora_fin
          salon
          documento_profesor
          tipo
        }
        cupos_disponibles
        cupos_totales
      }
    }
`;

