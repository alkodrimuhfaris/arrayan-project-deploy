const month = [
  {MM: 'Januari', mm: '01'},
  {MM: 'Februari', mm: '02'},
  {MM: 'Maret', mm: '03'},
  {MM: 'April', mm: '04'},
  {MM: 'Mei', mm: '05'},
  {MM: 'Juni', mm: '06'},
  {MM: 'Juli', mm: '07'},
  {MM: 'Agustus', mm: '08'},
  {MM: 'September', mm: '09'},
  {MM: 'Oktober', mm: '10'},
  {MM: 'November', mm: '11'},
  {MM: 'Desember', mm: '12'},
];

export default (d = '') => {
  d = d.split('T');
  const date = d[0].split('-');
  const m = month.find((o) => o.mm === date[1]);

  return `${date[2]} ${m.MM} ${date[0]}`;
};
