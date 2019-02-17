export const filters = [
  {
    name: "formatPrice",
    execute: value => {
      return new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
      }).format(value);
    },
  },
  {
    name: "makeExcerpt",
    execute: value => {
      return `${value.slice(0, 120)}...`;
    },
  },
  {
    name: "formatDate",
    execute: value => {
      const date = new Date(value);
      return new Intl.DateTimeFormat("pl-PL").format(date);
    },
  },
];
