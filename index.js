const axios = require('axios')

const token = 'Bearer M2I3NjVhOGUtMThkYi00MTYxLTkwZDgtZjc1ZTIwNWRmNTczYjY4NWMzMzQtY2I0_PE93_33d69f74-a9c9-41be-80ba-7fbca5cbedc8'
const roomsUrl = 'https://webexapis.com/v1/rooms'
const msgUrl = 'https://webexapis.com/v1/messages'

let config = {
    headers: {
        'Authorization': token
    }
}

let postdata = {
    text: "Room temperature",
    markdown: "Noticed the temperature here is 5"
}

postmessage = async ( data ) => {
    try {
        let rooms = await axios.get( roomsUrl, config )
        let iotclass = rooms.data.items.filter(item => item.title == 'Karelia IoT Class')
        let roomId = iotclass[0].id
        data.roomId = roomId
        let result = await axios.post( msgUrl, data, config )
        console.log(result.data)
    } catch (err) {
        console.log(err)
    }
}

// kutsutaan funktiota
postmessage ( postdata )
