function sortBy(data, flag = 'confirmed') {
  data.sort(({ sumCount: asc }, { sumCount: bsc }) => asc[flag] > bsc[flag] ? -1 : 1);
}

function appendAllCount(data) {
  const allCount = data.reduce((p, c) => {
    for (let k in p) {
      if (k === 'label') {
        continue;
      }
      const pval = p[k];
      const cval = c[k];

      p[k] = {
        confirmed: (pval.confirmed || 0) + cval.confirmed,
        cured: (pval.cured || 0) + cval.cured,
        dead: (pval.dead || 0) + cval.dead
      };
    }

    return p;
  }, {
    label: '全市累计',
    incCount: {},
    sumCount: {}
  });

  data.push(allCount);
}

export {
  sortBy,
  appendAllCount
};