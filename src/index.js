const TelegramBot = require('node-telegram-bot-api')
const config = require('./config.js')
const helper = require('./helper.js')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
const fs = require('fs')

helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})


bot.on('message', msg => {
    console.log('Working', msg.from.first_name)

    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.home.seo:
            bot.sendMessage(chatId, 'Выберите тип продвигаемого сайта:', {
                reply_markup: {keyboard: keyboard.seo_prices}
            })
            break
        case kb.seo_price.site_1:

            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/site1.png')).then(() => {
            // bot.sendMessage(chatId, 'Заказать продвижение сайта услуг https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
            // })
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.seo_price.site_2:
            // bot.sendMessage(chatId, 'https://msk.lapkinlab.ru/seo')
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/site2.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет магазина https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }

                            ],
                            [
                                {
                                text: 'Задать вопрос',
                                url: 'https://t.me/LapkinLAb'
                            }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.seo_price.site_3:
            // bot.sendMessage(chatId, 'https://msk.lapkinlab.ru/seo')
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/site3.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.home.ppc:
            bot.sendMessage(chatId, 'Выберите тариф:', {
                reply_markup: {keyboard: keyboard.ppc_prices}
            })
            break
        case kb.ppc_price.price_1:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/vrazrabotke.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.ppc_price.price_2:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/vrazrabotke.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.ppc_price.price_3:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/vrazrabotke.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })

            break
        case kb.home.audit:
            bot.sendMessage(chatId, 'Выберите тип аудита:', {
                reply_markup: {keyboard: keyboard.audit_prices}
            })
            break
        case kb.audit_price.audit_seo:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/audit_seo.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/seo'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.audit_price.audit_ppc:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/audit_rk.jpg')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/kontekstnaya-reklama'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.audit_price.audit_smm:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/audit_smm.jpg')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/smm'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.home.telega:
            bot.sendMessage(chatId, 'Выберите тип бота:', {
                reply_markup: {keyboard: keyboard.telega_prices}
            })
            break
        case kb.telega_price.telega_1:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/vrazrabotke.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.telega_price.telega_2:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/chatbot.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'http://chatbot.lapkinlab.ru/'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.telega_price.telega_3:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/vrazrabotke.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.back:
            bot.sendMessage(chatId, 'Какая услуга Вас интересует?', {
                reply_markup: {keyboard: keyboard.home}
})
            break
    }

})

bot.onText(/\/start/, msg => {

    const text = `Здравствуйте, ${msg.from.first_name}\nВыберите интересующую Вас услугу:`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })

})
