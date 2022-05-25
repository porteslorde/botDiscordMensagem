const Discord = require('discord.js')
const client = new Discord.Client()

const TOKEN =
  'OTc5MDIwMzU0NzEyMzkxNzUx.GD7-Ft.W6h2GD-L5AEZUPAUtPwpxMCk9w3r1a6gwuWVxo'

client.on('ready', () => {
  console.log('Funcionando...')
})

client.on('message', msg => {
  if (msg.content == 'ola') {
    msg.reply(
      'olá escolha uma opção\n\n 1- Agua \n 2- Luz \n 3- Central de Reclamação'
    )
  }
  if (msg.content == '1') {
    msg.channel.send(
      'Fornecimento de água interrompido no momento... \n\n Outras opções que não vou colocar kkkk'
    )
  }
  if (msg.content == '2') {
    msg.channel.send(
      'Fornecimento de luz normar.. \n\n outras opções que não irei colocar'
    )
  }
  if (msg.content == '3') {
    msg.reply('Qual a sua reclamação?')
  }
})

client.login(TOKEN)
