function genTrendData(data, type) {
  return data.reduce((pre, { date, data: citiesData }) => {

    const addedData = citiesData.reduce((p, c) => {
      const { label, sumCount } = c;
      return [...p, [label, date, sumCount[type]]];
    }, []);

    return [...pre, ...addedData];

  }, []);
}

export {
  genTrendData
}