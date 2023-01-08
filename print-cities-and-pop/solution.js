const cities = {Austin: 1234, "El Paso": 43234, Houston: 12312, Dallas: 2341,}

const list = Object.entries(cities).sort((a, b) => {
    return a[1] > b[1] ? 1 : -1
}).map(([key, val]) => {
    console.log(key, val)
})
