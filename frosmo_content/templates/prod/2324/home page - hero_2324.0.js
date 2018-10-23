    var personName = message.template.defaults.name
    var client = contentful.createClient({
      space: 'gu8fgdppacx6',
      accessToken: 'dcbea169e80f3b88349915bffbde5fa34a485b674264593ae76bd2e796c3c9ed'
    });
    
    client.getEntries({
        content_type: 'person',
        'fields.name': personName
    })
        .then(render);
        
    function render(entries) {
        var entry = entries.items[0]
        document.querySelector('#contentful-person #name').innerText = entry.fields.name;
        document.querySelector('#contentful-person #title').innerText = entry.fields.title;
        document.querySelector('#contentful-person #bio').innerText = entry.fields.shortBio;
    }