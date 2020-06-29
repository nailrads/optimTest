export const PERSONAL_HOROSCOPE_TO_YOU_IN_THE_MAIL = [
    {
        type: 1,
        steps: [
            {
                step: 'intro',
                title: 'личный гороскоп \n у тебя на почте',
                subtitle: 'Планируй свой день вместе с \n Cosmopolitan',
                button: {
                    text: 'попробовать',
                },
                fields: [
                    {
                        slug: 'email',
                        name: 'Email',
                        type: 'email',
                        placeholder: 'Email',
                        validationText: 'Введен недопустимый адрес'
                    },
                    {
                        slug: 'name',
                        name: 'Имя',
                        type: 'text',
                        placeholder: 'Имя',
                        validationText: 'Имя должно содержать не меньше двух букв'
                    },
                    {
                        slug: 'birthday',
                        name: 'Дата рождения',
                        type: 'email',
                        placeholder: 'Email',
                        validationText: 'Некорректно заполненна дата рождения'
                    },
                    {
                        slug: 'terms',
                        name: `Я соглашаюсь c <a href="https://www.cosmo.ru/usage/" target="_blank">Правилами сайта'</a>`,
                        type: 'checkbox',
                        placeholder: null,
                        validationText: ''
                    },
                ],
                image: {
                    default: {
                        source: { // Если передать source, то параметр block для Picture не нужен
                            webp: '',
                            init: ''
                        }
                    },
                    retina: {
                        source: {
                            webp: '',
                            init: ''
                        }
                    }
                }
            },
            {
                step: 'end',
                title: 'Спасибо!',
                subtitle: 'Мы отправили на твой email письмо с \n подтверждением.',
                button: {
                    text: 'перейти на сайт'
                },
                image: {
                    default: {
                        source: { // Если передать source, то параметр block для Picture не нужен
                            webp: '',
                            init: ''
                        }
                    },
                    retina: {
                        source: {
                            webp: '',
                            init: ''
                        }
                    }
                }
            }
        ]
    },
    {
        type: 2, //  Другие тексты, другие картинки, другой цвет кнопок и тд
        steps: [
            {
                step: 'intro',
                title: 'личный гороскоп \n у тебя на почте',
                subtitle: 'Каждый день!',
                button: {
                    text: 'попробовать',
                },
                fields: [
                    {
                        slug: 'email',
                        name: 'Email',
                        type: 'email',
                        placeholder: 'Email',
                        validationText: 'Введен недопустимый адрес'
                    },
                    {
                        slug: 'name',
                        name: 'Имя',
                        type: 'text',
                        placeholder: 'Имя',
                        validationText: 'Имя должно содержать не меньше двух букв'
                    },
                    {
                        slug: 'birthday',
                        name: 'Дата рождения',
                        type: 'email',
                        placeholder: 'Email',
                        validationText: 'Некорректно заполненна дата рождения'
                    },
                    {
                        slug: 'terms',
                        name: `Я соглашаюсь c <a href="https://www.cosmo.ru/usage/" target="_blank">Правилами сайта'</a>`,
                        type: 'checkbox',
                        placeholder: null,
                        validationText: ''
                    },
                ],
                image: {
                    default: {
                        source: { // Если передать source, то параметр block для Picture не нужен
                            webp: '',
                            init: ''
                        }
                    },
                    retina: {
                        source: {
                            webp: '',
                            init: ''
                        }
                    }
                }
            },
            {
                step: 'end',
                title: 'Спасибо!',
                subtitle: 'Мы отправили на твой email письмо с \n подтверждением.',
                button: {
                    text: 'перейти на сайт'
                },
                image: {
                    default: {
                        source: { // Если передать source, то параметр block для Picture не нужен
                            webp: '',
                            init: ''
                        }
                    },
                    retina: {
                        source: {
                            webp: '',
                            init: ''
                        }
                    }
                }
            }
        ]
    }
];
