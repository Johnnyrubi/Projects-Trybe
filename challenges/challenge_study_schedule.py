def study_schedule(permanence_period, target_time):
    """ Faça o código aqui. """
    contador = 0
    if (target_time is None):
        return None
    for i in permanence_period:
        if(type(i[0]) is not int or type(i[1]) is not int):
            return None
        if(i[0] <= target_time and target_time <= i[1]):
            contador += 1
    return contador
