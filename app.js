function colorGenerate() {
    let num_alpha = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a','b','c','d','e', 'f'];
    let hass = '#'; 

    for(let i = 0; i<6; i++) {
        let number = Math.round(Math.random()*15);
        let number2 = num_alpha[number];
        hass += number2;
    }

    document.getElementById('container').style.backgroundColor = hass;
	document.getElementById('output').style.color = hass;
	document.getElementById('output').innerHTML = hass;
}