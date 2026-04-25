//Fetching data from internet.

async function getData() {
    console.log("Receveing data from the internet...");

    try {
        // 1st Await: Pauses to establish the network connection and receive the HTTP headers (the "Delivery Box"). The actual data body is not fully downloaded yet.
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        //2nd Await: Pauses because reading the full data stream and parsing the raw JSON text into a readable JavaScript Object takes CPU processing time.
        const actualData = await response.json();

        console.log(`Success! Data Found`);
        console.log(`User Name: ${actualData.name}`);
        console.log(`User Email: ${actualData.email}`);
    }

    catch (error) {
        console.log(`Failed to fetch data: ${error}`);
    }

}

getData();