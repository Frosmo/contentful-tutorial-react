import Hero from 'components/hero'
import { render } from 'reactDOM'
import contentful from 'contentful'

const contentfulConfig = require('../../../../.contentful')

const element = positionData.getMessageInstance().getElements().pop();
const personName = message.template.defaults.person;

const client = window.contentful.createClient({
    space: contentfulConfig.spaceId,
    accessToken: contentfulConfig.accessToken
});
client.getEntries({
    content_type: 'person',
    'fields.name': personName
})
    .then(renderElement);

function renderElement(entries) {
    console.log('render', entries.items[0].fields)
    render(<Hero data={entries.items[0].fields} />, element);
}