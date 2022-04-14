import re
import datetime
from tech_news.database import search_news

# Requisito 6


def search_by_title(title):
    """Seu código deve vir aqui"""
    new_itens = []
    news = search_news({"title": re.compile(title, re.IGNORECASE)})

    for item in news:
        new_itens.append((item["title"], item["url"]))
    return new_itens


# Requisito 7
def search_by_date(date):
    """Seu código deve vir aqui"""
    try:
        datetime.date.fromisoformat(date)
        news = search_news({"timestamp": re.compile(date)})
        return [(item["title"], item["url"]) for item in news]
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""
    news = search_news({"sources": re.compile(source, re.IGNORECASE)})
    return [(item["title"], item["url"]) for item in news]


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
    news = search_news({"categories": re.compile(category, re.IGNORECASE)})
    return [(item["title"], item["url"]) for item in news]
