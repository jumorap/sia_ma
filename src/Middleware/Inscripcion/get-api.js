import apiUrl from "../api-url";
import queryAsset from "../queryAsset";
import {queryCursosByCodigoAsignatura} from "./queries";


export const getCursosByCodigoAsignatura = async (id_asignature) => {
  return queryAsset(queryCursosByCodigoAsignatura({ id_asignature }), apiUrl.Inscripciones.get);
};