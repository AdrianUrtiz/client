const filterSingleQuery = (posgrados: any, state: any) => {
  if (state.tipoPlantel) {
    return filterByTipoPlantel(posgrados, state);
  }

  if (state.plantel) {
    return filterByName(posgrados, state);
  }

  return posgrados;
};

const filterDoubleQuery = (posgrados: any, state: any) => {
  if (
    (state.programa && state.tipoPlantel) ||
    (state.modalidad && state.tipoPlantel)
  ) {
    return filterByTipoPlantel(posgrados, state);
  }

  if ((state.programa && state.plantel) || (state.modalidad && state.plantel)) {
    return filterByName(posgrados, state);
  }

  if (state.plantel && state.tipoPlantel) {
    return filterByNameAndTipo(posgrados, state);
  }

  return posgrados;
};

const filterTripleQuery = (posgrados: any, state: any) => {
  if (state.programa && state.modalidad && state.plantel) {
    return filterByName(posgrados, state);
  }

  if (state.programa && state.plantel && state.tipoPlantel) {
    return filterByNameAndTipo(posgrados, state);
  }

  if (state.programa && state.modalidad && state.tipoPlantel) {
    return filterByTipoPlantel(posgrados, state);
  }

  if (state.plantel && state.modalidad && state.tipoPlantel) {
    return filterByNameAndTipo(posgrados, state);
  }

  return posgrados;
};

const filterByTipoPlantel = (posgrados: any, state: any) => {
  posgrados.data.map((posgrado: any) => {
    const planteles = posgrado.attributes.plantels.data;
    const filteredPlantel = planteles.filter((plantel: any) => {
      return plantel.attributes.tipoPlantel === state.tipoPlantel;
    });
    posgrado.attributes.plantels.data = filteredPlantel;
  });

  return posgrados;
};

const filterByName = (posgrados: any, state: any) => {
  posgrados.data.map((posgrado: any) => {
    const planteles = posgrado.attributes.plantels.data;
    const filteredPlantel = planteles.filter((plantel: any) => {
      return plantel.attributes.nombrePlantel === state.plantel;
    });
    posgrado.attributes.plantels.data = filteredPlantel;
  });

  return posgrados;
};

const filterByNameAndTipo = (posgrados: any, state: any) => {
  let emptyPosgrados: any = [];
  posgrados.data.forEach((posgrado: any) => {
    const planteles = posgrado.attributes.plantels.data;
    const filteredPlantel = planteles.filter((plantel: any) => {
      return (
        plantel.attributes.nombrePlantel === state.plantel &&
        plantel.attributes.tipoPlantel === state.tipoPlantel
      );
    });

    if (filteredPlantel.length === 0) {
      emptyPosgrados.push(posgrado.id);
    }

    posgrado.attributes.plantels.data = filteredPlantel;
  });

  if (emptyPosgrados.length === posgrados.data.length) {
    return { data: [] };
  }
  return posgrados;
};

export {
  filterSingleQuery,
  filterDoubleQuery,
  filterTripleQuery,
  filterByNameAndTipo,
};
