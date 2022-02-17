import requests
import time
from tech_news.database import create_news
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
    s = Selector(text=html_content)
    url = s.css("head link[rel=canonical]::attr(href)").get()
    title = s.css(".tec--article__header__title::text").get()
    timestamp = s.css("time::attr(datetime)").get()
    writer = s.css(".z--font-bold *::text").get()
    shares = s.css(".tec--toolbar__item::text").get()
    comments = s.css("#js-comments-btn::attr(data-count)").get()
    summary = s.css(".tec--article__body > p:nth-child(1) *::text").getall()
    sources = s.css(".z--mb-16 .tec--badge::text").getall()
    categories = s.css("#js-categories a::text").getall()

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer.strip(),
        "shares_count": int(shares.split()[0]) if shares else 0,
        "comments_count": int(comments) if comments else 0,
        "summary": "".join(summary),
        "sources": [item.strip() for item in sources],
        "categories": [item.strip() for item in categories],
    }


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
    url_page = "https://www.tecmundo.com.br/novidades"
    cont = 0
    news = []
    
    while url_page:
        new_link = fetch(url_page)
        link = scrape_novidades(new_link)
        for new in link:
            new_page = fetch(new)
            notice = scrape_noticia(new_page)
            news.append(notice)
            cont += 1
            if cont == amount:
                break
        url_page = scrape_next_page_link(new_link)
        if not url_page or cont == amount:
            break
    
    create_news(news)
    return news[:amount]

