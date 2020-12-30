export function wait(time, func){
	setTimeout(() => {
		func();
	}, time);
}

export function isEmailValid(email){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export async function sendGetRequest(url){
    let response = await fetch(url);
    let json = await response.json();

	return json;
}

export async function sendPostRequest(url, data){
	let response = await fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	
	let json = await response.json();

	return json;
}

export function getRandom(min, max){
	return myMap(Math.random(), 0, 1, min, max);
}

export function myMap(val, minF, maxF, minT, maxT){
	return minT + (((val - minF)/(maxF - minF)) * (maxT - minT));
}