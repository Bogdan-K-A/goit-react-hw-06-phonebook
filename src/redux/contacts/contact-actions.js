import { createAction } from '@reduxjs/toolkit'
import { ADD, DELETE, GET } from '../../redux/types'

export const addContact = createAction(ADD)
export const contactDelete = createAction(DELETE)
export const getContactFromLocaleStorage = createAction(GET)
