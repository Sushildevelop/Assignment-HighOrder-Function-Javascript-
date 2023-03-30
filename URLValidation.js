const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]$/;

const testUrl1 = 'http://www.google.com';
const testUrl2 = 'https://example.com';
const testUrl3 = 'ftp://example.com';

if (regex.test(testUrl1)) {
    console.log(testUrl1 + 'is a valid URL');
} else {
    console.log(testUrl1 + 'is not a valid Url');
}

if (regex.test(testUrl2)) {
    console.log(testUrl2 + 'is a valid URL');
} else {
    console.log(testUrl2 + 'is not a valid URL');
}

if (regex.test(testUrl3)) {
    console.log(testUrl3 + 'is  a valid URL');
} else {
    console.log(testUrl3 + 'is not a valid URL');
}