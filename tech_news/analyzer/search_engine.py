import re
from tech_news.database import search_news

# Requisito 6


def search_by_title(title):
    """Seu código deve vir aqui"""
    new_itens = []
    all_news = search_news({"title": re.compile(title, re.IGNORECASE)})

    for item in all_news:
        new_itens.append((item["title"], item["url"]))
    return new_itens


# Requisito 7
def search_by_date(date):
    """Seu código deve vir aqui"""


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
