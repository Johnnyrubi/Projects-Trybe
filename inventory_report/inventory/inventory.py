from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import csv


class Inventory():
    @staticmethod
    def import_data(path, tipo):
        with open(path, mode="r") as file:
            status_reader = list(csv.DictReader(file))
            if tipo == "simples":
                return SimpleReport.generate(status_reader)
            else:
                return CompleteReport.generate(status_reader)
