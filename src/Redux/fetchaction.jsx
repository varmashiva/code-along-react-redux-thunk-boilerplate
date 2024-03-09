import { data } from "./action"

const fetch_data = () => (dispatch, state) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => { return data.json() }).then((result) => {
            // console.log(ata)
            dispatch({ type: data, payload: result })
        })
}
export default fetch_data;