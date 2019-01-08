export const thenPhoto = (items, mods) => {
  const itmesRoot = items.data.nyplAPI.response.capture[0];
  const modsRoot = mods.data.nyplAPI.response.mods;

  console.log(itmesRoot);
  console.log(modsRoot);
  return {
    thenPhoto: {
      uuid: itmesRoot.uuid,
      title: itmesRoot.title,
      note: getNote(modsRoot.note),
      photographer: 'Berenice Abbott',
      date: formatDate(modsRoot.originInfo.dateCreated.$),
      image: itmesRoot.imageLinks.imageLink[3],
      image: itmesRoot.itemLink,
      rights: "From The New York Public Library",
      rights_link: itmesRoot.rightsStatementURI
    }
  }
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
