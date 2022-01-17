import { createAction } from '@reduxjs/toolkit'
import { ADD, DELETE, GET } from '../../redux/types'
import shortid from 'shortid'

export const addContact = createAction(ADD, (name, number) => ({
  payload: { name, number, id: shortid.generate() },
}))
export const contactDelete = createAction(DELETE)
export const getContactFromLocaleStorage = createAction(GET)
