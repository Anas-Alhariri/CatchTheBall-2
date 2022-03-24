//@ts-check
async function sleep(ms) {
    console.log("sleep function is called")
    return new Promise(r => setTimeout(r, ms))
}


export default sleep