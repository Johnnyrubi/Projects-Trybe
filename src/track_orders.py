from src.analyze_log import (
    FavoriteFood,
    daysWhoClientNotGo,
    foodNeverRequest,
)


class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        return self.orders.append({"costumer": costumer,
                                  "order": order, "day": day})

    def get_most_ordered_dish_per_costumer(self, costumer):
        return FavoriteFood(self.orders, costumer)

    def get_never_ordered_per_costumer(self, costumer):
        return foodNeverRequest(self.orders, costumer)

    def get_days_never_visited_per_costumer(self, costumer):
        return daysWhoClientNotGo(self.oders, costumer)

    def get_busiest_day(self):
        days = [i["day"] for i in self.orders]
        return max(days, key=days.count)

    def get_least_busy_day(self):
        pass
