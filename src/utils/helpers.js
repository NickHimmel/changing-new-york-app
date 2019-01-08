export const thenPhoto = (items, mods) => {
  const itemsRoot = items.data.nyplAPI.response.capture[0];
  const modsRoot = mods.data.nyplAPI.response.mods;

  return {
    thenPhoto: {
      uuid: itemsRoot.uuid,
      title: itemsRoot.title,
      note: getNote(modsRoot.note),
      photographer: 'Berenice Abbott',
      date: formatDate(modsRoot.originInfo.dateCreated.$),
      image: itemsRoot.imageLinks.imageLink[3],
      item_link: itemsRoot.itemLink,
      rights: "From The New York Public Library",
      rights_link: itemsRoot.rightsStatementURI
    }
  }
}

export const findByUuid = (items, uuid) => {
  return items.filter((item) => item.uuid === uuid);
}

const getNote = (notes) => {
  const getNotes = notes.map(note => note.$)
  return getNotes.reduce((a, b) => {return a.length > b.length ?  a : b});
}

const formatDate = (date) => {
  const MONTH = date.slice(5, 7);
  const DAY = date.slice(8, 10);
  const YEAR = date.slice(0, 4);
  return MONTH + "/" + DAY + "/" + YEAR;
}
