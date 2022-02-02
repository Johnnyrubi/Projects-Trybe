from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, list):
        valor_empresas = ""
        simple_report = SimpleReport.generate(list)
        empresas = cls.EMPRESA
        for key, value in empresas.items():
            valor_empresas += f"- {key}: {value}\n"

        return(
            f"{simple_report}\n"
            "Produtos estocados por empresa: \n"
            f"{valor_empresas}"
            )

        # print(
        #     f'{simple_report}\n',
        #     'Produtos estocados por empresa:\n',
        #     f"{valor_empresas}\n"
        # )
