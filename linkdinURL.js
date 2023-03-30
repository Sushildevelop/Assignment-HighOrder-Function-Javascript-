const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const testUrl1 = 'https://www.linkedin.com/in/shushil123';
const testUrl2 = 'https://www.linkedin.com/in/shushil_chaubey';
const testUrl3 = 'https://www.linkedin.com/in/shushil_THird_Year';
const testUrl4 = 'https://www.linkedin.com/in/shushil_Fourth_year';

if (regex.test(testUrl1)) {
    console.log(testUrl1 + 'is a valid profile URL');
} else {
    console.log(testUrl1 + ' is not a valid profile URL');
}

if (regex.test(testUrl2)) {
    console.log(testUrl2 + 'is a valid profile URL');
} else {
    console.log(testUrl2 + ' is not a valid profile URL');
}
if (regex.test(testUrl3)) {
    console.log(testUrl3 + 'is a valid profile URL');
} else {
    console.log(testUrl3 + ' is not a valid profile URL');
}
if (regex.test(testUrl4)) {
    console.log(testUrl4 + 'is a valid profile URL');
} else {
    console.log(testUrl4 + ' is not a valid profile URL');
}