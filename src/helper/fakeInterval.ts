export const fakeInterval = async (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}