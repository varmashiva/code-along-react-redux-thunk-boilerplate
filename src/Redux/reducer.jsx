import { data } from "./action"

const init = []
function reducer(state = init, action) {
    const { type, payload } = action
    switch (type) {
        case data:
            state = payload
            return state
        default:
            return state
    }
}
export default reducer