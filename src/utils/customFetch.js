let resoult = true

export const customFetch = (time, task) => {
    return new Promise((resolve, reject,err) => {
        setTimeout(() => {
            if (resoult) {
                resolve(task)
            } else {
                reject(err)
            }
        }, time)
    })
}