import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Prueba en suthreducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false}, {} );
        expect(state).toEqual({logged: false});
    })

    test('Autenticar a un usuario a traves del nombre', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Bethsy'
            }
        }

        const state = authReducer({logged:false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Bethsy'
        })
    })

    test('debe de borrar el nombre del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({logged:false, name: 'Bethsy'}, action);
        expect(state).toEqual({
            logged: false
        })
    })
})