async function fetchData(): Promise<unknown> {
    const response = fetch('https:api.example.com/data');
    const data = (await response).json();
    return data;
}

async function processData() {
    const response = await fetchData();

    if(typeof response === 'object') {
        console.log(response);
    }
}
