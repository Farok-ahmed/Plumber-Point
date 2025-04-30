export type Plumber = {
  id: number;
  name: string;
  email: string;
  image: string;
};
export const initialPlumbers: Plumber[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    image:
      "https://img.freepik.com/free-photo/plumber-holding-plunger_1368-742.jpg?t=st=1745716611~exp=1745720211~hmac=b1d0b39f1345182eafa21cd1da5a83b2408da869cd1d709697912bb9ce7c8b20&w=740",
  },
  {
    id: 2,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    image:
      "https://img.freepik.com/free-photo/plumber-looking-up_1368-550.jpg?t=st=1745718587~exp=1745722187~hmac=99cfb7cc48127ebc7041df7e3605e870098e0dde7041d74602bbc3cdaf44ed8b&w=740",
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    image:
      "https://img.freepik.com/free-photo/plumber-doing-bad-signal_1368-724.jpg?t=st=1745718610~exp=1745722210~hmac=af997097b0d3ca71073d45bee1d03167326e2001bd6d9337b51e027cd4e7cd70&w=740",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    image:
      "https://img.freepik.com/free-photo/plumber-man_1368-738.jpg?t=st=1745718643~exp=1745722243~hmac=00e25adb3ac5699dbe0b06b57bb5dec8ed5023c26042e0d199109028ffccc0ad&w=740",
  },
];
