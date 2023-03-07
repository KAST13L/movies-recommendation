import {LOCALES} from "../variables";

export default {
    [LOCALES.UKRAINIAN]: {
        'navigation': {
            'home': 'Рекомендації фільмів',
            'settings': 'Налаштування',
            'en':'АНГ',
            'uk':'УКР'
        },
        'no_selected_movies': 'Немає вибраних фільмів...',
        'form_input_placeholder': 'введіть назву для сформованого спику фільмів',
        'share_with_friends': 'Поділитися з друзями',
        'copied': 'Скопійовано!',
        'select': 'Вибрати',
        'required': 'Обовязкове поле',
        'title_movies_list':'Назва списку фільмів:',
        'share_link':'Поділитися посиланям через:',
        'copy_link':'Або скопіювати посилання:',
        filters: {
            sort_by: 'Сортувати по',
            sort_direction: 'Напрямок',
            include_adult: 'Включно 18+',
            year: 'Рік',
            release_year: 'Рік випуску',
            genre: 'Жанр',
            submit: 'Пошук',
            sort: {
                'popularity': 'Популярність',
                'release_date': 'Дата випуску',
                'revenue': 'Дохід',
                'primary_release_date': 'Першочергова дата релізу',
                'original_title': 'Оригінальна назва',
                'vote_average': 'Середня оцінка',
                'vote_count': 'Кількість оцінок'
            },
            sort_direction_options: {
                asc: 'ASC',
                desc: 'DESC'
            }
        }
    },
};