let lang = 'pashto';

switch(lang) {
    case 'english':
        console.log('Spoken Wordwide');
        break;
    case 'urdu':
    case 'pashto':
        console.log('Spoken mostly in Pakistan');
        break;
    case 'punjabi':
        console.log('Spoken in Punjab');
        break;
    default:
        console.log(`We don't know about ${lang}`)
}