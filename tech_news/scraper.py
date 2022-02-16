import requests
import time
from parsel import Selector

# site = https://quotes.toscrape.com/
# Requisito 1


def fetch(url, timeout=3):
    """Seu código deve vir aqui"""
    time.sleep(1)
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return None
    else:
        return response.text

# Requisito 2


def scrape_novidades(html_content):
    """Seu código deve vir aqui"""
    # result_fetch = fetch(html_content)
    s = Selector(html_content)
    notices = s.css(
        ".tec--list__item .tec--card__title__link::attr(href)"
              ).getall()
    return notices
    # notices = s.css(".tec--list__item .tec--card t
    # ec--card--medium .tec--card_thumb a::attr(href)").getall()


# Requisito 3
def scrape_next_page_link(html_content):
    """Seu código deve vir aqui"""
    # result_fetch = fetch(html_content)
    s = Selector(html_content)
    next_page = s.css(
        ".tec--list.tec--list--lg .tec--btn::attr(href)"
              ).get()
    return next_page

# Requisito 4
def scrape_noticia(html_content):
    """Seu código deve vir aqui"""


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
