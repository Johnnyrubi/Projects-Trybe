from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import csv
import json


class Inventory():
    @staticmethod
    def import_data(path, tipo):
        with open(path, mode="r") as file:
            if path.endswith(".csv"):
                status_reader = list(csv.DictReader(file))
            if path.endswith(".json"):
                status_reader = json.load(file)
            if tipo == "simples":
                return SimpleReport.generate(status_reader)
            else:
                return CompleteReport.generate(status_reader)
