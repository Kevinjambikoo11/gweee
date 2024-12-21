let handler = async (m, { client, Access, text }) => {
    client.sendMessage(m.chat, {
        text: "tos" },
            { quoted:m })
}


handler.command = ["tes"]

module.exports = handler
