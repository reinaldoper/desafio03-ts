import { changeRemoteStorage } from "../services/storage";
import { Tstate } from "./Tstate";
import { api } from "../api";


 export const detailsUser = async (): Promise<void> => {
  const state: Tstate | any = await api
  changeRemoteStorage('balance', state.balance)
  changeRemoteStorage('name', state.name)
  changeRemoteStorage('email', state.email)
}

export const logar = async (): Promise<unknown | string> => {
  const state: Tstate | any = await api
  return state.id as unknown | string
}