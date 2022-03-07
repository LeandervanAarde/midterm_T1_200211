import axios from "axios";

axios.get('https://api.spacexdata.com/v4/crew')
.then((response) =>{

console.log(response);
console.log(response.data[1].name)

})
.catch((err) =>{

console.log(err)
});

const CompontentOne = () =>{
    return(
        <h1>This is a component one </h1>

    );
}

export default CompontentOne;